
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Clock, Users, Award } from "lucide-react";

const Atelier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Ateliers Pratiques IA
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Sessions hands-on pour apprendre en pratiquant
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Participer aux ateliers
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>3h d'immersion</CardTitle>
                <CardDescription>
                  Format intensif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ateliers pratiques de 3h pour une immersion complète.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Groupes de 8</CardTitle>
                <CardDescription>
                  Accompagnement personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Petits groupes pour un suivi personnalisé optimal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Certificat de participation</CardTitle>
                <CardDescription>
                  Reconnaissance officielle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez une attestation de participation reconnue.
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

export default Atelier;
