
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Clock, Users, Trophy } from "lucide-react";

const PyTorch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Flame className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation PyTorch
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez PyTorch pour le deep learning et la recherche en IA
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Débuter avec PyTorch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PyTorch;
