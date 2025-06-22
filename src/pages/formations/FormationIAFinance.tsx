
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Shield, BarChart } from "lucide-react";

const FormationIAFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Finance
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle appliquée aux services financiers
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Transformer la finance
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Détection fraude</h3>
              <p className="text-gray-600">Sécurité transactionnelle</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Trading algorithmique</h3>
              <p className="text-gray-600">Stratégies automatisées</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse risque</h3>
              <p className="text-gray-600">Évaluation crédit</p>
            </Card>
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Robo-advisors</h3>
              <p className="text-gray-600">Conseil automatisé</p>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default FormationIAFinance;
