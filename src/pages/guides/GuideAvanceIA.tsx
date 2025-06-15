
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Rocket, Brain, Target } from "lucide-react";

const GuideAvanceIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide Avancé IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Techniques avancées pour les experts IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Approfondir l'IA
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideAvanceIA;
