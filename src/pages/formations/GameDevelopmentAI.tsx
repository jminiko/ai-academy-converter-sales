
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Zap, Users, Target } from "lucide-react";

const GameDevelopmentAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Développement de Jeux avec IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des jeux intelligents avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Développer des jeux IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>IA comportementale</CardTitle>
                <CardDescription>
                  NPCs intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des personnages non-joueurs réalistes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Génération procédurale</CardTitle>
                <CardDescription>
                  Mondes infinis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez du contenu automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>IA adaptive</CardTitle>
                <CardDescription>
                  Difficulté dynamique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adaptez le jeu au niveau du joueur.
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

export default GameDevelopmentAI;
