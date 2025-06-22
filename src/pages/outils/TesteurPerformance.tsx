
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, BarChart, Zap, Clock } from "lucide-react";

const TesteurPerformance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Activity className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Testeur Performance IA
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Évaluez et optimisez les performances de vos modèles IA
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Tester mes modèles
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Métriques avancées</h3>
              <p className="text-gray-600">Précision, rappel, F1-score</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tests de charge</h3>
              <p className="text-gray-600">Montée en charge</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Latence</h3>
              <p className="text-gray-600">Temps de réponse</p>
            </Card>
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Benchmarking</h3>
              <p className="text-gray-600">Comparaisons sectorielles</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TesteurPerformance;
