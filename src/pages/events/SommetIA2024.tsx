
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Mic, Award } from "lucide-react";

const SommetIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Sommet IA 2024
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Le plus grand événement francophone sur l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Réserver ma place
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>2 jours intensifs</CardTitle>
                <CardDescription>
                  15-16 novembre 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deux journées complètes dédiées à l'innovation IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mic className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>50+ experts</CardTitle>
                <CardDescription>
                  Leaders mondiaux de l'IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conférences et tables rondes avec les pionniers de l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>1000+ participants</CardTitle>
                <CardDescription>
                  Communauté IA francophone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Networking premium avec les acteurs clés du secteur.
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

export default SommetIA2024;
