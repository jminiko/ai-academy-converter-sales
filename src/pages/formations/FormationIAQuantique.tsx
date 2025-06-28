
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gem, Atom, Zap, Infinity } from "lucide-react";

const FormationIAQuantique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Gem className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Quantique</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Explorez l'intelligence artificielle quantique de demain
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Explorer l'IA quantique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Atom className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Bits quantiques</h3>
              <p className="text-gray-600">Qubits et superposition</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Algorithmes quantiques</h3>
              <p className="text-gray-600">Vitesse exponentielle</p>
            </Card>
            <Card className="p-6 text-center">
              <Infinity className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Parallélisme quantique</h3>
              <p className="text-gray-600">Calculs simultanés</p>
            </Card>
            <Card className="p-6 text-center">
              <Gem className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Applications révolutionnaires</h3>
              <p className="text-gray-600">Nouveaux horizons</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAQuantique;
