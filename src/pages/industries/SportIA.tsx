
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Activity, Users } from "lucide-react";

const SportIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA dans le Sport</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Révolutionner la performance sportive avec l'IA
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Améliorer les performances
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse performance</h3>
              <p className="text-gray-600">Métriques avancées</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction blessures</h3>
              <p className="text-gray-600">Prévention intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Coaching IA</h3>
              <p className="text-gray-600">Entraînement personnalisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stratégie</h3>
              <p className="text-gray-600">Tactiques optimisées</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportIA;
