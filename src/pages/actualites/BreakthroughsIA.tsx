
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Star, Lightbulb, Trophy } from "lucide-react";

const BreakthroughsIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Star className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Percées Technologiques IA
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Les innovations qui révolutionnent l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Découvrir les percées
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BreakthroughsIA;
