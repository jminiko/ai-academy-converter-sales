
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Award, CheckCircle, Users } from "lucide-react";

const CertificationPython = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certification Python IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Validez vos compétences en Python pour l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Commencer la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Certification officielle</CardTitle>
                <CardDescription>
                  Reconnaissance mondiale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez une certification reconnue.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Projets pratiques</CardTitle>
                <CardDescription>
                  Expérience réelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travaillez sur des projets concrets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Communauté</CardTitle>
                <CardDescription>
                  Support continu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rejoignez notre communauté Python.
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

export default CertificationPython;
