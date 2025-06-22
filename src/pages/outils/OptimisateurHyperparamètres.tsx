
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, Zap, TrendingUp, Target } from "lucide-react";

const OptimisateurHyperparamètres = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Optimisateur d'Hyperparamètres
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Optimisation automatique des hyperparamètres de vos modèles
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Optimiser automatiquement
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Auto-tuning</h3>
              <p className="text-gray-600">Réglage automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Grid Search</h3>
              <p className="text-gray-600">Recherche exhaustive</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Bayésien</h3>
              <p className="text-gray-600">Optimisation intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Amélioration garantie</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OptimisateurHyperparamètres;
