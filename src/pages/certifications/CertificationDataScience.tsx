
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, TrendingUp, Award } from "lucide-react";

const CertificationDataScience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certification Data Science
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Validez vos compétences en science des données avec une certification reconnue
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Se certifier
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Gestion des données</CardTitle>
                <CardDescription>
                  Expertise complète
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maîtrisez tous les aspects de la gestion de données.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Analyse prédictive</CardTitle>
                <CardDescription>
                  Modélisation avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des modèles prédictifs performants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Reconnaissance officielle</CardTitle>
                <CardDescription>
                  Valeur professionnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez une certification valorisée par les entreprises.
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

export default CertificationDataScience;
