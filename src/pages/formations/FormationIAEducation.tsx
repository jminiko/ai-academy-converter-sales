
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Brain } from "lucide-react";

const FormationIAEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Éducation
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour l'éducation et la formation
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Révolutionner l'apprentissage
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Apprentissage adaptatif</h3>
              <p className="text-gray-600">Personnalisation pédagogique</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tutorat intelligent</h3>
              <p className="text-gray-600">Assistance automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Évaluation IA</h3>
              <p className="text-gray-600">Correction automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Parcours adaptatifs</h3>
              <p className="text-gray-600">Formation sur mesure</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAEducation;
