
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Brain, Shield, Code } from "lucide-react";

const AnthropicClaude = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Anthropic Claude
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            L'assistant IA constitutionnel pour des conversations sûres et utiles
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Découvrir Claude
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>IA constitutionnelle</CardTitle>
                <CardDescription>
                  Éthique intégrée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  IA guidée par des principes constitutionnels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Sécurité avancée</CardTitle>
                <CardDescription>
                  Protection renforcée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conversations sécurisées et contrôlées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Assistance développement</CardTitle>
                <CardDescription>
                  Programmation assistée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Support avancé pour le développement.
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

export default AnthropicClaude;
