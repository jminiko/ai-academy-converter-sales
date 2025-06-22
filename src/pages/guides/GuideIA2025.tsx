
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Zap, Target, TrendingUp } from "lucide-react";

const GuideIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide IA 2025 : Tendances et Innovations
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Préparez-vous aux révolutions technologiques de demain
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Explorer les tendances
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Générative</h3>
              <p className="text-gray-600">Créativité augmentée</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Multimodale</h3>
              <p className="text-gray-600">Intégration complète</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
              <p className="text-gray-600">IA locale performante</p>
            </Card>
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quantum AI</h3>
              <p className="text-gray-600">Calcul quantique</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideIA2025;
