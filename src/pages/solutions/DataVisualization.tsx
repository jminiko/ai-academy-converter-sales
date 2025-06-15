
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Eye } from "lucide-react";

const DataVisualization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Visualisation de Données IA
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Transformez vos données en insights visuels intelligents
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Visualiser intelligemment
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <PieChart className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Graphiques adaptatifs</CardTitle>
                <CardDescription>
                  Visualisation dynamique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des graphiques qui s'adaptent aux données.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Analyses prédictives</CardTitle>
                <CardDescription>
                  Tendances futures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visualisez les tendances et prédictions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Insights automatiques</CardTitle>
                <CardDescription>
                  Découvertes intelligentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Découvrez automatiquement les patterns cachés.
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

export default DataVisualization;
