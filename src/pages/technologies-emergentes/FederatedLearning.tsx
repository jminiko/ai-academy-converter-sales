
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Users, Globe } from "lucide-react";

const FederatedLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Federated Learning</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Apprentissage distribué sans partage de données.
            Collaboration sécurisée entre organisations tout en préservant la confidentialité.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Confidentialité Préservée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Données restent sur les appareils d'origine</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Collaboration Décentralisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Modèles partagés sans partage de données</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Scalabilité Globale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Apprentissage à l'échelle mondiale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FederatedLearning;
