
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Bot, Zap, Users } from "lucide-react";

const GamingIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Gaming
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des expériences de jeu immersives et intelligentes
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Jouer intelligemment
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Bot className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>PNJ intelligents</CardTitle>
                <CardDescription>
                  Comportements adaptatifs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des personnages non-joueurs avec des IA avancées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Génération procédurale</CardTitle>
                <CardDescription>
                  Contenu infini
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez automatiquement niveaux et contenus de jeu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Matchmaking intelligent</CardTitle>
                <CardDescription>
                  Équilibrage des parties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des équipes équilibrées pour des parties optimales.
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

export default GamingIA;
