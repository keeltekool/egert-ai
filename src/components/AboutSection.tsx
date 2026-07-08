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
              Hi! I&apos;m Egert Väinaste – Product Manager &amp; AI builder
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
              Product Manager by day, AI builder by night (and weekends). I ship
              production applications at an unreasonable pace using Claude Code as
              my development partner.
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
              In six months, I&apos;ve built 45+ production applications – from
              barcode-scanning PWAs and multi-tenant SaaS platforms to dual-layer
              NLP engines, autonomous scraping pipelines, and production booking
              systems for real clients.
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
              Clerk, Stripe, Cloudflare R2, Vercel – with Claude AI powering the
              intelligence layer. Real databases, real auth, real payments, real users.
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
