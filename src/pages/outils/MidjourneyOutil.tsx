
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Image, Clock, Users, Trophy } from "lucide-react";

const MidjourneyOutil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Image className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Midjourney - Création d'Images IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des images époustouflantes avec Midjourney
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Créer des images
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MidjourneyOutil;
