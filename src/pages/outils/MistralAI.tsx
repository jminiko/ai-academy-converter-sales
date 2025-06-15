
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Code, Globe, Zap } from "lucide-react";

const MistralAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Wind className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Mistral AI
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            L'IA française de pointe pour vos applications professionnelles
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Découvrir Mistral
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Modèles open source</CardTitle>
                <CardDescription>
                  Transparence totale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accédez aux modèles les plus transparents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Souveraineté européenne</CardTitle>
                <CardDescription>
                  IA européenne
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Solution IA respectueuse des valeurs européennes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Performance optimale</CardTitle>
                <CardDescription>
                  Efficacité maximale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Des modèles optimisés pour la performance.
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

export default MistralAI;
