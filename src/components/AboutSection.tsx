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
          {/* Photo — constrained, not hero-sized */}
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

          {/* Narrative */}
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
              A product manager
              <br />
              who learned to ship.
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
                For years I wrote specs and handed them to engineering teams.
                Then Claude Code arrived and I could build the thing myself —
                not prototypes, not demos, but production systems with real
                databases, real auth, real payment flows, and real users.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                In six months I shipped 45 applications. A barcode-scanning
                grocery price tracker that matches products across three
                retail chains with a deterministic zero-AI matcher. An
                Estonian &quot;Grammarly&quot; where every LLM suggestion is
                re-validated by a rule-based NLP engine. A multi-tenant DJ
                request platform with Stripe subscriptions and YouTube API
                writes. A production booking system for a real tennis club —
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
                These aren&apos;t weekend toys. They have Neon databases,
                Clerk auth, Stripe payments, Cloudflare R2 storage, GitHub
                Actions crons, push notifications, Telegram bots, and
                Playwright test suites. I wire the backends, connect the
                APIs, set up the pipelines, and deploy to Vercel — all
                through Claude Code, all at a pace that would take a
                traditional team months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
