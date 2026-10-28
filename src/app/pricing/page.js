import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingClient } from "@/components/pricing/PricingClient";

export const metadata = {
  title: "Pricing | Nived — Good things start small",
  description:
    "Find the right space for your team to do its best work. Explore Starter, Grow, Bloom, and Custom tailored plans with Nived.",
};

export default function PricingPage() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[#0A0A0A] text-[#F2F2EF] selection:bg-[#7DA3FF]/20 selection:text-[#7DA3FF]"
    >
      <Navbar />

      <main id="main-content" className="flex-1 pt-12">
        <PricingClient />
      </main>

      <Footer />
    </div>
  );
}
