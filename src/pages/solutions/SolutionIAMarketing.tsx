
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, MessageSquare, Users, BarChart } from "lucide-react";

const SolutionIAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Solution IA Marketing</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Marketing personnalisé et intelligent
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Transformer le marketing
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Segmentation</h3>
              <p className="text-gray-600">Ciblage précis</p>
            </Card>
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Contenu IA</h3>
              <p className="text-gray-600">Génération automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-gray-600">Mesure avancée</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">ROI maximisé</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionIAMarketing;
