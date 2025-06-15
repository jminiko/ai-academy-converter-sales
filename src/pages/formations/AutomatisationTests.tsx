
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, Bot, CheckCircle, Zap } from "lucide-react";

const AutomatisationTests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-lime-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <TestTube className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Automatisation des Tests avec IA
          </h1>
          <p className="text-xl text-lime-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos processus de test avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100">
            Automatiser les tests
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Bot className="h-12 w-12 text-lime-600 mb-4" />
                <CardTitle>Tests automatisés</CardTitle>
                <CardDescription>
                  Intelligence de test
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez des tests automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-lime-600 mb-4" />
                <CardTitle>Détection de bugs</CardTitle>
                <CardDescription>
                  IA de validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Détectez les anomalies rapidement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-lime-600 mb-4" />
                <CardTitle>Tests de performance</CardTitle>
                <CardDescription>
                  Optimisation continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez les performances automatiquement.
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

export default AutomatisationTests;
