type PageHeaderProps = {
  title: string;
  description: string;
  tags?: string[];
};

export default function PageHeader({ title, description, tags }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#1a2744] py-20 text-white">
      {/* Gold gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#d4a84b]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4a84b]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="hero-title hero-word text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#d4a84b]/20 px-4 py-1.5 text-sm font-medium text-[#d4a84b]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
