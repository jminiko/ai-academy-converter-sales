
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Factory, Cog, Wrench, BarChart } from "lucide-react";

const Industrie40 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-700 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Industrie 4.0 & IA
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre production avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-gray-700 hover:bg-gray-100">
            Moderniser ma production
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industrie40;
