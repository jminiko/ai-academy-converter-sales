
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Gamepad2, Clock, Users, Trophy } from "lucide-react";

const ReinforcementLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Reinforcement Learning
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Apprenez l'apprentissage par renforcement et ses applications
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Apprendre par l'action
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReinforcementLearning;
