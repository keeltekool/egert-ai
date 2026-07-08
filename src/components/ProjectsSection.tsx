"use client";

const featured = [
  {
    title: "Hinnavaht",
    oneLiner: "Barcode-scanning grocery price tracker across three Estonian retail chains.",
    detail:
      "Scan a product, follow its price across Selver, Rimi, and Barbora. A deterministic zero-AI matcher links products by brand + unit-normalized size — a 28-case frozen golden set guards accuracy. GitHub Actions polls twice daily; push + email digests fire only on drops ≥25%. 60+ automated assertions including a 33-step Playwright click-through suite.",
    tags: ["Next.js", "Neon", "Web Push", "GitHub Actions", "Playwright"],
    url: "https://hinnavaht.vercel.app",
  },
  {
    title: "Keeletärk",
    oneLiner: "Estonian \"Grammarly\" with dual-layer AI + rule-engine validation.",
    detail:
      "estnltk flags deterministic grammar errors as ground truth. Claude Opus proposes naturalness fixes — and every LLM suggestion is re-validated through the rule engine before display. Red errors, blue suggestions, animated quality scores, pick-and-choose fixes, one-click full rewrite in four styles, English→Estonian translation.",
    tags: ["Claude API", "estnltk MCP", "Clerk", "Neon"],
    url: "https://keeletark.vercel.app",
  },
  {
    title: "SongDrop Pro",
    oneLiner: "Multi-tenant SaaS for DJs — QR requests straight into YouTube playlists.",
    detail:
      "Self-serve onboarding: claim a slug, connect YouTube via signed-state OAuth, set avatar and accent color. Guests scan a QR, search YouTube Music, tap Request — the track drops into the DJ's playlist via the YouTube Data API. Stripe subscriptions at €12/mo with 14-day trial. Per-DJ data isolation, FastAPI search backend on Render.",
    tags: ["Stripe", "OAuth 2.0", "YouTube API", "FastAPI", "Clerk"],
    url: "https://songdrop-app.vercel.app",
  },
];

const others = [
  {
    title: "Saku Tenniseklubi",
    desc: "Production booking system for a real Estonian tennis club. Drag-select/move/resize grid, recurring series, 6 CMS editors, DST-safe timezone engine, 71 tests. Client work — deployed and handed over.",
    url: "https://saku-tennis-revamp.vercel.app",
  },
  {
    title: "HankeRadar",
    desc: "AI-powered construction tender matching. Scrapes two portals every 2 hours, Haiku scores listings 1–10 against company profiles. Score ≥7 triggers instant Telegram + email alerts.",
    url: "https://hankeradar-alpha.vercel.app",
  },
  {
    title: "Mindloop",
    desc: "Voice-to-second-brain. Press the iPhone Action Button, talk — an iOS Shortcut POSTs into Neon. Weekly Claude Code synthesis surfaces themes and recurring loops on a knowledge-graph dashboard.",
    url: "https://mindloop-henna-omega.vercel.app/preview",
  },
  {
    title: "Keepr",
    desc: "Barcode-scanning grocery memory. Scan at the shelf, past-you answers in ~300ms. Rating happens later via push notification action buttons or signed email links. Shared commons catalog.",
    url: "https://keepr-psi.vercel.app",
  },
  {
    title: "Poland Travel Companion",
    desc: "12-day family road trip PWA. MapLibre map with live route split, 85 verified discoveries, login-free shared notes across phones, toggleable Tesla Supercharger layer.",
    url: "https://travel-assist-poland.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: "var(--surface)",
        padding: "120px 0",
      }}
    >
      <div className="wrap">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            color: "var(--ink)",
            marginBottom: "12px",
          }}
        >
          Selected work
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--muted)",
            marginBottom: "64px",
            maxWidth: "480px",
          }}
        >
          Eight of forty-five. Each one live, each one in production.
        </p>

        {/* Featured — detailed entries, NOT identical cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            backgroundColor: "var(--border)",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "48px",
          }}
        >
          {featured.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline transition-colors duration-200"
              style={{
                display: "block",
                backgroundColor: "var(--bg)",
                padding: "36px 32px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "oklch(0.985 0.004 80)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg)")
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                {/* Left: title + one-liner */}
                <div style={{ minWidth: "260px", marginBottom: "12px" }}>
                  <h3
                    className="group-hover:text-[var(--primary)] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                      marginBottom: "4px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--primary)",
                      lineHeight: 1.4,
                    }}
                  >
                    {p.oneLiner}
                  </p>
                </div>

                {/* Right: detail + tags */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14.5px",
                      lineHeight: 1.65,
                      color: "var(--muted)",
                      marginBottom: "14px",
                      maxWidth: "600px",
                    }}
                  >
                    {p.detail}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "var(--muted)",
                          backgroundColor: "var(--primary-soft)",
                          padding: "3px 10px",
                          borderRadius: "4px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Others — compact list, varied from the featured layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1px", backgroundColor: "var(--border)", borderRadius: "10px", overflow: "hidden" }}
        >
          {others.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline transition-colors duration-200"
              style={{
                display: "block",
                backgroundColor: "var(--bg)",
                padding: "28px 28px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "oklch(0.985 0.004 80)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg)")
              }
            >
              <h3
                className="group-hover:text-[var(--primary)] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  marginBottom: "6px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  color: "var(--muted)",
                }}
              >
                {p.desc}
              </p>
            </a>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <a
            href="https://egertv.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors duration-200"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--primary)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
          >
            View all 45+ projects →
          </a>
        </div>
      </div>
    </section>
  );
}
