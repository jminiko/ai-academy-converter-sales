
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lightbulb, Clock, Users, Trophy } from "lucide-react";

const ConseilStrategique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseil Stratégique IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Définissez votre stratégie IA pour transformer votre entreprise
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Planifier ma stratégie
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilStrategique;
