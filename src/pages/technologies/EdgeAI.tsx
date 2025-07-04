
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Zap, Shield, Wifi } from "lucide-react";

const EdgeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Edge AI Computing
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Déployez l'IA directement sur vos appareils pour des performances optimales
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            IA en périphérie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Latence ultra-faible</CardTitle>
                <CardDescription>
                  Réponse instantanée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Éliminez les délais de traitement cloud.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Confidentialité renforcée</CardTitle>
                <CardDescription>
                  Données locales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gardez vos données sensibles sur l'appareil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wifi className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Fonctionnement hors-ligne</CardTitle>
                <CardDescription>
                  Autonomie complète
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Continuez à fonctionner sans connexion internet.
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

export default EdgeAI;
