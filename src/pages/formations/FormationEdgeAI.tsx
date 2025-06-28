
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Zap, Shield, Cpu } from "lucide-react";

const FormationEdgeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Edge AI</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'IA embarquée et le computing en périphérie
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Apprendre l'Edge AI
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Processeurs dédiés</h3>
              <p className="text-gray-600">TPU, NPU, SoC optimisés</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Latence ultra-faible</h3>
              <p className="text-gray-600">Traitement temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sécurité renforcée</h3>
              <p className="text-gray-600">Données locales</p>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IoT intelligent</h3>
              <p className="text-gray-600">Objets connectés IA</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationEdgeAI;
