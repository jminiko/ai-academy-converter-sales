
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Megaphone, Target, Users, BarChart3 } from "lucide-react";

const SolutionIAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Megaphone className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Solution IA Marketing</h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre marketing avec l'IA
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Transformer le marketing
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ciblage intelligent</h3>
              <p className="text-gray-600">Audiences précises</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personnalisation</h3>
              <p className="text-gray-600">Contenu adapté</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Attribution multi-canal</h3>
              <p className="text-gray-600">ROI optimisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Megaphone className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automatisation</h3>
              <p className="text-gray-600">Campagnes autonomes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionIAMarketing;
