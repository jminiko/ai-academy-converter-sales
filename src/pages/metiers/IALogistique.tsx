
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Package, MapPin, Clock } from "lucide-react";

const IALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Logistique</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne logistique avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Logistique IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation trajets</h3>
              <p className="text-gray-600">Routes intelligentes</p>
            </Card>
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion stocks</h3>
              <p className="text-gray-600">Inventaire automatisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction demande</h3>
              <p className="text-gray-600">Planification optimale</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Livraison intelligente</h3>
              <p className="text-gray-600">Efficacité maximale</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IALogistique;
