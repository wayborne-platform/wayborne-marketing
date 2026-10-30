# Cuts a product render out of a white background into a transparent PNG.
#
# The background is every bright, neutral (gray to white) pixel connected to
# the image's edge, which also removes a soft glow baked around the object;
# light pixels inside the object stay opaque because the fill never reaches
# them. Pixels in a thin band along the object's outline are anti-aliased
# against that background, so for those the background shade is subtracted
# back out (color-to-alpha against the nearest background value) and no light
# fringe shows on a dark page. The result is cropped to the object plus `PAD`
# pixels.
#
# Usage: python3 tools/images/cutout-white.py <in.png> <out.png>
import sys
from collections import deque
from PIL import Image, ImageFilter

BRIGHT = 215   # background pixels are at least this bright in every channel
NEUTRAL = 8    # and at most this far apart between channels
BAND = 3       # outline width, in pixels, that gets un-mixed
PAD = 4

src = Image.open(sys.argv[1]).convert("RGB")
w, h = src.size
px = src.load()

def is_background(rgb):
    return min(rgb) >= BRIGHT and max(rgb) - min(rgb) <= NEUTRAL

# Flood the background in from the edges, recording each pixel's shade.
shade = Image.new("L", (w, h), 0)
sh = shade.load()
seen = bytearray(w * h)
queue = deque((x, y) for x in range(w) for y in (0, h - 1))
queue.extend((x, y) for y in range(h) for x in (0, w - 1))
while queue:
    x, y = queue.popleft()
    if seen[y * w + x] or not is_background(px[x, y]):
        continue
    seen[y * w + x] = 1
    sh[x, y] = max(px[x, y])
    for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
        if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx]:
            queue.append((nx, ny))

# For outline pixels, the background shade they were blended against.
nearby = shade.filter(ImageFilter.MaxFilter(2 * BAND + 1)).load()

def unmix(rgb, b):
    """Color-to-alpha against a background shade `b`."""
    a = max((b - c) / b if c <= b else (c - b) / (255 - b or 1) for c in rgb)
    a = min(1.0, max(0.0, a))
    if a == 0:
        return (0, 0, 0, 0)
    fg = tuple(round(min(255, max(0, (c - (1 - a) * b) / a))) for c in rgb)
    return (*fg, round(a * 255))

out = Image.new("RGBA", (w, h))
o = out.load()
for y in range(h):
    for x in range(w):
        if seen[y * w + x]:
            o[x, y] = (0, 0, 0, 0)
        elif nearby[x, y]:
            o[x, y] = unmix(px[x, y], nearby[x, y])
        else:
            o[x, y] = (*px[x, y], 255)

x0, y0, x1, y1 = out.getbbox()
out.crop((max(0, x0 - PAD), max(0, y0 - PAD), min(w, x1 + PAD), min(h, y1 + PAD))).save(sys.argv[2], optimize=True)
print("object", (x0, y0, x1, y1))
