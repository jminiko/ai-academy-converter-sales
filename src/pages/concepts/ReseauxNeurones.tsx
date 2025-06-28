
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, GitBranch, Zap, Target } from "lucide-react";

const ReseauxNeurones = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Réseaux de Neurones</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Comprendre et maîtriser les réseaux de neurones artificiels
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Apprendre les réseaux
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <GitBranch className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Architecture neuronale</h3>
              <p className="text-gray-600">Structure et connexions</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Activation</h3>
              <p className="text-gray-600">Fonctions d'activation</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Apprentissage</h3>
              <p className="text-gray-600">Rétropropagation</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Deep Learning</h3>
              <p className="text-gray-600">Réseaux profonds</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReseauxNeurones;
