
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Cpu, Shield, Navigation } from "lucide-react";

const FormationVehiculeAutonome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Car className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Véhicules Autonomes
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les technologies IA pour les véhicules autonomes
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            S'inscrire à la formation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vision par ordinateur</h3>
              <p className="text-gray-600">Perception environnementale</p>
            </Card>
            <Card className="p-6 text-center">
              <Navigation className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Systèmes de navigation</h3>
              <p className="text-gray-600">Planification de trajectoires</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sécurité fonctionnelle</h3>
              <p className="text-gray-600">Normes ISO 26262</p>
            </Card>
            <Card className="p-6 text-center">
              <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tests et validation</h3>
              <p className="text-gray-600">Simulation et validation</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationVehiculeAutonome;
