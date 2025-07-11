
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const SolutionIAVente = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Solution IA Vente</h1>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
            Boostez vos ventes avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Augmenter les ventes
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lead Scoring</h3>
              <p className="text-gray-600">Qualification automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ciblage précis</h3>
              <p className="text-gray-600">Prospects qualifiés</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction ventes</h3>
              <p className="text-gray-600">Forecasting avancé</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation prix</h3>
              <p className="text-gray-600">Pricing dynamique</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionIAVente;
