
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Zap, Activity, Cpu } from "lucide-react";

const DeepLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Layers className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Deep Learning
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Plongez dans l'apprentissage profond et les réseaux de neurones
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Explorer le deep learning
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Réseaux de neurones</CardTitle>
                <CardDescription>Architectures avancées</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Maîtrisez les architectures complexes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Activity className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Vision par ordinateur</CardTitle>
                <CardDescription>Traitement d'images</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Développez des modèles de vision.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>GPU Computing</CardTitle>
                <CardDescription>Calcul haute performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Optimisez vos calculs GPU.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeepLearning;
