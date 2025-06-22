
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calculator, PieChart } from "lucide-react";

const ConseilsROI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseils ROI IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Maximisez le retour sur investissement de vos projets IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Optimiser mon ROI
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Calcul ROI</h3>
              <p className="text-gray-600">Méthodes de mesure</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Amélioration continue</p>
            </Card>
            <Card className="p-6 text-center">
              <PieChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse coûts</h3>
              <p className="text-gray-600">Répartition budget</p>
            </Card>
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Bénéfices</h3>
              <p className="text-gray-600">Gains quantifiés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilsROI;
