
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Settings, Shield, TrendingUp } from "lucide-react";

const Aeronautique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Plane className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Aéronautique
          </h1>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Solutions d'intelligence artificielle pour l'industrie aéronautique et spatiale
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
            Découvrir nos solutions
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance prédictive</h3>
              <p className="text-gray-600">Optimisation des opérations</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sécurité renforcée</h3>
              <p className="text-gray-600">Contrôle qualité IA</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation carburant</h3>
              <p className="text-gray-600">Efficacité énergétique</p>
            </Card>
            <Card className="p-6 text-center">
              <Plane className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Navigation autonome</h3>
              <p className="text-gray-600">Pilotage assisté par IA</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aeronautique;
