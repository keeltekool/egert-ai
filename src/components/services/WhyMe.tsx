"use client";

import { useLang } from "./i18n";

export function WhyMe() {
  const { t } = useLang();
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg)",
        padding: "76px 0",
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
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "14px",
              }}
            >
              {t.about.eyebrow}
            </p>
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
              {t.about.name}
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
                {t.about.p1}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                {t.about.p2}
              </p>

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
