
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Factory, TrendingUp, Shield, Zap } from "lucide-react";

const CasEtudeManufacturing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Cas d'Étude : Manufacturing 4.0
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Comment l'IA a transformé une usine traditionnelle en industrie 4.0
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Lire l'étude complète
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">+40% Productivité</h3>
              <p className="text-gray-600">Gain mesurable</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">-60% Défauts</h3>
              <p className="text-gray-600">Qualité améliorée</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">-30% Énergie</h3>
              <p className="text-gray-600">Efficacité énergétique</p>
            </Card>
            <Card className="p-6 text-center">
              <Factory className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ROI 300%</h3>
              <p className="text-gray-600">En 18 mois</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasEtudeManufacturing;
