
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Cpu, Sparkles } from "lucide-react";

const InnovationsIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovations IA Révolutionnaires
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Les innovations qui redéfinissent le futur de l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Découvrir les innovations
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Quantique</h3>
              <p className="text-gray-600">Calcul révolutionnaire</p>
            </Card>
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Neuromorphic Computing</h3>
              <p className="text-gray-600">Puces bio-inspirées</p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Créative</h3>
              <p className="text-gray-600">Art et design automatisés</p>
            </Card>
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AGI Progress</h3>
              <p className="text-gray-600">Intelligence générale</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationsIA;
