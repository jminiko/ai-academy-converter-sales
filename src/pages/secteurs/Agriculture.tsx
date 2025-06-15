
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Droplets, Satellite, Thermometer } from "lucide-react";

const Agriculture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Wheat className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Agriculture
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos rendements agricoles avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Cultiver l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Satellite className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Agriculture de précision</CardTitle>
                <CardDescription>
                  Surveillance par satellite et drones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillance des cultures par imagerie satellite et drones autonomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Droplets className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Irrigation intelligente</CardTitle>
                <CardDescription>
                  Optimisation de l'usage de l'eau
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Systèmes d'irrigation automatisés basés sur l'analyse des sols.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Thermometer className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Prévision météo</CardTitle>
                <CardDescription>
                  Analyses climatiques prédictives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Modèles de prédiction météorologique pour optimiser les récoltes.
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

export default Agriculture;
