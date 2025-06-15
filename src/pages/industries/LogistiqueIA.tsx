
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, MapPin, BarChart3 } from "lucide-react";

const LogistiqueIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Logistique
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne d'approvisionnement avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Optimiser la logistique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Package className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Gestion d'inventaire</CardTitle>
                <CardDescription>
                  Stock intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez vos stocks avec l'IA prédictive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Optimisation des routes</CardTitle>
                <CardDescription>
                  Livraisons efficaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trouvez les meilleurs itinéraires de livraison.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Prévision de demande</CardTitle>
                <CardDescription>
                  Anticipation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prédisez la demande future avec précision.
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

export default LogistiqueIA;
