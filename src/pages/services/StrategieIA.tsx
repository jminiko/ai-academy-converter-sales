
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Map, Users } from "lucide-react";

const StrategieIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Stratégie IA d'Entreprise
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Définissez et implémentez votre stratégie d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Planifier ma stratégie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Vision stratégique</CardTitle>
                <CardDescription>
                  Roadmap long terme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Définissez votre vision IA à 3-5 ans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Map className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Feuille de route</CardTitle>
                <CardDescription>
                  Planification détaillée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez un plan d'implémentation concret.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Transformation organisationnelle</CardTitle>
                <CardDescription>
                  Accompagnement du changement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Préparez vos équipes à l'ère de l'IA.
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

export default StrategieIA;
