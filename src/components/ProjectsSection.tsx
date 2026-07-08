const projects = [
  {
    title: "Alkoholiks API",
    description:
      "Production-grade REST API with OAuth 2.0, OpenAPI 3.1, Swagger UI, rate limiting, and developer dashboard. 1,871 products across 5 stores.",
    icon: "🔗",
    url: "https://alkoholiks-api.vercel.app",
  },
  {
    title: "PriceHNTR",
    description:
      "Mobile drink price comparison app. Browse cheapest drinks across 5 Estonian retail chains with instant search and filters.",
    icon: "💰",
    url: "https://price-hntr.vercel.app",
  },
  {
    title: "Rental Business Kit",
    description:
      "Multi-tenant booking platform with service carousel, availability calendar, Stripe payments, and full admin console with 9 management sections.",
    icon: "📅",
    url: "https://rental-business-kit.vercel.app/t/mets",
  },
  {
    title: "ApplyKit",
    description:
      "Full-stack AI job application platform. CV tailoring, cover letters, interview prep with AI coach, Skills Vault, and Career Coach.",
    icon: "📄",
    url: "https://cv-tailor-plus.vercel.app",
  },
  {
    title: "GymPal",
    description:
      "Fat-loss strength training PWA with tier-based exercise rotation, live timer, vault for favorites, and calendar history.",
    icon: "💪",
    url: "https://gym-app-eight-phi.vercel.app",
  },
  {
    title: "HOOG",
    description:
      "Harjumaa event aggregator – all cultural, sport, and community events across 16 Estonian towns from 4 data sources.",
    icon: "🎭",
    url: "https://event-radar-six.vercel.app",
  },
  {
    title: "CrateDig",
    description:
      "Music discovery for DJs. Upload your library, roll the dice, let YouTube Music find tracks seeded by songs you love.",
    icon: "🎵",
    url: "https://crate-dig-two.vercel.app",
  },
  {
    title: "Loop Control Center",
    description:
      "Dashboard for autonomous Claude Code loops – recurring AI tasks with toggle, monitoring, run history, and success tracking.",
    icon: "🔄",
    url: "https://loop-control-center.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-white)" }}
    >
      <div className="container-main">
        <p className="section-label">WHAT I BUILD</p>
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
          Projects
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--color-text-muted)",
            marginBottom: "64px",
          }}
        >
          A selection of production apps, all built with AI
        </p>

        {/* 2x2 grid like original services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block no-underline transition-all duration-200"
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
                  fontSize: "20px",
                }}
              >
                {project.icon}
              </div>

              {/* Title */}
              <h3
                className="group-hover:text-[var(--color-copper)] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "27.2px",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  marginBottom: "16px",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "var(--color-text-muted)",
                }}
              >
                {project.description}
              </p>
            </a>
          ))}
        </div>

        {/* Link to full portfolio */}
        <div className="text-center mt-12">
          <a
            href="https://egertv.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 no-underline transition-opacity duration-200 hover:opacity-80"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "1.3px",
              textTransform: "uppercase",
              color: "var(--color-copper)",
            }}
          >
            VIEW ALL 25+ PROJECTS →
          </a>
        </div>
      </div>
    </section>
  );
}
