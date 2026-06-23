import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Centered page column matching the marketing layout's max width. */
export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-[1024px] px-6 ${className}`}>{children}</div>;
}
