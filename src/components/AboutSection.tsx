"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg)",
        padding: "120px 0",
      }}
    >
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          <img
            src="/images/Egert V.jpg"
            alt="Egert Väinaste"
            className="w-full"
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              aspectRatio: "3 / 4",
              maxWidth: "280px",
            }}
          />

          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 2.8vw, 36px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                color: "var(--ink)",
                marginBottom: "28px",
              }}
            >
              Egert Väinaste
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                maxWidth: "580px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                Product Manager by day, AI builder the rest of the time. I use
                Claude Code to ship full-stack production applications —
                not prototypes, not demos, but systems with real databases,
                real auth, real payment flows, and real users.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                45+ apps in six months. Barcode-scanning PWAs with
                deterministic product matching across retail chains.
                An Estonian NLP tool where every LLM suggestion is
                re-validated by a rule-based engine. Multi-tenant SaaS
                with Stripe subscriptions and YouTube API writes. A
                production booking system for a real tennis club —
                deployed and handed to the client.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                Stack: Next.js, React, TypeScript, Tailwind CSS, Neon
                PostgreSQL, Drizzle ORM, Clerk, Stripe, Cloudflare R2,
                GitHub Actions, Web Push, Telegram bots, Resend,
                Playwright, Vercel. Claude AI powers the intelligence layer.
              </p>

              {/* Value prop for SMB */}
              <div
                style={{
                  marginTop: "8px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "10px",
                  }}
                >
                  Looking for a builder?
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    color: "var(--muted)",
                  }}
                >
                  I build production web apps for small businesses and
                  startups — booking systems, customer portals, internal
                  tools, data dashboards, landing pages with real backends.
                  One person, fast delivery, no agency overhead. If you have
                  a problem that software can solve, let&apos;s talk.
                </p>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/in/egert-vainaste/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--primary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/keeltekool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--primary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
