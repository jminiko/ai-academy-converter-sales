
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu, Database, TrendingUp, Target } from "lucide-react";

const ApprentissageAutomatique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Cpu className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Apprentissage Automatique</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Les algorithmes qui apprennent à partir des données
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Maîtriser le ML
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Données</h3>
              <p className="text-gray-600">Préparation datasets</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Entraînement</h3>
              <p className="text-gray-600">Optimisation modèles</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction</h3>
              <p className="text-gray-600">Résultats précis</p>
            </Card>
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Algorithmes</h3>
              <p className="text-gray-600">Variété de méthodes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApprentissageAutomatique;
