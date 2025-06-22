
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Users, DollarSign, Target } from "lucide-react";

const CasEtudeStartup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Cas d'Étude : Startup IA
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            De 0 à 10M€ de valorisation grâce à l'IA en 24 mois
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Découvrir le parcours
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">10M€ Valorisation</h3>
              <p className="text-gray-600">En 24 mois</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">50K Utilisateurs</h3>
              <p className="text-gray-600">Croissance rapide</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">95% Précision</h3>
              <p className="text-gray-600">Algorithme IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">3 Brevets</h3>
              <p className="text-gray-600">Innovation protégée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasEtudeStartup;
