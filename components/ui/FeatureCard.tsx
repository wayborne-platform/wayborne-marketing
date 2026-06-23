import { MediaFrame } from "./MediaFrame";
import { Reveal } from "./Reveal";

type FeatureCardProps = {
  heading: string;
  body: string;
  image: string;
  delay?: number;
};

/** A sub-feature tile: framed screenshot above a heading + supporting copy. */
export function FeatureCard({ heading, body, image, delay = 0 }: FeatureCardProps) {
  return (
    <Reveal delay={delay} className="flex flex-col gap-6">
      <MediaFrame
        src={image}
        alt=""
        width={472}
        height={400}
        sizes="(max-width: 768px) 100vw, 480px"
        className="w-full"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium text-[var(--color-fg)]">{heading}</h3>
        <p className="text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{body}</p>
      </div>
    </Reveal>
  );
}
