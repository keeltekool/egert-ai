// Bilingual copy for the /services page. Estonian is the default language;
// English is selectable. Source of truth: docs/fork-offer/06-services-estonian-copy-final.md
// Em-dashes are written as en-dashes (–) per the page's dash convention.

export type Lang = "et" | "en";

export interface OfferItem {
  label: string;
  oneLiner: string;
  detail: string;
  tags: string[];
}

export interface ProofItem {
  title: string;
  oneLiner: string;
  detail: string;
  tags: string[];
  url: string;
}

export interface Copy {
  nav: { work: string; about: string; stack: string; contact: string };
  hero: {
    eyebrow: string;
    headlineA: string;
    headlineB: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: { eyebrow: string; name: string; p1: string; p2: string };
  offering: {
    heading: string;
    intro: string;
    items: OfferItem[];
    note: string;
  };
  proof: {
    heading: string;
    intro: string;
    items: ProofItem[];
    viewAll: string;
  };
  stack: { heading: string; intro: string };
  contact: { heading: string; body: string; cta: string };
  footer: string;
}

const PROOF_TAGS = {
  hinnavaht: ["Next.js", "Neon", "Web Push", "GitHub Actions", "Playwright"],
  keeletark: ["Claude API", "estnltk MCP", "Clerk", "Neon"],
  songdrop: ["Stripe", "OAuth 2.0", "YouTube API", "FastAPI", "Clerk"],
};
const PROOF_URLS = {
  hinnavaht: "https://hinnavaht.vercel.app",
  keeletark: "https://keeletark.vercel.app",
  songdrop: "https://songdrop-app.vercel.app",
};

export const copy: Record<Lang, Copy> = {
  et: {
    nav: { work: "Töö", about: "Minust", stack: "Stack", contact: "Kontakt" },
    hero: {
      eyebrow: "AI-native tooteehitaja · Tallinn",
      headlineA: "Sul ei ole vaja veel üht AI-koolitust.",
      headlineB: "Sul on vaja, et asi saaks valmis.",
      body: "On palju inimesi, kes koolitavad su tiimi või hindavad teie AI-valmidust. Teen seda samuti. Aga ma ei jää ainult jutu juurde: kui vaja on päriselt töötavat lahendust, ehitan selle valmis. Sisetööriistad, portaalid, juhtpaneelid, broneerimissüsteemid, SaaS – tehtud kasutamiseks, mitte demoks.",
      ctaPrimary: "Räägime projektist",
      ctaSecondary: "Vaata töötavaid tooteid ↓",
    },
    about: {
      eyebrow: "AI-native tooteehitaja",
      name: "Egert Väinaste",
      p1: "Päeval tootejuht, muul ajal AI abil ehitaja. Kasutan Claude Code'i, et viia full-stack rakendusi päriskasutusse – mitte prototüüpe või demosid, vaid süsteeme, millel on päris andmebaasid, autentimine, maksevood ja kasutajad.",
      p2: "Üks inimene, kes aitab probleemi piiritleda ja ehitab lahenduse ka valmis – ilma agentuurikihita ja ilma selleta, et mõte vahepeal tõlkes kaduma läheks.",
    },
    offering: {
      heading: "Kuidas saan aidata",
      intro: "Kolm viisi koostööks – vali üks või kombineeri neid.",
      items: [
        {
          label: "Konsultatsioon",
          oneLiner: "Selge nõu selle kohta, mida AI sinu jaoks päriselt teha saab.",
          detail:
            "Fookustatud sessioon või põhjalikum töövoogude ülevaatus, et aru saada, mida AI-ga tasub teha ja mida mitte. Lõpuks on sul selge suund – ilma kohustuseta midagi ehitama hakata.",
          tags: ["Strateegiasessioon", "Töövoogude audit", "Prioriteetidega plaan"],
        },
        {
          label: "Koolitus",
          oneLiner: "Aitan tiimil AI-d päriselt kasutama hakata, mitte ainult sellest huvituda.",
          detail:
            "Töötoad, mis lähtuvad sellest, kuidas su inimesed päriselt töötavad – mitte üldist ChatGPT demot. Koolitab inimene, kes kasutab samu tööriistu iga päev päriskasutusse mineva tarkvara ehitamiseks.",
          tags: ["Tiimi töötoad", "Rollipõhine", "Käed-külge"],
        },
        {
          label: "Ehitamine",
          oneLiner: "Päris tarkvara – valmis ehitatud, kasutusse viidud ja sulle üle antud.",
          detail:
            "Kliendiportaalid, juhtpaneelid, broneerimissüsteemid, sisetööriistad, automatsioonid, AI-funktsioonid ja terviklik SaaS. Päriskasutuse tasemel – päris autentimine, maksed ja andmed – kasutusse viidud ning lõpuks sinu oma.",
          tags: ["Veebirakendused", "Juhtpaneelid", "SaaS", "AI-funktsioonid", "Automatsioonid"],
        },
      ],
      note: "Kui pole selge, milline sobib, saab lühikese kõnega pildi ette.",
    },
    proof: {
      heading: "45+ töötavat toodet. Mitte makettide kaust.",
      intro:
        "Ma ei pea lihtsalt väitma, et oskan ehitada – ava mõni neist. Päriselt kasutusse viidud lahendused, mis töötavad päris kasutajatele. Kolm näidet:",
      items: [
        {
          title: "Hinnavaht",
          oneLiner: "Triipkoodiskanneriga hinnajälgija kolme Eesti jaeketi toodetele.",
          detail:
            "Skanni toode ja jälgi selle hinda Selveris, Rimis ja Barboras. Deterministlik matcher ilma AI-ta seob tooted brändi ja normaliseeritud suuruse järgi; täpsust kaitseb 28 juhtumiga lukustatud kontrollkogum. GitHub Actions kontrollib hindu kaks korda päevas; push-teavituse ja e-kirja kokkuvõtted lähevad välja ainult vähemalt 25% hinnalanguse puhul. 60+ automaatkontrolli, sh 33-sammuline Playwrighti läbiklikkimise test.",
          tags: PROOF_TAGS.hinnavaht,
          url: PROOF_URLS.hinnavaht,
        },
        {
          title: "Keeletark",
          oneLiner: "Eesti keele “Grammarly”, kus AI-d kontrollib reeglimootor.",
          detail:
            "estnltk märgib deterministlikud grammatikavead kontrollkihina. Claude Opus pakub loomulikuma sõnastuse parandusi, kuid iga LLM-i soovitus valideeritakse enne kuvamist uuesti reeglimootori kaudu. Punased vead, sinised soovitused, animeeritud kvaliteediskoorid, valitavad parandused, ühe klikiga täielik ümberkirjutus neljas stiilis ja inglise-eesti tõlge.",
          tags: PROOF_TAGS.keeletark,
          url: PROOF_URLS.keeletark,
        },
        {
          title: "SongDrop Pro",
          oneLiner: "Multi-tenant SaaS DJ-dele – QR-koodi kaudu tehtud laulusoovid otse YouTube'i esitusloendisse.",
          detail:
            "Iseteeninduslik onboarding: kasutaja valib endale slug'i, ühendab YouTube'i signed-state OAuthi kaudu ning määrab avatari ja aktsentvärvi. Külalised skannivad QR-koodi, otsivad YouTube Musicust loo ja vajutavad “Request” – lugu lisatakse YouTube Data API kaudu DJ esitusloendisse. Stripe'i tellimus 12 €/kuu koos 14-päevase prooviajaga. Iga DJ andmed on eraldatud; otsingu backend töötab FastAPI-ga Renderis.",
          tags: PROOF_TAGS.songdrop,
          url: PROOF_URLS.songdrop,
        },
      ],
      viewAll: "Vaata kõiki projekte →",
    },
    stack: {
      heading: "Mis selle taga töötab",
      intro: "Kõik siin loetletu on päriselt kasutuses, mitte soovide nimekirjas.",
    },
    contact: {
      heading: "Räägime, mida sul vaja on.",
      body: "Kirjelda probleemi, mida tahad lahendada. Kui vastus on tarkvara, aitan selle piiritleda ja annan konkreetse plaani. Kui paremini sobib sessioon või koolitus, ütlen seda. Ja kui AI ei ole üldse õige tööriist, ütlen ka seda.",
      cta: "Lepi kõne kokku → egertv@gmail.com",
    },
    footer: "© 2026 Egert Väinaste · Ehitatud Claude Code'iga",
  },

  en: {
    nav: { work: "Work", about: "About", stack: "Stack", contact: "Contact" },
    hero: {
      eyebrow: "AI-native product builder · Tallinn",
      headlineA: "You don't need another AI workshop.",
      headlineB: "You need the thing built.",
      body: "Plenty of people will train your team or audit your “AI readiness” – I do that too. But I don't stop at the talk: when you need the actual thing built, I build it. Internal tools, portals, dashboards, booking systems, SaaS – built to work in production, not to demo.",
      ctaPrimary: "Talk about a build",
      ctaSecondary: "See live products ↓",
    },
    about: {
      eyebrow: "AI-native product builder",
      name: "Egert Väinaste",
      p1: "Product Manager by day, AI builder the rest of the time. I use Claude Code to ship full-stack production applications – not prototypes, not demos, but systems with real databases, real auth, real payment flows, and real users.",
      p2: "One person who scopes the problem and builds it – no agency layer, nothing lost in translation.",
    },
    offering: {
      heading: "How I can help",
      intro: "Three ways to work together – pick one, or combine them.",
      items: [
        {
          label: "Consultation",
          oneLiner: "Straight advice on what AI can actually do for you.",
          detail:
            "A focused session, or a deeper audit of your workflows, to work out what's worth doing with AI and what to skip. You leave with a clear plan – and no obligation to build anything.",
          tags: ["Strategy session", "Workflow audit", "Prioritized plan"],
        },
        {
          label: "Training",
          oneLiner: "Get your team genuinely using AI – not just curious about it.",
          detail:
            "Hands-on workshops shaped around how your people actually work, not a generic ChatGPT demo. Taught by someone who ships production software with these tools every day.",
          tags: ["Team workshops", "Role-specific", "Hands-on"],
        },
        {
          label: "Build",
          oneLiner: "The actual software – built, deployed, and handed to you.",
          detail:
            "Customer portals, dashboards, booking systems, internal tools, automations, AI features, full SaaS. Production-grade – real auth, payments, data – deployed and yours to keep.",
          tags: ["Web apps", "Dashboards", "SaaS", "AI features", "Automations"],
        },
      ],
      note: "Not sure which fits? A short call sorts it out.",
    },
    proof: {
      heading: "45+ live products. Not a folder of mockups.",
      intro:
        "I don't have to claim I can build – open any of them. Real, deployed, running for real users. Three of them:",
      items: [
        {
          title: "Hinnavaht",
          oneLiner: "Barcode-scanning grocery price tracker across three Estonian retail chains.",
          detail:
            "Scan a product, follow its price across Selver, Rimi, and Barbora. A deterministic zero-AI matcher links products by brand + unit-normalized size – a 28-case frozen golden set guards accuracy. GitHub Actions polls twice daily; push + email digests fire only on drops ≥25%. 60+ automated assertions including a 33-step Playwright click-through suite.",
          tags: PROOF_TAGS.hinnavaht,
          url: PROOF_URLS.hinnavaht,
        },
        {
          title: "Keeletark",
          oneLiner: "Estonian “Grammarly” with dual-layer AI + rule-engine validation.",
          detail:
            "estnltk flags deterministic grammar errors as ground truth. Claude Opus proposes naturalness fixes – and every LLM suggestion is re-validated through the rule engine before display. Red errors, blue suggestions, animated quality scores, pick-and-choose fixes, one-click full rewrite in four styles, English→Estonian translation.",
          tags: PROOF_TAGS.keeletark,
          url: PROOF_URLS.keeletark,
        },
        {
          title: "SongDrop Pro",
          oneLiner: "Multi-tenant SaaS for DJs – QR requests straight into YouTube playlists.",
          detail:
            "Self-serve onboarding: claim a slug, connect YouTube via signed-state OAuth, set avatar and accent color. Guests scan a QR, search YouTube Music, tap Request – the track drops into the DJ's playlist via the YouTube Data API. Stripe subscriptions at €12/mo with 14-day trial. Per-DJ data isolation, FastAPI search backend on Render.",
          tags: PROOF_TAGS.songdrop,
          url: PROOF_URLS.songdrop,
        },
      ],
      viewAll: "View all projects →",
    },
    stack: {
      heading: "What's under the hood",
      intro: "Every item here is in production code, not a list of aspirations.",
    },
    contact: {
      heading: "Let's talk about what you need.",
      body: "Tell me the problem you're trying to solve. If software is the answer, I'll scope it and give you a concrete plan. If a session or some training fits better, I'll say so. And if AI isn't the right tool at all, I'll tell you that too.",
      cta: "Book a call → egertv@gmail.com",
    },
    footer: "© 2026 Egert Väinaste · Built with Claude Code",
  },
};
