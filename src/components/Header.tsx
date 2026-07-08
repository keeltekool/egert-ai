"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
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
        backgroundColor: scrolled
          ? "rgba(246, 244, 239, 0.95)"
          : "rgba(246, 244, 239, 0.92)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "0.8px solid #e5e0d8" : "none",
      }}
    >
      <div className="container-main flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-baseline gap-1 no-underline"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "18px", letterSpacing: "2px", color: "var(--color-text-primary)" }}
        >
          EGERT<span style={{ color: "var(--color-copper)", fontWeight: 400 }}> AI</span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline transition-colors duration-200"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "1.3px",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
