
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Stethoscope, Brain, Heart, Activity } from "lucide-react";

const IASante = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Stethoscope className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA Médicale & Santé
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Spécialisez-vous dans les applications médicales de l'IA
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Soigner avec l'IA
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IASante;
