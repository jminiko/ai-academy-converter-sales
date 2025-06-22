
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Network, Brain, Zap, Share2 } from "lucide-react";

const IAConnexionniste = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Connexionniste</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle inspirée du cerveau humain
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Explorer les connexions
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Neurones</h3>
              <p className="text-gray-600">Unités de traitement</p>
            </Card>
            <Card className="p-6 text-center">
              <Share2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Connexions</h3>
              <p className="text-gray-600">Liens pondérés</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Propagation</h3>
              <p className="text-gray-600">Transmission signaux</p>
            </Card>
            <Card className="p-6 text-center">
              <Network className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Réseau</h3>
              <p className="text-gray-600">Architecture distribuée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAConnexionniste;
