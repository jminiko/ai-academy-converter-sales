
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Layers, Zap, Trophy } from "lucide-react";

const FormationDeepLearningAvance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Deep Learning Avancé</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les architectures de deep learning les plus sophistiquées
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Maîtriser le Deep Learning
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Layers className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Architectures avancées</h3>
              <p className="text-gray-600">CNN, RNN, Transformers</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Performance maximale</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Projets avancés</h3>
              <p className="text-gray-600">Applications complexes</p>
            </Card>
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Implémentation</h3>
              <p className="text-gray-600">Code professionnel</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationDeepLearningAvance;
