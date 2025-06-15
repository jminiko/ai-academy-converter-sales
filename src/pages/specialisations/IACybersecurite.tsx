
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Eye, Lock } from "lucide-react";

const IACybersecurite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-crimson-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA & Cybersécurité
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Protégez vos systèmes avec l'intelligence artificielle avancée
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Sécuriser avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Détection des menaces</CardTitle>
                <CardDescription>
                  Identification proactive des risques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Systèmes de détection avancée des cybermenaces en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Surveillance continue</CardTitle>
                <CardDescription>
                  Monitoring 24/7 automatisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillance intelligente et analyse comportementale des systèmes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Réponse automatique</CardTitle>
                <CardDescription>
                  Mitigation instantanée des attaques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Systèmes de réponse automatique pour neutraliser les menaces.
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

export default IACybersecurite;
