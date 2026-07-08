export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text-light-muted)",
        padding: "64px 0 48px",
      }}
    >
      <div className="container-main">
        {/* Social links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/egert-vainaste/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-80"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "0.8px solid rgba(246, 244, 239, 0.2)",
              color: "rgba(246, 244, 239, 0.7)",
            }}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/keeltekool"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-80"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "0.8px solid rgba(246, 244, 239, 0.2)",
              color: "rgba(246, 244, 239, 0.7)",
            }}
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="mb-8" style={{ borderTop: "0.8px solid rgba(246, 244, 239, 0.15)" }} />

        {/* Copyright */}
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "rgba(246, 244, 239, 0.5)",
          }}
        >
          © 2026 Egert Väinaste. Built with Claude Code.
        </p>
      </div>
    </footer>
  );
}
