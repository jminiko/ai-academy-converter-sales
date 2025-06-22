
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SupportHero } from "@/components/support/SupportHero";
import { SupportServices } from "@/components/support/SupportServices";
import { SupportPlans } from "@/components/support/SupportPlans";
import { SupportProcess } from "@/components/support/SupportProcess";
import { SupportTestimonials } from "@/components/support/SupportTestimonials";
import { SupportCTA } from "@/components/support/SupportCTA";

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <SupportHero />
      <SupportServices />
      <SupportPlans />
      <SupportProcess />
      <SupportTestimonials />
      <SupportCTA />

      <Footer />
    </div>
  );
};

export default Support;
