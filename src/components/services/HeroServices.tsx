"use client";

import { useLang } from "./i18n";

export function HeroServices() {
  const { t } = useLang();
  return (
    <section
      style={{
        backgroundColor: "var(--bg)",
        paddingTop: "116px",
        paddingBottom: "48px",
      }}
    >
      <div className="wrap">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: "22px",
          }}
        >
          {t.hero.eyebrow}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5.2vw, 66px)",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            color: "var(--ink)",
            maxWidth: "920px",
            marginBottom: "34px",
          }}
        >
          {t.hero.headlineA}
          <br />
          <span style={{ color: "var(--primary)" }}>{t.hero.headlineB}</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(17px, 1.3vw, 19px)",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "var(--muted)",
            maxWidth: "560px",
            marginBottom: "40px",
          }}
        >
          {t.hero.body}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
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
              (e.currentTarget.style.backgroundColor = "var(--primary-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary)")
            }
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#work"
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
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
