
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Factory, Cog, Zap, BarChart } from "lucide-react";

const FormationIAIndustrie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Industrie
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour l'industrie 4.0
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Industrialiser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cog className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance prédictive</h3>
              <p className="text-gray-600">Optimisation équipements</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automatisation</h3>
              <p className="text-gray-600">Processus industriels</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualité produits</h3>
              <p className="text-gray-600">Contrôle intelligent</p>
            </Card>
            <Card className="p-6 text-center">
              <Factory className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IoT industriel</h3>
              <p className="text-gray-600">Usines connectées</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAIndustrie;
