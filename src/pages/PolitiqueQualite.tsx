
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolitiqueQualiteHeader } from "@/components/politiqueQualite/PolitiqueQualiteHeader";
import { PolitiqueQualiteSection } from "@/components/politiqueQualite/PolitiqueQualiteSection";
import { PolitiqueQualiteNavigation } from "@/components/politiqueQualite/PolitiqueQualiteNavigation";
import { politiqueQualiteData, navigationItems } from "@/components/politiqueQualite/politiqueQualiteData";

const PolitiqueQualite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <PolitiqueQualiteHeader />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Standards de Qualité</h2>
            <p className="text-lg text-gray-600">
              Découvrez notre approche qualité et nos engagements envers l'excellence
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {politiqueQualiteData.map((section, index) => (
              <PolitiqueQualiteSection
                key={index}
                id={section.id}
                title={section.title}
                icon={section.icon}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </section>

      <PolitiqueQualiteNavigation items={navigationItems} />

      <Footer />
    </div>
  );
};

export default PolitiqueQualite;
