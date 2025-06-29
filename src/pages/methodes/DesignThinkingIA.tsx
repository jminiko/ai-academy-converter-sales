
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, TestTube, Repeat } from "lucide-react";

const DesignThinkingIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Design Thinking pour l'IA
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Appliquez le design thinking à vos projets d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Adopter la méthode
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Empathie utilisateur</h3>
              <p className="text-gray-600">Compréhension besoins</p>
            </Card>
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Idéation créative</h3>
              <p className="text-gray-600">Solutions innovantes</p>
            </Card>
            <Card className="p-6 text-center">
              <TestTube className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prototypage rapide</h3>
              <p className="text-gray-600">Tests précoces</p>
            </Card>
            <Card className="p-6 text-center">
              <Repeat className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Itération continue</h3>
              <p className="text-gray-600">Amélioration constante</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignThinkingIA;
