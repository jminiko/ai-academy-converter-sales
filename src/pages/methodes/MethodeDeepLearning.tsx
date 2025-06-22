
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Zap, TrendingUp, Code } from "lucide-react";

const MethodeDeepLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Layers className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Méthode Deep Learning
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Méthodologie avancée pour maîtriser l'apprentissage profond
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Approfondir le Deep Learning
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Architecture neuronale</CardTitle>
                <CardDescription>Conception optimale</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Concevez des architectures de réseaux de neurones performantes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Optimisation avancée</CardTitle>
                <CardDescription>Performance maximale</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez les performances de vos modèles deep learning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Implémentation pratique</CardTitle>
                <CardDescription>Code production</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implémentez des solutions deep learning en production.
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

export default MethodeDeepLearning;
