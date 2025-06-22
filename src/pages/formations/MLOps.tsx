
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Workflow, Monitor, Rocket } from "lucide-react";

const MLOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation MLOps
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Déployez et maintenez vos modèles ML en production
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Industrialiser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Workflow className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>CI/CD ML</CardTitle>
                <CardDescription>Pipeline automatisé</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Automatisez vos déploiements ML.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Monitor className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Monitoring</CardTitle>
                <CardDescription>Surveillance continue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Surveillez vos modèles en production.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Scalabilité</CardTitle>
                <CardDescription>Performance à l'échelle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Gérez la montée en charge.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLOps;
