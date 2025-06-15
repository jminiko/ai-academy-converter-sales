
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Eye, Lock, Activity } from "lucide-react";

const DetectionFraude = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Détection de Fraude IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Protégez votre entreprise avec des systèmes de détection de fraude intelligents
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Sécuriser maintenant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Surveillance temps réel</CardTitle>
                <CardDescription>
                  Monitoring continu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Détectez les anomalies en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Sécurité bancaire</CardTitle>
                <CardDescription>
                  Protection financière
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sécurisez les transactions financières.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Analyse comportementale</CardTitle>
                <CardDescription>
                  Patterns suspects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez les comportements frauduleux.
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

export default DetectionFraude;
