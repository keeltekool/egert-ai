"use client";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--ink)",
        padding: "40px 0",
      }}
    >
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "oklch(1 0 0 / 0.4)",
          }}
        >
          © 2026 Egert Väinaste · Built with Claude Code
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/egert-vainaste/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors duration-200"
            style={{ color: "oklch(1 0 0 / 0.5)", fontSize: "13px", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(1 0 0 / 0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(1 0 0 / 0.5)")}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/keeltekool"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors duration-200"
            style={{ color: "oklch(1 0 0 / 0.5)", fontSize: "13px", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(1 0 0 / 0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(1 0 0 / 0.5)")}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
