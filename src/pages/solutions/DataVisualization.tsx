
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, LineChart, TrendingUp } from "lucide-react";

const DataVisualization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Visualisation de Données IA
          </h1>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Transformez vos données en insights visuels intelligents
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
            Visualiser les données
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <PieChart className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Dashboards intelligents</CardTitle>
                <CardDescription>
                  Tableaux de bord adaptatifs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dashboards qui s'adaptent à vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LineChart className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Analyses prédictives</CardTitle>
                <CardDescription>
                  Visualisation du futur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Graphiques de tendances et prédictions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Insights automatiques</CardTitle>
                <CardDescription>
                  Découverte de patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  L'IA révèle les tendances cachées.
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
