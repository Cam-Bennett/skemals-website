import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import EmpathyHook from "@/components/sections/EmpathyHook";
import PriorAttempts from "@/components/sections/PriorAttempts";
import CostOfInaction from "@/components/sections/CostOfInaction";
import ProofInsight from "@/components/sections/ProofInsight";
import SchemaDefinition from "@/components/sections/SchemaDefinition";
import PathSelector from "@/components/sections/PathSelector";
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
      <Nav />
      <Hero />
      <EmpathyHook />
      <PriorAttempts />
      <CostOfInaction />
      <ProofInsight />
      <SchemaDefinition />
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
