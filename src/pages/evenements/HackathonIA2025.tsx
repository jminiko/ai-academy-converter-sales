
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Zap, Users, Gift } from "lucide-react";

const HackathonIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Hackathon IA 2025</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            48h pour créer la prochaine innovation IA révolutionnaire
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Participer au hackathon
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">48h de code</h3>
              <p className="text-gray-600">Innovation intensive</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prototypage rapide</h3>
              <p className="text-gray-600">De l'idée au produit</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Équipes mixtes</h3>
              <p className="text-gray-600">Collaboration interdisciplinaire</p>
            </Card>
            <Card className="p-6 text-center">
              <Gift className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prix 50K€</h3>
              <p className="text-gray-600">Récompenses exceptionnelles</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HackathonIA2025;
