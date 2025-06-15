
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users, Trophy } from "lucide-react";

const Sante = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Santé
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez les soins de santé avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Découvrir nos solutions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sante;
