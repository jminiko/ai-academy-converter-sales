
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, TestTube, Zap, Target } from "lucide-react";

const ChemieIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Chimie
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la recherche chimique avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Innover en chimie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TestTube className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Découverte de molécules</CardTitle>
                <CardDescription>
                  Recherche assistée par IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez la découverte de nouvelles molécules.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Optimisation de synthèse</CardTitle>
                <CardDescription>
                  Processus intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez les voies de synthèse chimique.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Prédiction de propriétés</CardTitle>
                <CardDescription>
                  Modélisation moléculaire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prédisez les propriétés des composés.
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

export default ChemieIA;
