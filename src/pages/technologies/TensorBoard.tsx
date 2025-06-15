
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, Activity, Eye } from "lucide-react";

const TensorBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            TensorBoard
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Visualisez et optimisez vos modèles d'apprentissage automatique
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Visualiser les modèles
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <LineChart className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Métriques en temps réel</CardTitle>
                <CardDescription>
                  Monitoring continu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suivez les performances de vos modèles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Graphiques interactifs</CardTitle>
                <CardDescription>
                  Exploration visuelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explorez vos données d'entraînement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Débogage avancé</CardTitle>
                <CardDescription>
                  Diagnostic complet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez et corrigez les problèmes.
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

export default TensorBoard;
