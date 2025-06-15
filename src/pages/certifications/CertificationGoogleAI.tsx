
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Book, Clock, Users } from "lucide-react";

const CertificationGoogleAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certification Google AI
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Validez vos compétences en IA avec la certification officielle Google
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Commencer la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Book className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Programme complet</CardTitle>
                <CardDescription>
                  Curriculum Google officiel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formation basée sur les technologies Google AI et ML.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>40 heures</CardTitle>
                <CardDescription>
                  Formation intensive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Programme de certification approfondi sur 5 semaines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Communauté</CardTitle>
                <CardDescription>
                  Réseau de professionnels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rejoignez la communauté des experts certifiés Google AI.
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

export default CertificationGoogleAI;
