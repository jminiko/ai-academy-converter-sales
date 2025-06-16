
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, AlertTriangle, Eye } from "lucide-react";

const MLSecurite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            ML & Sécurité
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Sécurisez vos modèles d'IA contre les attaques et les vulnérabilités
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Sécuriser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Lock className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Attaques adverses</CardTitle>
                <CardDescription>
                  Protection contre les attaques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Défendez vos modèles contre les attaques adverses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Robustesse des modèles</CardTitle>
                <CardDescription>
                  Fiabilité et stabilité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construisez des modèles robustes et fiables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Monitoring sécurisé</CardTitle>
                <CardDescription>
                  Surveillance continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillez la sécurité de vos modèles en temps réel.
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

export default MLSecurite;
