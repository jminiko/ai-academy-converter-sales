
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Anchor, Waves, Navigation, Ship } from "lucide-react";

const Maritime = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Anchor className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Secteur Maritime
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Solutions d'intelligence artificielle pour l'industrie maritime et portuaire
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            Naviguer vers l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Navigation className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Navigation autonome</h3>
              <p className="text-gray-600">Pilotage automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Waves className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction météo</h3>
              <p className="text-gray-600">Conditions maritimes</p>
            </Card>
            <Card className="p-6 text-center">
              <Ship className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion de flotte</h3>
              <p className="text-gray-600">Optimisation des routes</p>
            </Card>
            <Card className="p-6 text-center">
              <Anchor className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance portuaire</h3>
              <p className="text-gray-600">Surveillance des infrastructures</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maritime;
