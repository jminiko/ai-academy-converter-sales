
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Target } from "lucide-react";

const CasUsageIAEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA dans l'Éducation</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'apprentissage avec l'intelligence artificielle.
            Personnalisation pédagogique, évaluation automatique et assistance aux enseignants.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Apprentissage Adaptatif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Personnalisation du contenu selon l'élève</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Évaluation Intelligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Correction automatique et feedback personnalisé</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Assistance Enseignants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Outils IA pour faciliter l'enseignement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasUsageIAEducation;
