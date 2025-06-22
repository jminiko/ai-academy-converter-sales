
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart, PieChart, TrendingUp, Eye } from "lucide-react";

const VisualisateurDonnées = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Visualisateur de Données IA
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Visualisez et explorez vos données avec des outils IA avancés
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Visualiser mes données
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Exploration</h3>
              <p className="text-gray-600">Analyse interactive</p>
            </Card>
            <Card className="p-6 text-center">
              <PieChart className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Graphiques</h3>
              <p className="text-gray-600">Visualisations avancées</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tendances</h3>
              <p className="text-gray-600">Patterns automatiques</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dashboards</h3>
              <p className="text-gray-600">Tableaux de bord</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisualisateurDonnées;
