
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Network, Brain, Layers, Zap } from "lucide-react";

const FormationReseauxNeurones = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Réseaux de Neurones
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Architectures avancées et deep learning pour l'IA moderne
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Créer des réseaux
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Perceptrons</h3>
              <p className="text-gray-600">Bases des réseaux</p>
            </Card>
            <Card className="p-6 text-center">
              <Layers className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">CNN/RNN</h3>
              <p className="text-gray-600">Architectures spécialisées</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transformers</h3>
              <p className="text-gray-600">Architecture moderne</p>
            </Card>
            <Card className="p-6 text-center">
              <Network className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Performance avancée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationReseauxNeurones;
