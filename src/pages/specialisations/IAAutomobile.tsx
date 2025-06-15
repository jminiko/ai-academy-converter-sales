
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Navigation, Shield, Cpu } from "lucide-react";

const IAAutomobile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Car className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA dans l'Automobile
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Spécialisez-vous dans l'intelligence artificielle pour l'industrie automobile
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Conduire l'innovation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Navigation className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Conduite autonome</CardTitle>
                <CardDescription>
                  Véhicules sans pilote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez les technologies de conduite autonome.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Sécurité intelligente</CardTitle>
                <CardDescription>
                  Systèmes d'assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des systèmes d'aide à la conduite avancés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Maintenance prédictive</CardTitle>
                <CardDescription>
                  Anticipation des pannes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prédisez les besoins de maintenance véhiculaire.
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

export default IAAutomobile;
