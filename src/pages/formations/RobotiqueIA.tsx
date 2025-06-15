
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Wrench, Cpu, Zap } from "lucide-react";

const RobotiqueIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Robotique & IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intégration de l'intelligence artificielle dans la robotique moderne
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Robotiser l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Wrench className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Robotique industrielle</CardTitle>
                <CardDescription>
                  Automatisation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intégrez l'IA dans vos processus de production robotisés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Vision par ordinateur</CardTitle>
                <CardDescription>
                  Perception robotique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des systèmes de vision pour robots autonomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Apprentissage robotique</CardTitle>
                <CardDescription>
                  IA adaptative
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des robots capables d'apprendre et de s'adapter.
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

export default RobotiqueIA;
