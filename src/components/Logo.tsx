type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const src = variant === "dark" ? "/logo-on-dark.svg" : "/logo.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Structure Scan Inc."
      className={`h-full w-auto ${className}`}
    />
  );
}
