
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Map, TrendingUp, Users } from "lucide-react";

const GuideStratégieIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide Stratégie IA
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Élaborez une stratégie IA gagnante pour votre organisation
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Définir ma stratégie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Map className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Roadmap IA</h3>
              <p className="text-gray-600">Planification stratégique</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ROI et KPIs</h3>
              <p className="text-gray-600">Mesure de performance</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gouvernance</h3>
              <p className="text-gray-600">Organisation et processus</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Objectifs métier</h3>
              <p className="text-gray-600">Alignement stratégique</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideStratégieIA;
