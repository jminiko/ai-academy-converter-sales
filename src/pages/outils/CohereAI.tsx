
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageCircle, Zap, Globe } from "lucide-react";

const CohereAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Cohere AI
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Plateforme de traitement du langage naturel pour les entreprises
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Découvrir Cohere
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Génération de texte</CardTitle>
                <CardDescription>
                  Contenu de qualité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez du contenu professionnel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Classification</CardTitle>
                <CardDescription>
                  Analyse automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Classifiez vos données textuelles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Multilingue</CardTitle>
                <CardDescription>
                  Support global
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travaillez dans plusieurs langues.
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

export default CohereAI;
