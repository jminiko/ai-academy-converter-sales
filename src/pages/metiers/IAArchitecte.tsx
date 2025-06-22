
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building, Ruler, Compass, Layers } from "lucide-react";

const IAArchitecte = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Architectes</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Révolutionner l'architecture avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Concevoir avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Compass className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Conception IA</h3>
              <p className="text-gray-600">Design génératif</p>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Espaces optimisés</p>
            </Card>
            <Card className="p-6 text-center">
              <Layers className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">BIM Intelligent</h3>
              <p className="text-gray-600">Modélisation avancée</p>
            </Card>
            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Simulation</h3>
              <p className="text-gray-600">Performances prédictives</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAArchitecte;
