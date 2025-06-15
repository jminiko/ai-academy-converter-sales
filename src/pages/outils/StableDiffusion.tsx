
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Palette, Clock, Users, Trophy } from "lucide-react";

const StableDiffusion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Palette className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Stable Diffusion
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Générez des images avec Stable Diffusion open source
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Débuter avec SD
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StableDiffusion;
