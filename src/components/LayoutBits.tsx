export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand ${className}`}
    >
      {children}
    </p>
  );
}

export function Heading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`font-display font-bold tracking-tight text-balance ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}

export function MediaSplit({
  imageSrc,
  imageAlt,
  reverse = false,
  children,
  caption,
}: {
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children: React.ReactNode;
  caption?: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <figure className={reverse ? "lg:order-2" : ""}>
        <Photo
          src={imageSrc}
          alt={imageAlt}
          className="h-full max-h-[32rem] w-full rounded-3xl object-cover card-shadow"
        />
        {caption ? (
          <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
        ) : null}
      </figure>
      <div>{children}</div>
    </div>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 leading-relaxed text-muted">{children}</div>
  );
}
