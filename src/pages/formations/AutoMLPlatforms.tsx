
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Layers, Target, Settings } from "lucide-react";

const AutoMLPlatforms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Plateformes AutoML
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les plateformes d'apprentissage automatique automatisé
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Automatiser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Google AutoML</CardTitle>
                <CardDescription>
                  IA sans code avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des modèles personnalisés sans programmation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>H2O.ai AutoML</CardTitle>
                <CardDescription>
                  Plateforme open source
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatisation complète du machine learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Azure AutoML</CardTitle>
                <CardDescription>
                  Solution Microsoft
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intégration parfaite avec l'écosystème Azure.
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

export default AutoMLPlatforms;
