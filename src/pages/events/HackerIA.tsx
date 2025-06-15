
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Clock, Award } from "lucide-react";

const HackerIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-800 to-black">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Hacker IA Competition
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Compétition intensive de développement IA en 48h
          </p>
          <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
            S'inscrire au challenge
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-gray-800 mb-4" />
                <CardTitle>48 heures intenses</CardTitle>
                <CardDescription>
                  Non-stop coding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez une solution IA complète en 48 heures chrono.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-gray-800 mb-4" />
                <CardTitle>Équipes mixtes</CardTitle>
                <CardDescription>
                  Collaboration diverse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formez des équipes pluridisciplinaires pour innover.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-gray-800 mb-4" />
                <CardTitle>Prix exceptionnels</CardTitle>
                <CardDescription>
                  Récompenses motivantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gagnez des prix allant jusqu'à 50 000€ et des opportunités.
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

export default HackerIA;
