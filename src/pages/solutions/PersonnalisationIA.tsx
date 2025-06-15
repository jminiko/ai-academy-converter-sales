
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, User, Sparkles, Settings } from "lucide-react";

const PersonnalisationIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Personnalisation IA
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Offrez des expériences sur mesure avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Personnaliser l'expérience
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonnalisationIA;
