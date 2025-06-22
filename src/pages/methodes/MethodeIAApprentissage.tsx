
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, Target, Users } from "lucide-react";

const MethodeIAApprentissage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Méthode IA Apprentissage
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Méthodologie complète pour maîtriser l'apprentissage en intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Découvrir la méthode
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Apprentissage structuré</CardTitle>
                <CardDescription>Progression méthodique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suivez un parcours d'apprentissage structuré et progressif.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Objectifs clairs</CardTitle>
                <CardDescription>Résultats mesurables</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Définissez et atteignez des objectifs d'apprentissage précis.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Accompagnement expert</CardTitle>
                <CardDescription>Support personnalisé</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bénéficiez de l'accompagnement de nos experts IA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MethodeIAApprentissage;
