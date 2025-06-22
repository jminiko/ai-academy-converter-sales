
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, Calendar, BarChart3, CheckSquare } from "lucide-react";

const FormationIAGestion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Gestion</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez la gestion de projets IA
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Gérer l'IA efficacement
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Planification</h3>
              <p className="text-gray-600">Planning projet IA</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckSquare className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suivi qualité</h3>
              <p className="text-gray-600">Contrôle qualité IA</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Métriques</h3>
              <p className="text-gray-600">KPIs projets IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Process optimisés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAGestion;
