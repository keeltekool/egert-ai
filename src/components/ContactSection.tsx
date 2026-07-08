export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-white)" }}
    >
      <div className="container-main">
        <p className="section-label">GET IN TOUCH</p>
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
          Contact
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--color-text-muted)",
            marginBottom: "64px",
          }}
        >
          Let&apos;s talk about your next project.
        </p>

        {/* Contact card */}
        <div
          className="max-w-[640px]"
          style={{
            backgroundColor: "var(--color-bg-white)",
            border: "0.8px solid var(--color-border-card)",
            borderRadius: "12px",
            padding: "56px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "27.2px",
              fontWeight: 400,
              color: "var(--color-text-primary)",
              marginBottom: "48px",
            }}
          >
            Contact info
          </h3>

          {/* Email */}
          <div className="flex items-center gap-5" style={{ marginBottom: "32px" }}>
            <div style={{ color: "var(--color-copper)", width: "24px", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--color-text-muted)" }}>
                Email:{" "}
              </span>
              <a
                href="mailto:egertv@gmail.com"
                className="no-underline hover:underline"
                style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--color-text-primary)" }}
              >
                egertv@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-5" style={{ marginBottom: "48px" }}>
            <div style={{ color: "var(--color-copper)", width: "24px", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--color-text-primary)" }}>
              Tallinn, Estonia
            </span>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "0.8px solid var(--color-border-card)", marginBottom: "48px" }} />

          {/* CTA button */}
          <a
            href="mailto:egertv@gmail.com"
            className="block no-underline text-center transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundColor: "var(--color-copper)",
              color: "#ffffff",
              padding: "16px 32px",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              letterSpacing: "1.3px",
              textTransform: "uppercase",
              borderRadius: "4px",
              marginBottom: "32px",
            }}
          >
            SEND EMAIL
          </a>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/egert-vainaste/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-70"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "0.8px solid var(--color-border-card)",
                color: "var(--color-text-muted)",
              }}
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/keeltekool"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-70"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "0.8px solid var(--color-border-card)",
                color: "var(--color-text-muted)",
              }}
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
