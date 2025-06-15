
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Lightbulb, Target, Zap } from "lucide-react";

const StartupIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour les Startups
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Accélérez votre croissance et innovez avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Booster ma startup
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Innovation produit</CardTitle>
                <CardDescription>
                  Développement assisté par IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des produits innovants avec l'aide de l'intelligence artificielle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Croissance accélérée</CardTitle>
                <CardDescription>
                  Stratégies basées sur les données
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez votre go-to-market avec des insights IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Automatisation</CardTitle>
                <CardDescription>
                  Processus optimisés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Libérez du temps pour vous concentrer sur l'essentiel.
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

export default StartupIA;
