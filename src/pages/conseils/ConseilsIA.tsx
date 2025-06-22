
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Target, Users, Lightbulb } from "lucide-react";

const ConseilsIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseils IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Accompagnement expert pour vos projets d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Démarrer le conseil
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stratégie IA</h3>
              <p className="text-gray-600">Définition d'objectifs</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Équipes</h3>
              <p className="text-gray-600">Formation et support</p>
            </Card>
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Nouveaux cas d'usage</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">Conseil technique</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilsIA;
