
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Sparkles, Code, MessageSquare } from "lucide-react";

const GeminiIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Gem className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Google Gemini IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            L'assistant IA multimodal de nouvelle génération de Google
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Explorer Gemini
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Sparkles className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>IA multimodale</CardTitle>
                <CardDescription>
                  Texte, image et code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez et générez du contenu multimédia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Génération de code</CardTitle>
                <CardDescription>
                  Programmation assistée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez du code dans tous les langages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Conversations avancées</CardTitle>
                <CardDescription>
                  Dialogue naturel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Échangez naturellement avec l'IA.
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

export default GeminiIA;
