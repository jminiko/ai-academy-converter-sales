
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Users, Trophy } from "lucide-react";

const MasterclassIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <Star className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Masterclass IA Avancée
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Formation d'excellence avec les meilleurs experts mondiaux
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Rejoindre la masterclass
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>3 jours intensifs</CardTitle>
                <CardDescription>
                  Formation immersive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Approfondissez vos compétences avec les experts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Groupe limité</CardTitle>
                <CardDescription>
                  Maximum 20 participants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bénéficiez d'un accompagnement personnalisé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Certification d'excellence</CardTitle>
                <CardDescription>
                  Reconnaissance premium
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez un certificat d'expert IA reconnu.
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

export default MasterclassIA;
