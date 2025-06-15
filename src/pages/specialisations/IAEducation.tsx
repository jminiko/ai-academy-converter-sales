
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Brain } from "lucide-react";

const IAEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Éducation
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Personnalisez l'apprentissage avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Apprendre avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Parcours adaptatifs</CardTitle>
                <CardDescription>
                  Apprentissage personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des parcours d'apprentissage sur mesure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Tuteurs virtuels</CardTitle>
                <CardDescription>
                  Assistance 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Offrez un support d'apprentissage permanent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Évaluation intelligente</CardTitle>
                <CardDescription>
                  Feedback automatisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Évaluez les progrès avec l'IA.
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

export default IAEducation;
