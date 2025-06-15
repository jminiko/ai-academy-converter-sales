
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Users, Clock } from "lucide-react";

const SanteDigitale = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Transformation Digitale en Santé
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            L'IA au service du diagnostic médical : 95% de précision atteinte
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Activity className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-600">95%</h3>
              <p>Précision diagnostique</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-600">-50%</h3>
              <p>Temps de diagnostic</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-600">10,000+</h3>
              <p>Patients traités</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SanteDigitale;
