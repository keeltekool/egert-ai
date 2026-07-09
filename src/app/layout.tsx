import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Egert Väinaste – AI-native tooteehitaja Eesti ettevõtetele",
  description:
    "Konsultatsioon, koolitus või valmis ehitatud tarkvara – vastavalt sellele, mida vaja on. AI-native tooteehitaja, kes on kuue kuuga viinud päriskasutusse 45+ rakendust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={`${hanken.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
