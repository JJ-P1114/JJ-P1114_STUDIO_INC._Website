import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Portfolio } from "@/components/portfolio";
import { ClientLogos } from "@/components/client-logos";
import { ProcessSteps } from "@/components/process-steps";
import CTA from "@/components/cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Portfolio />
        <ClientLogos />
        <ProcessSteps />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
