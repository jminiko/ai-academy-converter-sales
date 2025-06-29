
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Zap, Shield, Clock } from "lucide-react";

const EdgeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Edge AI</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle en périphérie pour des performances optimales.
            Traitement local, latence réduite et confidentialité renforcée.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-cyan-600 mb-2" />
                <CardTitle>Performance Temps Réel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Traitement instantané sans latence réseau</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Confidentialité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Données traitées localement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Efficacité Énergétique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Consommation optimisée pour appareils nomades</p>
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
