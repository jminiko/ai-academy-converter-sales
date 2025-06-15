
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Globe, Zap } from "lucide-react";

const RevolutionIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            La Révolution IA 2025
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Découvrez les avancées majeures qui transformeront notre monde
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Lire l'article
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Croissance exponentielle</CardTitle>
                <CardDescription>
                  Adoption massive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  L'IA générative atteint 1 milliard d'utilisateurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Impact mondial</CardTitle>
                <CardDescription>
                  Transformation globale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tous les secteurs sont touchés par la révolution IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Innovations breakthrough</CardTitle>
                <CardDescription>
                  Percées technologiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Des avancées qui redéfinissent les possibilités.
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

export default RevolutionIA2025;
