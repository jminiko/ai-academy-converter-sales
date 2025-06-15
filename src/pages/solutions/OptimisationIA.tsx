
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Gauge, Zap } from "lucide-react";

const OptimisationIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Optimisation par IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos processus et performances avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Optimiser mes processus
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Optimisation ciblée</CardTitle>
                <CardDescription>
                  Solutions personnalisées par secteur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Algorithmes adaptatifs qui s'ajustent à vos contraintes spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Amélioration mesurable des KPIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suivi en temps réel des gains de performance et ROI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Automatisation</CardTitle>
                <CardDescription>
                  Optimisation continue autonome
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Systèmes auto-apprenants qui s'améliorent constamment.
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

export default OptimisationIA;
