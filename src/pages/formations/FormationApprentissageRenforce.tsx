
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Trophy, Gamepad2, BarChart } from "lucide-react";

const FormationApprentissageRenforce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Apprentissage par Renforcement
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Entraînez des agents IA autonomes capables d'apprendre par l'expérience
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Entraîner des agents
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Q-Learning</h3>
              <p className="text-gray-600">Algorithmes de base</p>
            </Card>
            <Card className="p-6 text-center">
              <Gamepad2 className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Deep RL</h3>
              <p className="text-gray-600">DQN, A3C, PPO</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Stratégies avancées</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Applications</h3>
              <p className="text-gray-600">Jeux, robotique</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationApprentissageRenforce;
