
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Zap, Brain, Calculator } from "lucide-react";

const QuantumComputing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Informatique Quantique
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Découvrez les fondamentaux de l'informatique quantique et ses applications IA
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Explorer le quantique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Algorithmes quantiques</CardTitle>
                <CardDescription>
                  Puissance de calcul
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploitez la superposition quantique.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>IA quantique</CardTitle>
                <CardDescription>
                  Machine Learning quantique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez l'apprentissage automatique.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calculator className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Optimisation quantique</CardTitle>
                <CardDescription>
                  Résolution de problèmes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Résolvez des problèmes complexes.
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

export default QuantumComputing;
