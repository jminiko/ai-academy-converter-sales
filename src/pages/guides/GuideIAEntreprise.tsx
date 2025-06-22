
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building, Users, TrendingUp, Shield } from "lucide-react";

const GuideIAEntreprise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide IA pour Entreprises
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stratégies d'implémentation IA pour les grandes entreprises
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Transformer l'entreprise
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Conduite du changement</h3>
              <p className="text-gray-600">Accompagnement des équipes</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ROI et performances</h3>
              <p className="text-gray-600">Mesure de l'impact</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gouvernance IA</h3>
              <p className="text-gray-600">Cadres de contrôle</p>
            </Card>
            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Architecture</h3>
              <p className="text-gray-600">Infrastructure adaptée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideIAEntreprise;
