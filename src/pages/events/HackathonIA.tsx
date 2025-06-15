
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Trophy, Clock, Team } from "lucide-react";

const HackathonIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Hackathon IA
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            48h pour créer la prochaine innovation IA
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            S'inscrire au hackathon
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>48 heures</CardTitle>
                <CardDescription>
                  Challenge intensif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez votre solution IA en un weekend.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Team className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Équipes de 4</CardTitle>
                <CardDescription>
                  Collaboration créative
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formez une équipe multidisciplinaire pour maximiser vos chances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>50k€ de prix</CardTitle>
                <CardDescription>
                  Récompenses exceptionnelles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prix en espèces et opportunités d'incubation pour les gagnants.
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

export default HackathonIA;
