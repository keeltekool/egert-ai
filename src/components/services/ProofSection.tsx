"use client";

import { useLang } from "./i18n";

export function ProofSection() {
  const { t } = useLang();
  return (
    <section
      id="work"
      style={{
        backgroundColor: "var(--bg)",
        padding: "76px 0",
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
          {t.proof.heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--muted)",
            marginBottom: "40px",
            maxWidth: "560px",
          }}
        >
          {t.proof.intro}
        </p>

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
          {t.proof.items.map((p) => (
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
                (e.currentTarget.style.backgroundColor = "oklch(0.985 0.004 80)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg)")
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-12">
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
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
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
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--primary)")}
          >
            {t.proof.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
