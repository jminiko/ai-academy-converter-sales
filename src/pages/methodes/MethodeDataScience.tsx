
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Database, Search, TrendingUp } from "lucide-react";

const MethodeDataScience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Méthode Data Science
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Méthodologie complète pour exceller en science des données
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Explorer la Data Science
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Collecte & préparation</CardTitle>
                <CardDescription>Données de qualité</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maîtrisez la collecte et la préparation des données.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Analyse exploratoire</CardTitle>
                <CardDescription>Insights précieux</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Découvrez des insights cachés dans vos données.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Modélisation prédictive</CardTitle>
                <CardDescription>Prédictions fiables</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construisez des modèles prédictifs performants.
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

export default MethodeDataScience;
