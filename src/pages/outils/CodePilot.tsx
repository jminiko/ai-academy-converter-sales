
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, GitBranch, Bug } from "lucide-react";

const CodePilot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            CodePilot IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Votre assistant de programmation intelligent
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Coder avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Génération de code</CardTitle>
                <CardDescription>
                  Code automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez du code de qualité instantanément.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GitBranch className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Refactoring intelligent</CardTitle>
                <CardDescription>
                  Optimisation continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Améliorez votre code automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bug className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Détection de bugs</CardTitle>
                <CardDescription>
                  Qualité assurée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trouvez et corrigez les erreurs rapidement.
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

export default CodePilot;
