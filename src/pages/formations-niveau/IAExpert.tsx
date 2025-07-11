
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Brain, Rocket, Trophy } from "lucide-react";

const IAExpert = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Star className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Expert</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les technologies IA les plus avancées
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Devenir expert IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA avancée</h3>
              <p className="text-gray-600">Architectures complexes</p>
            </Card>
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recherche & Innovation</h3>
              <p className="text-gray-600">Contribution scientifique</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Leadership technique</h3>
              <p className="text-gray-600">Direction de projets IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certification expert</h3>
              <p className="text-gray-600">Reconnaissance mondiale</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAExpert;
