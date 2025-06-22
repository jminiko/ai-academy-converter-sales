
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserSearch, Brain, CheckCircle, TrendingUp } from "lucide-react";

const IARecruitement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <UserSearch className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Recrutement
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos processus de recrutement avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Optimiser mon recrutement
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tri automatique CV</h3>
              <p className="text-gray-600">Sélection intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Matching candidats</h3>
              <p className="text-gray-600">Compatibilité optimale</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction performance</h3>
              <p className="text-gray-600">Succès anticipé</p>
            </Card>
            <Card className="p-6 text-center">
              <UserSearch className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Chasse de têtes IA</h3>
              <p className="text-gray-600">Talents cachés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IARecruitement;
