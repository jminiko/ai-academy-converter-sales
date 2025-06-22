
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Zap, DollarSign, Users } from "lucide-react";

const GuideIAStartup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide IA pour Startups
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Lancez votre startup avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Démarrer avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">MVP IA</h3>
              <p className="text-gray-600">Prototype rapide</p>
            </Card>
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Financement</h3>
              <p className="text-gray-600">Lever des fonds IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Équipe technique</h3>
              <p className="text-gray-600">Recrutement spécialisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Scale-up</h3>
              <p className="text-gray-600">Croissance accélérée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideIAStartup;
