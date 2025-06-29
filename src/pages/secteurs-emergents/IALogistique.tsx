
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, Route, Clock } from "lucide-react";

const IALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Logistique</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne logistique avec l'intelligence artificielle.
            Gestion des stocks, planification des livraisons et prédiction de la demande.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Gestion Intelligente des Stocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Optimisation automatique des niveaux de stock</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Route className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Optimisation des Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Calcul des itinéraires les plus efficaces</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Prédiction des Délais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Estimation précise des temps de livraison</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IALogistique;
