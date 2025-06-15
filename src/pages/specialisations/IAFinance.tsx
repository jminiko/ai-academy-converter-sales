
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, PieChart, CreditCard } from "lucide-react";

const IAFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Finance
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'IA appliquée aux services financiers
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Révolutionner la finance
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAFinance;
