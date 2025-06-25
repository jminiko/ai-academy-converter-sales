
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Sparkles, Zap, Globe } from "lucide-react";

const TendancesIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Tendances IA 2025</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Les principales tendances qui façonneront l'IA en 2025
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Lire l'analyse complète
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Générative</h3>
              <p className="text-gray-600">Nouvelle génération de modèles</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Edge AI</h3>
              <p className="text-gray-600">IA embarquée et temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Multimodale</h3>
              <p className="text-gray-600">Intégration multi-sens</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AutoML</h3>
              <p className="text-gray-600">Démocratisation de l'IA</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TendancesIA2025;
