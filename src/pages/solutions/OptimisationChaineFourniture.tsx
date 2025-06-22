
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Package, BarChart3, Clock } from "lucide-react";

const OptimisationChaineFourniture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Optimisation Chaîne de Fourniture IA
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre supply chain avec l'intelligence artificielle prédictive
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Optimiser ma chaîne
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prévision demande</h3>
              <p className="text-gray-600">Anticipation besoins</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation routes</h3>
              <p className="text-gray-600">Livraison efficace</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse performance</h3>
              <p className="text-gray-600">KPI temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance prédictive</h3>
              <p className="text-gray-600">Éviter les pannes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OptimisationChaineFourniture;
