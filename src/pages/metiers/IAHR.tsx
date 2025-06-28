
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Search, Target, TrendingUp } from "lucide-react";

const IAHR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour RH</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la gestion des ressources humaines avec l'IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            RH Intelligente
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Search className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recrutement intelligent</h3>
              <p className="text-gray-600">Sélection automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Évaluation performance</h3>
              <p className="text-gray-600">Analyse objective</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Développement carrière</h3>
              <p className="text-gray-600">Recommandations personnalisées</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Engagement employés</h3>
              <p className="text-gray-600">Mesure et amélioration</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAHR;
