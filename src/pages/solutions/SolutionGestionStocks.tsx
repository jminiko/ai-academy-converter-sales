
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, BarChart, TrendingUp, AlertTriangle } from "lucide-react";

const SolutionGestionStocks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Package className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Solution Gestion Stocks IA
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos stocks avec la prédiction IA et l'automatisation
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Optimiser les stocks
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prévision demande</h3>
              <p className="text-gray-600">Anticipation IA des besoins</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation niveaux</h3>
              <p className="text-gray-600">Stock optimal automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Alertes intelligentes</h3>
              <p className="text-gray-600">Ruptures évitées</p>
            </Card>
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Réapprovisionnement</h3>
              <p className="text-gray-600">Commandes automatisées</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionGestionStocks;
