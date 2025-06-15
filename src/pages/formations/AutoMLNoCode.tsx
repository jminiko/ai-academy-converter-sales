
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, MousePointer, Layers, Workflow } from "lucide-react";

const AutoMLNoCode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation AutoML & No-Code IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Créez des modèles IA puissants sans programmation avec AutoML
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Créer sans coder
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <MousePointer className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Interface visuelle</CardTitle>
                <CardDescription>
                  Drag & drop IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construisez des modèles IA par glisser-déposer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>AutoML avancé</CardTitle>
                <CardDescription>
                  Optimisation automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Laissez l'IA optimiser vos modèles automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Workflow className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Déploiement rapide</CardTitle>
                <CardDescription>
                  En production facilement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Déployez vos modèles en quelques clics.
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

export default AutoMLNoCode;
