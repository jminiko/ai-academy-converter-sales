
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Settings, BarChart } from "lucide-react";

const ConseilsOptimisation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseils Optimisation IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Maximisez les performances de vos modèles IA
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Optimiser mes modèles
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Amélioration continue</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Hyperparamètres</h3>
              <p className="text-gray-600">Réglages optimaux</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Métriques</h3>
              <p className="text-gray-600">Suivi performance</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Accélération</h3>
              <p className="text-gray-600">Temps de calcul</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilsOptimisation;
