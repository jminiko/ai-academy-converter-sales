
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Cloud, Layers, Zap } from "lucide-react";

const Docker = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Package className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Docker pour l'IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Containerisation et déploiement d'applications IA avec Docker
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Containeriser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Containers IA</CardTitle>
                <CardDescription>
                  Encapsulez vos modèles ML
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des containers optimisés pour vos applications d'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Déploiement cloud</CardTitle>
                <CardDescription>
                  Orchestration avec Kubernetes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Déployez à grande échelle sur les plateformes cloud.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Optimisation des ressources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez l'utilisation GPU et CPU dans vos containers.
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

export default Docker;
