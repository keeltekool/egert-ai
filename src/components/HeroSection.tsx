export function HeroSection() {
  return (
    <section
      className="relative"
      style={{
        backgroundColor: "var(--color-bg-dark)",
        padding: "72px 0 112px",
      }}
    >
      {/* Spacer for fixed header */}
      <div className="h-[72px]" />

      <div className="container-main">
        {/* Section label */}
        <p
          className="section-label"
          style={{ marginBottom: "32px" }}
        >
          AI BUILDER & PRODUCT MANAGER
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(40px, 4.7vw, 67.2px)",
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "var(--color-bg-cream)",
            maxWidth: "800px",
            marginBottom: "32px",
          }}
        >
          45 production apps in six months. All built with Claude Code.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            fontWeight: 300,
            color: "var(--color-text-light)",
            marginBottom: "48px",
          }}
        >
          Product Manager by trade. Full-stack builder with AI.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundColor: "var(--color-copper)",
              color: "#ffffff",
              padding: "16px 36px",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              letterSpacing: "1.3px",
              textTransform: "uppercase",
              border: "0.8px solid var(--color-copper)",
              borderRadius: "4px",
            }}
          >
            GET IN TOUCH
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundColor: "transparent",
              color: "rgba(246, 244, 239, 0.85)",
              padding: "16px 36px",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              letterSpacing: "1.3px",
              textTransform: "uppercase",
              border: "0.8px solid rgba(246, 244, 239, 0.25)",
              borderRadius: "4px",
            }}
          >
            VIEW PROJECTS
          </a>
        </div>

        {/* Divider */}
        <div
          style={{ marginTop: "80px", marginBottom: "56px", borderTop: "1px solid rgba(246, 244, 239, 0.2)" }}
        />

        {/* Stats */}
        <div className="flex gap-24">
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "44px",
                fontWeight: 300,
                color: "var(--color-bg-cream)",
                lineHeight: 1.1,
              }}
            >
              45+
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "1.3px",
                textTransform: "uppercase",
                color: "var(--color-text-light-muted)",
                marginTop: "8px",
              }}
            >
              APPS SHIPPED
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "44px",
                fontWeight: 300,
                color: "var(--color-bg-cream)",
                lineHeight: 1.1,
              }}
            >
              20+
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "1.3px",
                textTransform: "uppercase",
                color: "var(--color-text-light-muted)",
                marginTop: "8px",
              }}
            >
              SERVICES INTEGRATED
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="no-underline">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(246, 244, 239, 0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
