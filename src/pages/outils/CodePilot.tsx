
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, Users, CheckCircle } from "lucide-react";

const CodePilot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Code Pilot IA
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Assistant de programmation intelligent pour développeurs
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Coder avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Auto-complétion</CardTitle>
                <CardDescription>
                  Code intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suggestions de code en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Collaboration</CardTitle>
                <CardDescription>
                  Équipe augmentée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travaillez en équipe avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Debug automatique</CardTitle>
                <CardDescription>
                  Correction intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Détectez et corrigez les erreurs.
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
