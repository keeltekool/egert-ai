# Decisions & Boundaries Brief — for the copy overhaul

_Context for whoever (Codex) does the full copy overhaul of the `/services` page. These are the constraints the owner (Egert) steered to during the build. Stay inside them._

## What this page is

- An **elevation of the existing portfolio page** into a **commercial offering / "work with me" page**. The existing landing (`egert-ai.vercel.app`, home `/`) **stays live and unchanged**. The new page lives at route `/services`.
- Purpose: make the **commercial intent unavoidable** — the current page proves Egert can build, but doesn't say "you can hire him." This page fixes that.
- It is NOT a small throwaway fork — treat it as the leveled-up version. Direction can still evolve.

## Positioning (locked)

- Core identity / main recurring message: **"AI-native product builder."** Builder first — that's the credibility the whole page rests on.
- He also offers **consulting and training** — these are **first-class commercial offerings, not afterthoughts**.
- The three services are **standalone and independently bookable**: **Consultation · Training · Build**. Any one alone, or combined. **No forced funnel** (do NOT imply "consult → then build" as the only path).
- Credibility backbone: the **wall of 45+ live, clickable, production apps**. Nobody else in the Estonian AI market can show this. It IS the proof — "you don't have to claim you can build; open the work."

## Hard boundaries (do NOT cross)

1. **No concrete prices. No price packages.** No "from €X", no tiers with numbers, no rate cards. This was explicitly decided against. Describe scope/outcomes, not cost.
2. **No "us vs them" comparison table.** A two-column market-vs-me chart was rejected as cookie-cutter. 
3. **Differentiation must be delicate/subtle** — hinted through tone, never a confrontation, **never naming competitors**, never bashing trainers/consultants/agencies. (E.g. "most stop at the talk; I don't" is fine. A grievance list is not.)
4. **Both English AND Estonian.** Egert has ordered Estonian copy from Codex too — deliver **both language versions**. The page will ship bilingual (EN + ET). Estonian must read as genuinely native, not translated-from-English; when it's implemented it will be verified with proper Estonian tooling (estnltk) — so write real, idiomatic Estonian, not machine-literal.
5. **Keep the existing design system** — cream/white surfaces, amber/honey primary, Hanken Grotesk, editorial restraint, anti-hype. Restraint is itself the differentiator here; everyone else is louder.
6. **"About / Why me" must sit HIGH on the page** (right after the hero, with photo) — never buried at the end.

## Voice (what "good copy" means here)

- Concrete, confident, specific. His own homepage voice: _"Not mockups. Working products with real users, real payments, and real infrastructure."_
- **Avoid generic AI-consultant clichés** — "put AI to work," "practical AI," "boost productivity," "AI readiness" (as a claim), "unlock." The market analysis found "praktiline/practical" is used by everyone and no longer differentiates.
- Lead with the **thing the buyer gets** (working software, a trained team, a clear plan), not with "AI."
- Use **nouns buyers understand**: portal, dashboard, booking system, internal tool, monitor, payment flow, pipeline, MVP — not vague "AI agents/AI transformation."

## Copy donors (source material, don't freehand)

- **Existing live site copy** (home `/` About, projects, stack) = the proven base voice. Reuse it.
- **`docs/fork-offer/03-codex-content-only-output.md`** = the stronger commercial copy — reuse it **minus the pricing/price-package parts** (boundary #1) and minus the literal comparison table (boundary #2).
- **`docs/fork-offer/01-...`** and **`02-...`** = market analysis + earlier recommendations (context; note `02` still contains pricing/contrast ideas that are now OFF per boundaries above).

## Current section order (implemented)

Hero → **Why me** (photo + bio, high up) → **Proof** (45 live apps) → **Offering** (Consultation/Training/Build, standalone) → **How it works** → **Stack** → **Contact**.

Currently donor-sourced: **Hero** (Codex), **Why me** (live site). Still owner's-build-time wording and open to overhaul: **Offering, How it works, Contact**.

## Deliverable languages

Codex should return **full copy in both English and Estonian** for every section. On our side we then build the page bilingual (EN + ET). Estonian gets an estnltk verification pass before it goes live.

## One-line summary

A calm, dense, credible **commercial offering page** for an **AI-native product builder** who consults, trains, and builds — proven by 45 live apps — **without prices on the page, without a vs-them table, and without generic AI-hype language.**
