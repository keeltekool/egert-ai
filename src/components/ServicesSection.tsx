const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="m8 21 4-4 4 4" />
      </svg>
    ),
    title: "AI-Powered App Development",
    description:
      "Full-stack web applications built with Next.js, React, and AI – from concept to deployed product. Multi-tenant SaaS, APIs, dashboards, mobile-first PWAs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "API Design & Development",
    description:
      "Production-grade REST APIs with OAuth 2.0, OpenAPI specs, rate limiting, SDKs, and developer portals. Following CSC and industry standards.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 17 4-8 4 4 4-10" />
      </svg>
    ),
    title: "Data Integration & Scraping",
    description:
      "Connect any data source – public APIs, web scrapers, government portals. Automated pipelines with daily syncs, deduplication, and structured storage.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "AI Automation & Workflows",
    description:
      "Autonomous AI loops, scheduled tasks, and intelligent workflows. From email triage to content generation – systems that work while you sleep.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-cream)" }}
    >
      <div className="container-main">
        <p className="section-label">WHAT I OFFER</p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(36px, 3.1vw, 44.8px)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "var(--color-text-primary)",
            marginBottom: "8px",
          }}
        >
          Services
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--color-text-muted)",
            marginBottom: "64px",
          }}
        >
          From prototype to production – practical solutions with AI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="transition-all duration-200"
              style={{
                backgroundColor: "var(--color-bg-white)",
                border: "0.8px solid var(--color-border-card)",
                borderRadius: "12px",
                padding: "40px",
              }}
            >
              {/* Icon */}
              <div
                className="mb-6 flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(176, 125, 79, 0.08)",
                  borderRadius: "8px",
                  color: "var(--color-copper)",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "27.2px",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--color-text-primary)",
                  marginBottom: "16px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "var(--color-text-muted)",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
