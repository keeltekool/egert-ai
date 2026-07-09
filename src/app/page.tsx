import type { Metadata } from "next";
import { LanguageProvider } from "@/components/services/i18n";
import { HeaderServices } from "@/components/services/HeaderServices";
import { HeroServices } from "@/components/services/HeroServices";
import { WhyMe } from "@/components/services/WhyMe";
import { OfferingSection } from "@/components/services/OfferingSection";
import { ProofSection } from "@/components/services/ProofSection";
import { StackServices } from "@/components/services/StackServices";
import { ContactServices } from "@/components/services/ContactServices";
import { FooterServices } from "@/components/services/FooterServices";

export const metadata: Metadata = {
  title: "Egert Väinaste – AI-native tooteehitaja Eesti ettevõtetele",
  description:
    "Konsultatsioon, koolitus või valmis ehitatud tarkvara – vastavalt sellele, mida vaja on. AI-native tooteehitaja, kes on kuue kuuga viinud päriskasutusse 45+ rakendust: kliendiportaalid, juhtpaneelid, broneerimissüsteemid, sisetööriistad ja SaaS.",
};

export default function Home() {
  return (
    <LanguageProvider>
      <HeaderServices />
      <main>
        <HeroServices />
        <WhyMe />
        <OfferingSection />
        <ProofSection />
        <StackServices />
        <ContactServices />
      </main>
      <FooterServices />
    </LanguageProvider>
  );
}
