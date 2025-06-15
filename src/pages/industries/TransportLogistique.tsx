
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Route, Package, MapPin } from "lucide-react";

const TransportLogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Transport & Logistique IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos chaînes logistiques avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Optimiser ma logistique
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportLogistique;
