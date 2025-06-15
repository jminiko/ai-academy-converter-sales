
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Building, Wrench, Shield } from "lucide-react";

const ConstructionIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <HardHat className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Construction
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos projets de construction avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Construire l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Building className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Planification de projet</CardTitle>
                <CardDescription>
                  Optimisation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Planifiez vos projets avec une précision optimale grâce à l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Sécurité sur chantier</CardTitle>
                <CardDescription>
                  Surveillance automatisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillez la sécurité en temps réel avec des caméras IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Maintenance prédictive</CardTitle>
                <CardDescription>
                  Équipements optimisés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anticipez les pannes d'équipement avant qu'elles surviennent.
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

export default ConstructionIA;
