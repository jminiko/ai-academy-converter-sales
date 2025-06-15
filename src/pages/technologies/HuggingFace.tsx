
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smile, Code, Users, Star } from "lucide-react";

const HuggingFace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Smile className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Hugging Face & Transformers
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez la plateforme leader des modèles de langage
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Explorer Hugging Face
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HuggingFace;
