
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Eye, Clock, Users, Trophy } from "lucide-react";

const ComputerVision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Computer Vision
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Analysez et traitez les images avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Voir plus loin
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComputerVision;
