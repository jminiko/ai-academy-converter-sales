
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, Database, Shield } from "lucide-react";

const CloudAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Cloud className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Cloud & IA
          </h1>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez le déploiement d'IA dans le cloud
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
            Déployer dans le cloud
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Server className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Infrastructure cloud</CardTitle>
                <CardDescription>
                  Scalabilité infinie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configurez une infrastructure cloud robuste.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Bases de données cloud</CardTitle>
                <CardDescription>
                  Stockage intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gérez vos données IA dans le cloud.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-sky-600 mb-4" />
                <CardTitle>Sécurité cloud</CardTitle>
                <CardDescription>
                  Protection avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sécurisez vos déploiements IA.
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

export default CloudAI;
