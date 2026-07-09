"use client";

import { useLang } from "./i18n";

export function OfferingSection() {
  const { t } = useLang();
  return (
    <section
      id="offer"
      style={{
        backgroundColor: "var(--surface)",
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
          {t.offering.heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--muted)",
            marginBottom: "40px",
            maxWidth: "540px",
          }}
        >
          {t.offering.intro}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            backgroundColor: "var(--border)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {t.offering.items.map((o) => (
            <div
              key={o.label}
              style={{
                backgroundColor: "var(--bg)",
                padding: "36px 32px",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                <div style={{ minWidth: "260px", marginBottom: "12px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                      marginBottom: "4px",
                    }}
                  >
                    {o.label}
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
                    {o.oneLiner}
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
                      maxWidth: "620px",
                    }}
                  >
                    {o.detail}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {o.tags.map((tag) => (
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
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14.5px",
            lineHeight: 1.65,
            color: "var(--muted)",
            marginTop: "28px",
            maxWidth: "620px",
          }}
        >
          {t.offering.note}
        </p>
      </div>
    </section>
  );
}
