
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Shield, Gauge, MapPin } from "lucide-react";

const AviationIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Plane className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Aviation
          </h1>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Sécurisez et optimisez les opérations aériennes avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
            Voler plus haut
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Sécurité aérienne</CardTitle>
                <CardDescription>
                  Prévention des incidents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Détectez les risques et prévenez les incidents avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Maintenance prédictive</CardTitle>
                <CardDescription>
                  Optimisation de flotte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anticipez les besoins de maintenance de vos aéronefs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Optimisation de routes</CardTitle>
                <CardDescription>
                  Efficacité opérationnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez les trajets et réduisez la consommation de carburant.
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

export default AviationIA;
