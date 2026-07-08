export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "32px 0",
      }}
    >
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-3">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--muted)",
          }}
        >
          © 2026 Egert Väinaste
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "oklch(0.60 0.01 80)",
          }}
        >
          Built with Claude Code
        </p>
      </div>
    </footer>
  );
}
