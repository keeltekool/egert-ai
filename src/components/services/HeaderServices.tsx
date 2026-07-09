"use client";

import { useState, useEffect } from "react";
import { useLang } from "./i18n";
import type { Lang } from "./copy";

export function HeaderServices() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(1 0 0 / 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
      }}
    >
      <div
        className="wrap flex items-center justify-between"
        style={{ height: "64px" }}
      >
        <a
          href="#"
          className="no-underline"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "0.04em",
            color: "var(--ink)",
          }}
        >
          Egert Väinaste
        </a>

        <div className="flex items-center gap-7">
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="no-underline transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--muted)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--ink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const options: Lang[] = ["et", "en"];
  return (
    <div
      className="flex items-center"
      style={{
        border: "1px solid var(--border)",
        borderRadius: "6px",
        overflow: "hidden",
      }}
      role="group"
      aria-label="Language"
    >
      {options.map((opt, i) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={active}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.03em",
              padding: "5px 10px",
              cursor: "pointer",
              border: "none",
              borderLeft: i === 1 ? "1px solid var(--border)" : "none",
              backgroundColor: active ? "var(--primary)" : "transparent",
              color: active ? "#fff" : "var(--muted)",
              transition: "background-color 0.2s, color 0.2s",
            }}
          >
            {opt.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
