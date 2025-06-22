
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, UserPlus, BookOpen, Target } from "lucide-react";

const ConseilsEquipe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseils Équipe IA
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Constituez et développez vos équipes IA
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Développer mes équipes
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <UserPlus className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recrutement</h3>
              <p className="text-gray-600">Talents IA spécialisés</p>
            </Card>
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Formation</h3>
              <p className="text-gray-600">Montée en compétences</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Organisation</h3>
              <p className="text-gray-600">Structure optimale</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">Travail d'équipe</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilsEquipe;
