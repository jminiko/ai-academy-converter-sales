
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Brain, Target, Rocket } from "lucide-react";

const FormationTransformersAvances = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Transformers Avancés</h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'architecture Transformer qui révolutionne l'IA moderne
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Maîtriser les Transformers
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Attention mechanisms</h3>
              <p className="text-gray-600">Self-attention avancée</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">BERT & GPT</h3>
              <p className="text-gray-600">Modèles de référence</p>
            </Card>
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fine-tuning</h3>
              <p className="text-gray-600">Adaptation spécialisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Optimisation avancée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationTransformersAvances;
