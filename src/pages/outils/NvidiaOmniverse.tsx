
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Globe, Zap, Users } from "lucide-react";

const NvidiaOmniverse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Layers className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            NVIDIA Omniverse
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Plateforme de collaboration 3D en temps réel
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Créer en 3D
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Métavers collaboratif</CardTitle>
                <CardDescription>
                  Monde virtuel partagé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Collaborez dans des environnements 3D immersifs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Rendu temps réel</CardTitle>
                <CardDescription>
                  Performance RTX
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rendu photoréaliste en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Collaboration équipe</CardTitle>
                <CardDescription>
                  Travail synchronisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travaillez ensemble sur des projets 3D complexes.
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

export default NvidiaOmniverse;
