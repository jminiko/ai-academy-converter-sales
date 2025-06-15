
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Route, Fuel, Shield } from "lucide-react";

const Transport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Transport
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transformez la mobilité avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Optimiser le transport
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Route className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Optimisation des routes</CardTitle>
                <CardDescription>
                  Algorithmes de routage intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisation des itinéraires en temps réel pour réduire les coûts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Fuel className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Gestion de flotte</CardTitle>
                <CardDescription>
                  Monitoring et maintenance prédictive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillance intelligente des véhicules et maintenance préventive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Sécurité routière</CardTitle>
                <CardDescription>
                  Prévention des accidents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Systèmes d'alerte et de prévention des risques routiers.
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

export default Transport;
