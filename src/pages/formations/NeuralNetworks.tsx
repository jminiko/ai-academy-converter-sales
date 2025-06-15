
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Network, Layers, Zap } from "lucide-react";

const NeuralNetworks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Réseaux de Neurones
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Formation complète sur les réseaux de neurones et l'apprentissage profond
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Apprendre les neurones
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Network className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Perceptrons</CardTitle>
                <CardDescription>
                  Fondamentaux des neurones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprenez les bases des réseaux de neurones.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Architectures avancées</CardTitle>
                <CardDescription>
                  CNN, RNN, Transformers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maîtrisez les architectures modernes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Backpropagation</CardTitle>
                <CardDescription>
                  Algorithmes d'apprentissage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implémentez les algorithmes d'entraînement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NeuralNetworks;
