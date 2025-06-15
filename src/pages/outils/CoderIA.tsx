
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Terminal, GitBranch, Sparkles } from "lucide-react";

const CoderIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Code2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Coder IA - Assistant de Développement
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Accélérez votre développement avec l'assistance IA pour le code
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Coder plus vite
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Terminal className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Génération de code</CardTitle>
                <CardDescription>
                  Code automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez du code dans tous les langages avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GitBranch className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Révision de code</CardTitle>
                <CardDescription>
                  Optimisation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Améliorez la qualité de votre code avec l'analyse IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Documentation auto</CardTitle>
                <CardDescription>
                  Documentation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez automatiquement la documentation de votre code.
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

export default CoderIA;
