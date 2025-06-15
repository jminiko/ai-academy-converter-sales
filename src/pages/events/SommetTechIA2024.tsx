
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Users, Lightbulb, Trophy } from "lucide-react";

const SommetTechIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Sommet Tech IA 2024
          </h1>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
            Le plus grand événement technologique IA de l'année
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Participer au sommet
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Experts mondiaux</CardTitle>
                <CardDescription>
                  Leaders de l'industrie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rencontrez les plus grands experts mondiaux de l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Innovations révolutionnaires</CardTitle>
                <CardDescription>
                  Futures technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Découvrez les innovations qui changeront le monde.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Concours innovation</CardTitle>
                <CardDescription>
                  Prix exceptionnels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participez au concours d'innovation IA.
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

export default SommetTechIA2024;
