
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Brain, Star, Rocket, Globe } from "lucide-react";

const OutilOpenAIGPT5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">OpenAI GPT-5</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            L'avenir de l'intelligence artificielle avec GPT-5.
            Capacités révolutionnaires et performances inégalées.
          </p>
          <Badge variant="secondary" className="bg-yellow-500/30 text-white px-4 py-2 text-lg mb-6">
            🚀 Prochaine génération
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Vitesse Exceptionnelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Traitement ultra-rapide des requêtes complexes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Intelligence Avancée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Compréhension contextuelle révolutionnaire</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Créativité Augmentée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Génération de contenu créatif de qualité supérieure</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Découvrez GPT-5</h2>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Rocket className="mr-2 h-5 w-5" />
              Essayer GPT-5
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilOpenAIGPT5;
