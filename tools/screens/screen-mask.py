# Builds a screen mask from a bezel PNG: flood-fills the transparent screen
# hole from the center (stopping at the opaque frame), and writes a PNG the
# size of the hole's bounding box whose alpha is the hole's coverage, so a
# screenshot clipped with it follows the bezel's own corner curve exactly.
# Usage: screen_mask.py <bezel.png> <out.png>
import sys
from collections import deque
from PIL import Image
bezel = Image.open(sys.argv[1]).convert("RGBA")
w, h = bezel.size
alpha = bezel.split()[-1].load()
seen = bytearray(w * h)
queue = deque([(w // 2, h // 2)])
seen[(h // 2) * w + w // 2] = 1
xs, ys = [], []
while queue:
    x, y = queue.popleft()
    xs.append(x); ys.append(y)
    for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
        if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx] and alpha[nx, ny] < 255:
            seen[ny * w + nx] = 1
            queue.append((nx, ny))
x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
mask = Image.new("L", (x1 - x0 + 1, y1 - y0 + 1), 0)
m = mask.load()
for x, y in zip(xs, ys):
    m[x - x0, y - y0] = 255 - alpha[x, y]
out = Image.new("RGBA", mask.size, (255, 255, 255, 255))
out.putalpha(mask)
out.save(sys.argv[2], optimize=True)
print("hole box", (x0, y0, x1, y1), "size", mask.size)
