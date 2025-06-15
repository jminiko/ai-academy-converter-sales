
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lightbulb, Palette, Users, Heart } from "lucide-react";

const DesignThinking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Design Thinking IA
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Concevez des solutions IA centrées sur l'utilisateur
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Innover avec le Design Thinking
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignThinking;
