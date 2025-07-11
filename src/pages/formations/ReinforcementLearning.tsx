
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Trophy, Target, Zap } from "lucide-react";

const ReinforcementLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Reinforcement Learning
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'apprentissage par renforcement et créez des agents intelligents
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Entraîner des agents IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Algorithmes Q-Learning</CardTitle>
                <CardDescription>
                  Apprentissage par récompenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implémentez des algorithmes d'apprentissage par renforcement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Agents autonomes</CardTitle>
                <CardDescription>
                  IA qui apprend par l'action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des agents qui s'améliorent automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Applications temps réel</CardTitle>
                <CardDescription>
                  Jeux et robotique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Appliquez le RL dans des environnements dynamiques.
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

export default ReinforcementLearning;
