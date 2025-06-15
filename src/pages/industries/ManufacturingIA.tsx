
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Cog, TrendingUp, Shield } from "lucide-react";

const ManufacturingIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Industrie Manufacturière
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos processus de production avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Industrialiser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cog className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Maintenance prédictive</CardTitle>
                <CardDescription>
                  Anticipez les pannes équipement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Réduisez les temps d'arrêt avec la maintenance intelligente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Optimisation production</CardTitle>
                <CardDescription>
                  Maximisez l'efficacité opérationnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez vos chaînes de production en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Contrôle qualité</CardTitle>
                <CardDescription>
                  Détection automatique des défauts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Vision par ordinateur pour le contrôle qualité automatisé.
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

export default ManufacturingIA;
