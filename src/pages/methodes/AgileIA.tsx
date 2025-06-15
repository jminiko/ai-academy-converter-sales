
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Repeat, Users, Target, Zap } from "lucide-react";

const AgileIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Repeat className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Méthode Agile pour l'IA
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Développez vos projets IA avec agilité et efficacité
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Adopter l'Agile IA
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgileIA;
