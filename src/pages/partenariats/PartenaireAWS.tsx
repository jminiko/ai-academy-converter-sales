
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Cpu, Database, Bot } from "lucide-react";

const PartenaireAWS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <Cloud className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Partenaire AWS
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Infrastructure cloud et services IA avec Amazon Web Services
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Découvrir AWS AI
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>SageMaker</CardTitle>
                <CardDescription>
                  Plateforme ML complète
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construisez, entraînez et déployez des modèles ML rapidement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bot className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Bedrock</CardTitle>
                <CardDescription>
                  IA générative gérée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accédez aux meilleurs modèles d'IA générative via API.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Comprehend</CardTitle>
                <CardDescription>
                  Traitement du langage naturel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez des textes et extrayez des insights automatiquement.
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

export default PartenaireAWS;
