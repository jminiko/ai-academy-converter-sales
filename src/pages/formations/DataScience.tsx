
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, TrendingUp, PieChart } from "lucide-react";

const DataScience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Data Science
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Transformez les données en insights actionables
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Analyser les données
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Gestion de données</CardTitle>
                <CardDescription>ETL et preprocessing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Maîtrisez la préparation des données.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Analyse statistique</CardTitle>
                <CardDescription>Méthodes avancées</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Appliquez les statistiques avancées.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PieChart className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Visualisation</CardTitle>
                <CardDescription>Storytelling data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Créez des visualisations impactantes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataScience;
