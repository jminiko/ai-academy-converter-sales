
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wheat, Sun, Droplets, Leaf } from "lucide-react";

const AgricultureIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <Wheat className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Agriculture Intelligente
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos rendements agricoles avec l'IA
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
            Cultiver intelligemment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgricultureIA;
