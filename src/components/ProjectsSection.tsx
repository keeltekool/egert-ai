const projects = [
  {
    title: "Hinnavaht",
    description:
      "Barcode-scanning grocery price tracker across three Estonian retail chains. Deterministic zero-AI product matching, GitHub Actions cron, push + email digests on drops ≥25%.",
    icon: "📊",
    url: "https://hinnavaht.vercel.app",
  },
  {
    title: "Keeletärk",
    description:
      "Estonian \"Grammarly\" with dual-layer AI + rule-engine validation. Every LLM suggestion re-validated by estnltk before display. Animated quality scores, one-click rewrite.",
    icon: "✍️",
    url: "https://keeletark.vercel.app",
  },
  {
    title: "SongDrop Pro",
    description:
      "Multi-tenant SaaS for DJs. Stripe subscriptions, YouTube API playlist writes, signed-state OAuth, QR-driven guest requests. Per-DJ data isolation.",
    icon: "🎵",
    url: "https://songdrop-app.vercel.app",
  },
  {
    title: "Saku Tenniseklubi",
    description:
      "Production booking system for a real Estonian tennis club. Drag-select/move/resize grid, 6 CMS editors, DST-safe timezone engine, 71 tests. Client work — deployed and handed over.",
    icon: "🎾",
    url: "https://saku-tennis-revamp.vercel.app",
  },
  {
    title: "HankeRadar",
    description:
      "AI-powered construction tender matching. Scrapes two portals every 2 hours, Haiku scores listings 1–10. Score ≥7 triggers instant Telegram + email alerts.",
    icon: "🔍",
    url: "https://hankeradar-alpha.vercel.app",
  },
  {
    title: "Mindloop",
    description:
      "Voice-to-second-brain. Press the iPhone Action Button, talk — iOS Shortcut POSTs into Neon. Weekly Claude Code synthesis surfaces themes on a knowledge-graph dashboard.",
    icon: "🧠",
    url: "https://mindloop-henna-omega.vercel.app/preview",
  },
  {
    title: "Keepr",
    description:
      "Barcode-scanning grocery memory. Scan at the shelf, past-you answers in ~300ms. Rating via push notification action buttons or signed email links. Shared commons catalog.",
    icon: "📱",
    url: "https://keepr-psi.vercel.app",
  },
  {
    title: "Poland Travel Companion",
    description:
      "12-day family road trip PWA. MapLibre map with live route split, 85 verified discoveries, login-free shared notes across phones, toggleable Tesla Supercharger layer.",
    icon: "🗺️",
    url: "https://travel-assist-poland.vercel.app",
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
          Eight of forty-five — all live, all in production
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
            VIEW ALL 45+ PROJECTS →
          </a>
        </div>
      </div>
    </section>
  );
}
