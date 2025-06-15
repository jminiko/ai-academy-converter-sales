
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crystal, TrendingUp, Calendar, AlertTriangle } from "lucide-react";

const PredictionIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Crystal className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Prédictions & Analyses Prédictives
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Anticipez l'avenir avec nos modèles prédictifs avancés
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Prédire l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Tendances du marché</CardTitle>
                <CardDescription>
                  Anticipez les évolutions du marché
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Modèles prédictifs pour forecaster les tendances commerciales.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Planification</CardTitle>
                <CardDescription>
                  Optimisez votre planification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prévisions de demande et planification des ressources optimisée.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Détection précoce</CardTitle>
                <CardDescription>
                  Alertes et maintenance prédictive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez les problèmes avant qu'ils ne surviennent.
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

export default PredictionIA;
