import type { Metadata } from "next";
import HomepageNav from "@/components/sections/HomepageNav";
import Hero from "@/components/sections/Hero";
import EmpathyHook from "@/components/sections/EmpathyHook";
import PriorAttempts from "@/components/sections/PriorAttempts";
import CostOfInaction from "@/components/sections/CostOfInaction";
import ProofInsight from "@/components/sections/ProofInsight";
import PathSelector from "@/components/sections/PathSelector";
import Mechanism from "@/components/sections/Mechanism";
import IdentityFrame from "@/components/sections/IdentityFrame";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import PracticeRequirement from "@/components/sections/PracticeRequirement";
import WhatItsNot from "@/components/sections/WhatItsNot";
import ClientProof from "@/components/sections/ClientProof";
import Founder from "@/components/sections/Founder";
import HomepageFAQ from "@/components/sections/HomepageFAQ";
import QualifierForm from "@/components/sections/QualifierForm";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Pallume — Your Own AI Execution System",
  description:
    "Custom AI execution systems for business owners who can't close the gap between intention and result. Built by Camden Bennett. 10 minutes every morning. Configured for you, not a template.",
  alternates: {
    canonical: "https://pallume.com/",
  },
  openGraph: {
    title: "Pallume — Your Own AI Execution System",
    description:
      "Custom-configured AI execution systems for business owners who can't close the gap between intention and result. Built by Camden Bennett.",
    url: "https://pallume.com/",
    siteName: "Pallume",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <HomepageNav />
      <Hero />
      <EmpathyHook />
      <PriorAttempts />
      <CostOfInaction />
      <ProofInsight />
      {/* Journal product section — name TBD */}
      <Mechanism />
      <PathSelector />
      <HowItWorks />
      <Features />
      <PracticeRequirement />
      <IdentityFrame />
      <WhatItsNot />
      <ClientProof />
      <Founder />
      <HomepageFAQ />
      <QualifierForm />
      <CTA />
      <Footer />
    </main>
  );
}
