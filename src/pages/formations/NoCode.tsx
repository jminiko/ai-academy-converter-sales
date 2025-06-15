
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Zap, Puzzle, Rocket } from "lucide-react";

const NoCode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <Workflow className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA No-Code
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Créez des solutions IA sans programmer avec les outils no-code
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Créer sans coder
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Puzzle className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Outils visuels</CardTitle>
                <CardDescription>
                  Interface drag & drop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Utilisez Bubble, Webflow et Zapier pour l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Rapidité de déploiement</CardTitle>
                <CardDescription>
                  Prototypage ultra-rapide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez et déployez vos applications IA en quelques heures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>APIs intégrées</CardTitle>
                <CardDescription>
                  Connexions simplifiées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intégrez facilement OpenAI, Google AI et autres APIs.
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

export default NoCode;
