
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Cpu, Zap, Globe } from "lucide-react";

const IAQuantique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA Quantique
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Explorez l'intersection entre l'IA et l'informatique quantique
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Explorer le quantique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Calcul quantique</CardTitle>
                <CardDescription>
                  Puissance exponentiielle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploitez la puissance des qubits pour l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Algorithmes quantiques</CardTitle>
                <CardDescription>
                  Optimisation avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des algorithmes d'IA quantiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Applications futures</CardTitle>
                <CardDescription>
                  Innovation révolutionnaire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Préparez-vous à la révolution quantique de l'IA.
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

export default IAQuantique;
