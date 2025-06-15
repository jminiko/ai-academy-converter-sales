
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Cog, TestTube } from "lucide-react";

const DesignThinkingIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Design Thinking pour l'IA
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Méthodologie centrée utilisateur pour concevoir des solutions IA innovantes
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Appliquer le Design Thinking
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Empathie utilisateur</CardTitle>
                <CardDescription>
                  Comprendre les besoins réels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez les vrais problèmes à résoudre avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cog className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Idéation créative</CardTitle>
                <CardDescription>
                  Générer des solutions innovantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explorez toutes les possibilités avant de choisir la meilleure approche IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TestTube className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Prototypage rapide</CardTitle>
                <CardDescription>
                  Test et itération continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Validez vos hypothèses IA avec des prototypes testables.
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

export default DesignThinkingIA;
