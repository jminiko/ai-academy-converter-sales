
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Battery, Sun, Wind } from "lucide-react";

const FormationIAEnergie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Énergie
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour l'optimisation énergétique
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Optimiser l'énergie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Énergies renouvelables</h3>
              <p className="text-gray-600">Prédiction production</p>
            </Card>
            <Card className="p-6 text-center">
              <Battery className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stockage intelligent</h3>
              <p className="text-gray-600">Gestion batteries</p>
            </Card>
            <Card className="p-6 text-center">
              <Wind className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart grids</h3>
              <p className="text-gray-600">Réseaux intelligents</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Efficacité énergétique</h3>
              <p className="text-gray-600">Réduction consommation</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAEnergie;
