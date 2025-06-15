
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, TrendingUp, Users, Target } from "lucide-react";

const RetailTransformation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <ShoppingBag className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Transformation Retail avec l'IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Comment un grand retailer a augmenté ses ventes de 40% grâce à l'IA
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600">+40%</h3>
              <p>Augmentation des ventes</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600">+25%</h3>
              <p>Satisfaction client</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600">-30%</h3>
              <p>Coûts opérationnels</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Le défi</h2>
            <p>
              Cette grande chaîne de retail faisait face à une concurrence accrue 
              et devait optimiser l'expérience client tout en réduisant les coûts...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailTransformation;
