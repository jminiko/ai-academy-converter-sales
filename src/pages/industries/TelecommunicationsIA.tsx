
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Radio, Signal, Smartphone, Wifi } from "lucide-react";

const TelecommunicationsIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Radio className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour les Télécommunications
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos réseaux et services télécoms avec l'IA
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Connecter intelligemment
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Signal className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Optimisation réseau</CardTitle>
                <CardDescription>
                  Performance maximale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez automatiquement la qualité de service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Expérience client</CardTitle>
                <CardDescription>
                  Service personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Améliorez l'expérience utilisateur avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wifi className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Maintenance prédictive</CardTitle>
                <CardDescription>
                  Fiabilité réseau
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prévenez les pannes avant qu'elles surviennent.
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

export default TelecommunicationsIA;
