
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cog, Factory, Zap } from "lucide-react";

const AutomatisationRobotique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Automatisation Robotique
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'automatisation robotique des processus avec l'IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Automatiser avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cog className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>RPA avancée</CardTitle>
                <CardDescription>
                  Processus intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatisez vos processus métier complexes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Factory className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Intégration système</CardTitle>
                <CardDescription>
                  Connectivité totale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intégrez tous vos systèmes existants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Optimisation continue</CardTitle>
                <CardDescription>
                  Performance maximale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez en continu vos automatisations.
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

export default AutomatisationRobotique;
