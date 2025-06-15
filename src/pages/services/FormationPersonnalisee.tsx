
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Clock } from "lucide-react";

const FormationPersonnalisee = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Personnalisée
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Programmes de formation sur mesure adaptés à vos besoins spécifiques
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Créer ma formation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Objectifs métier</CardTitle>
                <CardDescription>
                  Formation ciblée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formations alignées sur vos objectifs business spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Équipes dédiées</CardTitle>
                <CardDescription>
                  Accompagnement personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formation adaptée au niveau et aux besoins de vos équipes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Planning flexible</CardTitle>
                <CardDescription>
                  Organisation sur mesure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Planification adaptée à vos contraintes opérationnelles.
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

export default FormationPersonnalisee;
