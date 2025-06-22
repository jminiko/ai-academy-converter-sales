
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, BarChart3, TrendingUp, Search } from "lucide-react";

const OutilAnalyseDonnees = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Outil Analyse de Données</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Analysez vos données avec la puissance de l'IA
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Analyser maintenant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Exploration</h3>
              <p className="text-gray-600">Découverte intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visualisation</h3>
              <p className="text-gray-600">Graphiques automatiques</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tendances</h3>
              <p className="text-gray-600">Patterns cachés</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Insights</h3>
              <p className="text-gray-600">Recommandations IA</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilAnalyseDonnees;
