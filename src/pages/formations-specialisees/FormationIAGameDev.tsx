
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Bot, Target, Zap, Users, Trophy } from "lucide-react";

const FormationIAGameDev = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Game Development</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intelligence artificielle appliquée au développement de jeux vidéo.
            NPCs intelligents, génération procédurale et gameplay adaptatif.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="bg-white/20 text-white">NPCs Intelligents</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Génération Procédurale</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Gameplay Adaptatif</Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Bot className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>NPCs Intelligents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Création de personnages non-joueurs avec comportements réalistes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Génération de Contenu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Mondes et niveaux générés automatiquement par IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Gameplay Adaptatif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ajustement automatique de la difficulté selon le joueur</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAGameDev;
