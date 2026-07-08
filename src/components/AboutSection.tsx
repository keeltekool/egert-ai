export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-cream)" }}
    >
      <div className="container-main">
        {/* Section header */}
        <p className="section-label">INTRODUCTION</p>
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
          About
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--color-text-muted)",
            marginBottom: "64px",
          }}
        >
          Building with AI, shipping fast
        </p>

        {/* Content: two-column */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Photo */}
          <img
            src="/images/Egert V.jpg"
            alt="Egert Väinaste"
            className="w-full max-w-[400px]"
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              aspectRatio: "3 / 4",
            }}
          />

          {/* Bio */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "27.2px",
                fontWeight: 400,
                color: "var(--color-text-primary)",
                marginBottom: "24px",
                lineHeight: 1.3,
              }}
            >
              Hi! I&apos;m Egert Väinaste – Product Manager and AI builder
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-text-muted)",
                marginBottom: "20px",
              }}
            >
              By day, I lead API product development at SK ID Solutions – building
              Europe&apos;s next-generation e-sealing infrastructure based on the CSC
              standard. By night (and weekends), I ship AI-powered products at an
              unreasonable pace.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-text-muted)",
                marginBottom: "20px",
              }}
            >
              In the past year, I&apos;ve built 25+ production applications using Claude
              Code as my development partner – from OAuth 2.0 API platforms and
              multi-tenant SaaS tools to mobile apps, data scrapers, and AI-powered
              job application systems.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-text-muted)",
                marginBottom: "20px",
              }}
            >
              My stack: Next.js, React, TypeScript, Tailwind CSS, Neon PostgreSQL,
              Clerk, Stripe, Vercel – with Claude AI powering the intelligence layer.
              Every project goes from zero to deployed in days, not months.
            </p>

            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "18px",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-text-muted)",
                marginTop: "32px",
              }}
            >
              I have the vision. And the tools to make it real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
