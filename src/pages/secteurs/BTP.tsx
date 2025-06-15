
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Hammer, Ruler, Shield } from "lucide-react";

const BTP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le BTP
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la construction avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Construire intelligent
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Hammer className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Gestion de chantier</CardTitle>
                <CardDescription>
                  Optimisation temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Supervisez vos chantiers avec l'IA prédictive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Ruler className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Conception assistée</CardTitle>
                <CardDescription>
                  Design intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez vos plans avec l'aide de l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Sécurité préventive</CardTitle>
                <CardDescription>
                  Protection maximale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prévenez les accidents avec l'IA de surveillance.
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

export default BTP;
