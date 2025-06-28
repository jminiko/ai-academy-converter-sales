
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitBranch, Brain, Zap, Network } from "lucide-react";

const IAConnexionniste = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Connexionniste</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Approche connexionniste et réseaux de neurones artificiels
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Découvrir le connexionnisme
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <GitBranch className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Réseaux connexionnistes</h3>
              <p className="text-gray-600">Neurones interconnectés</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Traitement parallèle</h3>
              <p className="text-gray-600">Calcul distribué</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Apprentissage adaptatif</h3>
              <p className="text-gray-600">Ajustement des poids</p>
            </Card>
            <Card className="p-6 text-center">
              <Network className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Émergence</h3>
              <p className="text-gray-600">Propriétés émergentes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAConnexionniste;
