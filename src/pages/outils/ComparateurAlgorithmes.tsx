
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitCompare, BarChart, Trophy, Clock } from "lucide-react";

const ComparateurAlgorithmes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <GitCompare className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Comparateur d'Algorithmes IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Comparez les performances de différents algorithmes IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Comparer les algorithmes
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Benchmark</h3>
              <p className="text-gray-600">Tests standardisés</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Temps d'exécution</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Précision</h3>
              <p className="text-gray-600">Qualité des résultats</p>
            </Card>
            <Card className="p-6 text-center">
              <GitCompare className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Comparaison</h3>
              <p className="text-gray-600">Analyse comparative</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComparateurAlgorithmes;
