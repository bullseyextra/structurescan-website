type LogoProps = {
  onDark?: boolean;
  className?: string;
};

export function Logo({ onDark = false, className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex h-full items-center ${
        onDark ? "rounded-2xl bg-cream px-2 py-1" : ""
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/logos/logo-transparent.png"
        alt="Structure Scan Inc."
        width={265}
        height={180}
        className="h-full w-auto"
      />
    </span>
  );
}
