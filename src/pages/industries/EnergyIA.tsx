
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Battery, Gauge, Leaf } from "lucide-react";

const EnergyIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Énergie
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Optimisez la production, distribution et consommation énergétique avec l'IA
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Énergiser l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Battery className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Stockage intelligent</CardTitle>
                <CardDescription>
                  Optimisation des batteries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prédisez et optimisez le stockage d'énergie renouvelable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Prédiction de demande</CardTitle>
                <CardDescription>
                  Anticipation des besoins
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anticipez la demande énergétique avec des modèles prédictifs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Énergie verte</CardTitle>
                <CardDescription>
                  Transition écologique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez la transition vers les énergies renouvelables.
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

export default EnergyIA;
