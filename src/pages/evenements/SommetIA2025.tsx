
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Users, Mic, Trophy } from "lucide-react";

const SommetIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Crown className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Sommet IA 2025</h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Le rendez-vous incontournable des dirigeants et décideurs IA
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Réserver ma place VIP
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Crown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Leadership IA</h3>
              <p className="text-gray-600">Stratégies de dirigeants</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">500+ participants</h3>
              <p className="text-gray-600">Élite mondiale IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Mic className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Keynotes exclusives</h3>
              <p className="text-gray-600">Visions d'avenir</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Awards IA</h3>
              <p className="text-gray-600">Reconnaissance excellence</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SommetIA2025;
