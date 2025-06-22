
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, GitBranch, Monitor, Shield } from "lucide-react";

const MethodeMLOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Méthode MLOps
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Méthodologie DevOps adaptée au Machine Learning en production
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Maîtriser MLOps
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <GitBranch className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>CI/CD pour ML</CardTitle>
                <CardDescription>Déploiement automatisé</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implémentez des pipelines CI/CD pour vos modèles ML.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Monitor className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Surveillance continue</CardTitle>
                <CardDescription>Monitoring en temps réel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillez vos modèles en production 24/7.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Gouvernance ML</CardTitle>
                <CardDescription>Conformité assurée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assurez la gouvernance et la conformité de vos modèles.
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

export default MethodeMLOps;
