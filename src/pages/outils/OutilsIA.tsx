
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Calculator, BarChart, Database } from "lucide-react";

const OutilsIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Outils IA
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Boîte à outils complète pour vos projets d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Découvrir les outils
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calculator className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Calculatrice ROI</h3>
              <p className="text-gray-600">Retour sur investissement IA</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyseur performance</h3>
              <p className="text-gray-600">Métriques et KPIs</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Générateur datasets</h3>
              <p className="text-gray-600">Données synthétiques</p>
            </Card>
            <Card className="p-6 text-center">
              <Wrench className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisateur modèles</h3>
              <p className="text-gray-600">Hyperparamètres</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilsIA;
