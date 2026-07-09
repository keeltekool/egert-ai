# Fork Page — Recommendations, Offer Copy & UI/UX Change List

_Companion to `01-estonian-ai-market-analysis.md`. This is the buildable spec for the "hire me" fork._

## 0. What changes vs. the current page

The current page is a **portfolio** (identity: "look who shipped 45 apps"). The fork is an **offer** (intent: "hire this person to build yours"). Same design system, same components, same restraint — **re-sequenced and re-written around a buying decision.**

- **Keep intact:** the existing landing (portfolio) stays live and unchanged.
- **Fork = a second page** on the same Next app + design tokens. Recommended route: `/build` (or `/hire`). Reuses `Header`, `Footer`, `wrap`, colours, Hanken Grotesk, the projects data.
- **The design language does not change.** Cream/white, amber-honey primary, editorial, anti-hype. The market analysis proves that _restraint is itself a differentiator_ here — everyone else is louder.

### Section map: current → fork

| Current portfolio | Fork ("/build") | Why |
|---|---|---|
| Hero: "45 production apps. Six months." | **Hero: the offer hook** (proof + "I build it for you") | Lead with intent, keep the number as proof |
| — | **NEW: "The market vs. me" contrast strip** | Plant the flag from the analysis |
| About | **"Who builds it" (tightened, hire-framed)** | Trust: PM at SK ID Solutions who actually ships |
| Projects: "Selected work" | **"Proof — 45 live things, click any"** | Reframe portfolio as evidence for the buyer |
| — | **NEW: "What I'll build for you" (productised offers)** | The thing no competitor shows |
| — | **NEW: "How it works" (process + why one person)** | De-risk the engagement |
| Stack | **Stack (kept, retitled "The standard")** | Depth as differentiator |
| Contact | **"Book a build call" (stronger CTA)** | Convert |

---

## 1. HERO — the offer hook

**Design:** identical to current hero (same type scale, same two-button row, same "Tallinn, Estonia" line). Only copy changes, plus the primary CTA points to booking, not `#work`.

### Copy (recommended)

> **Headline:** You don't need another AI course.
> <span style="color:var(--primary)">You need the thing built.</span>
>
> **Sub:** Estonia is full of people who'll _teach_ you AI, _audit_ your AI readiness, or run a wine-coding evening. I do the other thing: I build the actual software — booking systems, customer portals, internal tools, dashboards, SaaS — production-grade, one accountable person, live in weeks. **45 of them already shipped. Click any.**
>
> **Primary CTA:** Book a build call →
> **Secondary CTA:** See the 45 live apps ↓
>
> **Foot line:** One builder · Tallinn, Estonia · Working products, not slide decks

**Alternate headline options** (pick by appetite for edge):

- _Safe/premium:_ **"I build the software. Not the slide deck."**
- _Sharpest (leans into the analysis):_ **"Everyone's selling AI. I ship what it builds."**
- _Outcome-first:_ **"Production software, built with AI, live in weeks — not a workshop in your calendar."**

> **Note:** the current portfolio hero keeps "45 production apps. Six months." — don't lose that line, it's excellent. On the fork it moves from headline to **proof inside the sub / foot line**, because the fork's headline job is _intent_, not _flex_.

---

## 2. NEW — "The market vs. me" contrast strip

The single most important addition. Plants the flag from the analysis **without naming or bashing anyone** (classy, and legally clean). A tight two-column or table block on `--surface` background.

### Copy

> **Eyebrow:** The Estonian AI landscape
> **Heading:** Most of it is talk. This is the receipt.

| What the market sells | What I do |
|---|---|
| Courses & workshops — you leave knowing how to prompt | I leave you with the finished software |
| AI audits & 80-page readiness reports | A working product in your hands, deployed |
| "A client in fintech…" (anonymous case studies) | Named, live, clickable — try them yourself |
| A studio, account managers, agency markup | One builder, direct, no overhead |
| "Book a call for a quote" | Fixed-scope packages with real prices, below |

> **Closing line under the table:** I'm not against training — some of it's genuinely good. But if you already know AI is useful and you just want the tool built, a curriculum is the wrong purchase. Hire the builder.

**Ponytail note:** keep this to _one_ screen. The power is in brevity — a long grievance list reads as insecurity. Five rows max.

---

## 3. "Who builds it" (About, hire-framed)

Tighten the existing About into a **trust block for a buyer**, not a bio. Keep the photo, keep the stack sentence.

### Copy

> **Heading:** Who actually builds it
>
> Egert Väinaste. Product Manager at **SK ID Solutions** — Estonia's digital-identity and e-signing infrastructure, the kind of software that cannot afford to be flaky. That's the day job. The rest of the time I build production web apps with Claude Code, at a pace that used to require a team.
>
> **45+ apps in six months** — and not toys. A barcode PWA that matches products across three retail chains with a deterministic engine and a 28-case golden test set. An Estonian NLP tool where every AI suggestion is re-validated by a rule engine before you see it. A multi-tenant SaaS with Stripe subscriptions. A booking system deployed and handed to a real tennis club.
>
> **What that means for you:** a product manager who scopes the actual business problem, and an engineer who ships it — the same person, no translation loss, no agency layer.

Keep LinkedIn / GitHub links as-is.

---

## 4. "Proof — 45 live things" (Projects, reframed)

**Design:** reuse the existing `ProjectsSection` layout exactly (featured detailed rows + compact grid). Only the section heading/intro change, to speak to a buyer.

### Copy

> **Heading:** Proof: 45 live products, not a portfolio of mockups
> **Intro:** Every link below opens a real, deployed app with real users behind it. This is the whole pitch — you can verify it in the next sixty seconds. No other AI shop in Estonia will hand you the URLs.

Keep all 8 projects. **Add one micro-label per featured item** that maps it to a _buyable outcome_, e.g.:

- Hinnavaht → _"→ the kind of price-monitoring / data pipeline I'd build for you"_
- Keeletärk → _"→ AI + rule-engine validation, done responsibly"_
- SongDrop Pro → _"→ a full multi-tenant SaaS with payments"_
- Saku Tenniseklubi → _"→ a booking system, deployed & handed over — this could be yours"_

This turns the portfolio from _admiration_ into _shopping_.

---

## 5. NEW — "What I'll build for you" (productised offers) ⭐

**The centerpiece. No competitor shows this.** Productised packages with clear scope, timeline, and indicative price. Reuse the featured-project row styling (title + one-liner + detail + tag chips) so it visually rhymes with the proof section.

> **Pricing decision is yours** — see §8. Ranges below are placeholders sized to the Estonian SMB market and to solo delivery; adjust before publish. Showing _any_ number is the differentiator.

### Copy

> **Heading:** What I'll build for you
> **Intro:** Fixed scope, fixed price, one person accountable end to end. Not a retainer you can't predict — a thing that gets built and handed over.

**Package 1 — Landing / site with a real backend**
> A fast, well-designed site that actually _does_ something — bookings, lead capture, a form that writes to a real database, email/Telegram alerts. Not a template.
> _Timeline: ~1–2 weeks · from €1,500_
> Tags: Next.js · Neon · Resend · Deploy + handover

**Package 2 — Internal tool / dashboard**
> The spreadsheet-and-manual-work killer. A custom internal app: data dashboards, admin panels, scraping/monitoring pipelines, automated reports. Replaces the process nobody enjoys.
> _Timeline: ~2–4 weeks · from €3,500_
> Tags: Dashboards · Scrapers · Crons · Auth

**Package 3 — Full product / SaaS MVP**
> A real product: multi-tenant, authentication, Stripe subscriptions, the works — the level of SongDrop Pro or a booking platform. Launch-ready, not a demo.
> _Timeline: ~4–8 weeks · from €7,000_
> Tags: Multi-tenant · Stripe · Clerk · Production-grade

**Package 4 — AI feature, done responsibly**
> An AI capability inside your product — but built the way Keeletärk is: every model output validated, no hallucinated nonsense shipped to your users. AI where it earns its place, not sprinkled on.
> _Timeline: scoped per case · from €2,500_
> Tags: Claude API · Deterministic validation · Guardrails

> **Under the packages:** Not sure which one? That's what the call is for — we scope the real problem in 30 minutes, and you get a fixed number back, not a mystery.

---

## 6. NEW — "How it works" (process + de-risk)

Short 3–4 step strip. Reuse the Stack section's row-list styling (label + text rows on a tinted background). Answers "what am I actually buying, and why one person over an agency."

### Copy

> **Heading:** How a build works
>
> 1. **Call (free, 30 min).** You describe the problem. I tell you honestly if software is even the right answer, and roughly what it takes. No 80-page report.
> 2. **Fixed scope & price.** You get a concrete spec and a fixed number before anything starts. No open-ended hourly meter.
> 3. **I build it — fast.** One person, no agency relay. You see it deployed as it comes together, not at the end.
> 4. **Handover.** Live, documented, and yours — the code, the deploy, the keys. Like the tennis club got. I don't hold your product hostage.
>
> **Why one person beats an agency here:** the person who scopes it is the person who builds it. No account manager, no translation loss, no markup for a team you'll never meet. Fast because there's nothing in the way.

---

## 7. Stack ("The standard") + Contact

- **Stack:** keep the section verbatim (it's already strong and on-brand). Retitle to **"The standard everything's built to"** and keep the line _"Every item here is in production code, not a list of aspirations."_ — it does double duty as a quality signal for a buyer.
- **Contact → "Book a build call":**
  > **Heading:** Ready to build something real?
  > **Body:** Tell me the problem you're trying to solve. If software's the answer, I'll give you a fixed scope and price. If it isn't, I'll tell you that too.
  > **Primary CTA:** Book a call → (Cal.com / email `egertv@gmail.com`)
  > Keep the LinkedIn/GitHub icons.

---

## 8. Decisions to lock before build

These change the page materially and are **your call**, not defaults I should assume:

1. **Pricing visibility** — (a) show indicative "from €X" per package _[recommended — it's the single biggest differentiator]_, (b) show ranges only, or (c) no numbers, "book a call." My strong rec: (a). Nobody else does it.
2. **Language** — English only (like the current page), Estonian only, or both (EN + ET toggle)? The buyers you're differentiating _against_ sell mostly in Estonian to Estonian SMBs. An **Estonian version may convert better** for local clients, English for reach/recruiters. Both is more build.
3. **Edge of the contrast section** — classy-implicit (recommended, current draft) vs. sharper. Never name competitors either way.
4. **Booking mechanism** — Cal.com embed vs. plain email/mailto. (Cal.com is a small add.)
5. **Fork location** — new route `/build` in this app _[recommended]_, vs. separate deploy/domain.
6. **Headline choice** — pick one from §1.

---

## 9. Build order (once approved)

1. Scaffold `src/app/build/page.tsx` reusing `Header`/`Footer` + a new set of section components under `src/components/build/`.
2. HeroBuild → ContrastStrip → WhoBuildsIt → ProofWall (reuse projects data) → Offers → HowItWorks → Stack (reuse) → BookCall.
3. Wire pricing/copy from the locked decisions in §8.
4. Verify at 375px + 1440px + 1920px (per CLAUDE.md §4), screenshot both, click every CTA.
5. Keep the existing `/` portfolio untouched.

**Nothing gets built until §8 is answered.**
