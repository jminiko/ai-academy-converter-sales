
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Cloud, Database, Cpu } from "lucide-react";

const CertificationAWS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certification AWS IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Obtenez votre certification officielle AWS en intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Commencer la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cloud className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>SageMaker</CardTitle>
                <CardDescription>
                  Plateforme ML managée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maîtrisez la plateforme ML d'Amazon.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Services IA AWS</CardTitle>
                <CardDescription>
                  Ecosystem complet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploitez tous les services d'IA d'AWS.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Infrastructure ML</CardTitle>
                <CardDescription>
                  Architecture scalable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construisez des pipelines ML robustes.
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

export default CertificationAWS;
