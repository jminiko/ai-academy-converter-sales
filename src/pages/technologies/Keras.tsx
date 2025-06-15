
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Zap, Puzzle, Rocket } from "lucide-react";

const Keras = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Layers className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Keras & Deep Learning
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            API haut niveau pour le deep learning avec TensorFlow
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Débuter avec Keras
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Puzzle className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>API Simple</CardTitle>
                <CardDescription>
                  Interface intuitive et pythonique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construisez des modèles complexes avec une syntaxe simple et claire.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Rapid Prototyping</CardTitle>
                <CardDescription>
                  De l'idée au modèle rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Testez vos idées rapidement avec des prototypes fonctionnels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>
                  Déployement à grande échelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Passez du prototype à la production sans réécrire votre code.
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

export default Keras;
