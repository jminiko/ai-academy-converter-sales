
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, MapPin, Package, Clock } from "lucide-react";

const FormationIALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Logistique
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour la supply chain et transport
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Optimiser la logistique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation routes</h3>
              <p className="text-gray-600">Algorithmes de routage</p>
            </Card>
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion entrepôts</h3>
              <p className="text-gray-600">Automatisation stockage</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction délais</h3>
              <p className="text-gray-600">Planification intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance flottes</h3>
              <p className="text-gray-600">Prédictive véhicules</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIALogistique;
