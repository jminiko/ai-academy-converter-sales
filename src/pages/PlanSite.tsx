
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlanSiteHeader } from "@/components/planSite/PlanSiteHeader";
import { PlanSiteSection } from "@/components/planSite/PlanSiteSection";
import { PlanSiteNavigation } from "@/components/planSite/PlanSiteNavigation";
import { planSiteData } from "@/components/planSite/planSiteData";

const PlanSite = () => {
  const totalPages = planSiteData.reduce((acc, section) => acc + section.pages.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <PlanSiteHeader totalPages={totalPages} totalSections={planSiteData.length} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Organisation du Site</h2>
            <p className="text-lg text-gray-600">
              Notre site est organisé en sections logiques pour faciliter votre navigation
            </p>
          </div>

          <div className="space-y-8">
            {planSiteData.map((section, index) => (
              <PlanSiteSection
                key={index}
                titre={section.titre}
                icon={section.icon}
                pages={section.pages}
              />
            ))}
          </div>
        </div>
      </section>

      <PlanSiteNavigation />

      <Footer />
    </div>
  );
};

export default PlanSite;
