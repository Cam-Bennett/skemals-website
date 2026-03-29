import HomepageNav from "@/components/sections/HomepageNav";
import Hero from "@/components/sections/Hero";
import EmpathyHook from "@/components/sections/EmpathyHook";
import PriorAttempts from "@/components/sections/PriorAttempts";
import CostOfInaction from "@/components/sections/CostOfInaction";
import ProofInsight from "@/components/sections/ProofInsight";
import SchemaDefinition from "@/components/sections/SchemaDefinition";
import PathSelector from "@/components/sections/PathSelector";
import Mechanism from "@/components/sections/Mechanism";
import IdentityFrame from "@/components/sections/IdentityFrame";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import WhatItsNot from "@/components/sections/WhatItsNot";
import PractitionerProof from "@/components/sections/PractitionerProof";
import ClientProof from "@/components/sections/ClientProof";
import Founder from "@/components/sections/Founder";
import QualifierForm from "@/components/sections/QualifierForm";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HomepageNav />
      <Hero />
      <EmpathyHook />
      <PriorAttempts />
      <CostOfInaction />
      <ProofInsight />
      <SchemaDefinition />
      <Mechanism />
      <IdentityFrame />
      <PathSelector />
      <HowItWorks />
      <Features />
      <WhatItsNot />
      <PractitionerProof />
      <ClientProof />
      <Founder />
      <QualifierForm />
      <CTA />
      <Footer />
    </main>
  );
}
