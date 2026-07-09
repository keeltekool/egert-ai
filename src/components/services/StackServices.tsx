"use client";

import { useLang } from "./i18n";

// Tool names are not translated — identical in both languages.
const layers = [
  {
    label: "Frontend",
    items: "Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · PWAs · Service Workers · MapLibre",
  },
  {
    label: "Backend",
    items: "Neon PostgreSQL · Drizzle ORM · Vercel Serverless · FastAPI · GitHub Actions Crons",
  },
  {
    label: "Auth & Payments",
    items: "Clerk · Stripe Subscriptions · OAuth 2.0 · SCAL2 PIN · Bearer Tokens",
  },
  {
    label: "AI",
    items: "Claude API (Opus / Haiku) · estnltk MCP · Deterministic NLP Validation · AI Scoring Pipelines",
  },
  {
    label: "Data",
    items: "Cheerio · Cloudflare Browser Rendering · RSS Parsers · Barcode APIs · Elasticsearch · OSRM",
  },
  {
    label: "Infrastructure",
    items: "Cloudflare R2 · Resend Email · Web Push VAPID · Telegram Bots · iOS Shortcuts · Sentry",
  },
];

export function StackServices() {
  const { t } = useLang();
  return (
    <section
      id="stack"
      style={{
        backgroundColor: "var(--ink)",
        padding: "100px 0",
      }}
    >
      <div className="wrap">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 2.8vw, 36px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            color: "oklch(1 0 0)",
            marginBottom: "12px",
          }}
        >
          {t.stack.heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            lineHeight: 1.6,
            color: "oklch(1 0 0 / 0.5)",
            marginBottom: "56px",
            maxWidth: "440px",
          }}
        >
          {t.stack.intro}
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {layers.map((layer, i) => (
            <div
              key={layer.label}
              className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-0"
              style={{
                padding: "20px 0",
                borderTop:
                  i === 0
                    ? "1px solid oklch(1 0 0 / 0.12)"
                    : "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: "var(--primary)",
                  minWidth: "140px",
                  flexShrink: 0,
                }}
              >
                {layer.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14.5px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "oklch(1 0 0 / 0.65)",
                }}
              >
                {layer.items}
              </span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }} />
        </div>
      </div>
    </section>
  );
}
