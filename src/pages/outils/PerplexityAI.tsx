
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, Lightbulb, Zap } from "lucide-react";

const PerplexityAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Perplexity AI
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Moteur de recherche intelligent alimenté par l'IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Rechercher intelligemment
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Recherche conversationnelle</CardTitle>
                <CardDescription>
                  Dialogue intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Posez vos questions en langage naturel et obtenez des réponses précises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Sources vérifiées</CardTitle>
                <CardDescription>
                  Information fiable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accédez à des informations vérifiées avec citations des sources.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Synthèse instantanée</CardTitle>
                <CardDescription>
                  Résumés intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez des synthèses rapides de sujets complexes.
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

export default PerplexityAI;
