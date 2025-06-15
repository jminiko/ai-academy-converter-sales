
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Brain, Layers } from "lucide-react";

const GuidePromptAdvance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide Avancé du Prompt Engineering
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Techniques avancées pour maximiser les performances de l'IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Maîtriser les prompts
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Techniques avancées</CardTitle>
                <CardDescription>
                  Chain-of-thought et few-shot learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explorez les méthodes de prompting les plus sophistiquées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Optimisation</CardTitle>
                <CardDescription>
                  Fine-tuning de vos prompts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprenez à optimiser vos prompts pour des performances maximales.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Architectures complexes</CardTitle>
                <CardDescription>
                  Multi-step et conditional prompting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des systèmes de prompts multi-étapes sophistiqués.
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

export default GuidePromptAdvance;
