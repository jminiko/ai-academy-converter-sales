
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, TrendingUp, MapPin, Calculator } from "lucide-react";

const FormationIAImmobilier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Immobilier
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour le secteur immobilier
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Transformer l'immobilier
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calculator className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Évaluation automatique</h3>
              <p className="text-gray-600">Prix des biens</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction marché</h3>
              <p className="text-gray-600">Tendances prix</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Géolocalisation</h3>
              <p className="text-gray-600">Analyse secteurs</p>
            </Card>
            <Card className="p-6 text-center">
              <Home className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion patrimoniale</h3>
              <p className="text-gray-600">Optimisation portfolio</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAImmobilier;
