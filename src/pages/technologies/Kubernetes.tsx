
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Layers, Shield, Zap } from "lucide-react";

const Kubernetes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Container className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Kubernetes pour l'IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Orchestrez vos applications IA avec Kubernetes
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Déployer avec K8s
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Orchestration ML</CardTitle>
                <CardDescription>
                  Conteneurs intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Orchestrez vos modèles ML en production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Haute disponibilité</CardTitle>
                <CardDescription>
                  Fiabilité garantie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assurez la disponibilité de vos services IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Auto-scaling</CardTitle>
                <CardDescription>
                  Mise à l'échelle automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Scalez automatiquement selon la demande.
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

export default Kubernetes;
