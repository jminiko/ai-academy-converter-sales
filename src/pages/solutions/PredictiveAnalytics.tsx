
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart, Zap, Target } from "lucide-react";

const PredictiveAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Analytique Prédictive
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Anticipez l'avenir avec nos solutions d'analytique prédictive
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Prédire l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Modèles prédictifs</CardTitle>
                <CardDescription>
                  Algorithmes avancés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des modèles précis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Temps réel</CardTitle>
                <CardDescription>
                  Prédictions instantanées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez des insights en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Précision optimale</CardTitle>
                <CardDescription>
                  Résultats fiables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maximisez la précision des prédictions.
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

export default PredictiveAnalytics;
