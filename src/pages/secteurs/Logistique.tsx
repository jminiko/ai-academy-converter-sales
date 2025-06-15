
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Package, Route } from "lucide-react";

const Logistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Logistique
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos chaînes d'approvisionnement avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Optimiser la logistique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Route className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Optimisation des routes</CardTitle>
                <CardDescription>
                  Livraison intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Calculez les meilleurs itinéraires pour réduire les coûts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Gestion des stocks</CardTitle>
                <CardDescription>
                  Prédiction intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anticipez la demande et optimisez vos inventaires.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Suivi en temps réel</CardTitle>
                <CardDescription>
                  Visibilité totale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillez vos expéditions en temps réel avec l'IA.
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

export default Logistique;
