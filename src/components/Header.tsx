"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(1 0 0 / 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ height: "64px" }}>
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
      </div>
    </header>
  );
}
