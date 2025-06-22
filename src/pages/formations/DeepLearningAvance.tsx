
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Layers, Network, Target } from "lucide-react";

const DeepLearningAvance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Deep Learning Avancé
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Architectures neuronales de pointe et techniques avancées
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Maîtriser le Deep Learning
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Architectures complexes</CardTitle>
                <CardDescription>Réseaux profonds</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Concevez des architectures sophistiquées.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Network className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Réseaux convolutifs</CardTitle>
                <CardDescription>CNN avancés</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Optimisez les réseaux de neurones.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Optimisation avancée</CardTitle>
                <CardDescription>Techniques de pointe</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Maximisez les performances.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeepLearningAvance;
