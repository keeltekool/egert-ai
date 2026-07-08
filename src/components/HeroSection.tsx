"use client";

export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg)",
        paddingTop: "140px",
        paddingBottom: "72px",
      }}
    >
      <div className="wrap">
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            color: "var(--ink)",
            maxWidth: "900px",
            marginBottom: "36px",
          }}
        >
          45 production apps.
          <br />
          <span style={{ color: "var(--primary)" }}>Six months.</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(17px, 1.3vw, 19px)",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "var(--muted)",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          Product manager who builds. I use AI to ship production web
          apps — price trackers, booking systems, SaaS platforms, language
          tools, data dashboards. Not mockups. Working products with
          real users, real payments, and real infrastructure behind them.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="no-underline transition-all duration-200"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "var(--primary)",
              color: "#fff",
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              borderRadius: "6px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--primary-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary)")
            }
          >
            See the work
          </a>
          <a
            href="https://egertv.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-all duration-200"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "var(--ink)",
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--ink)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            Full portfolio →
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 400,
            color: "var(--muted)",
            marginTop: "56px",
          }}
        >
          Tallinn, Estonia
        </p>
      </div>
    </section>
  );
}
