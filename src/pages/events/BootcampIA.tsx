
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Trophy, Clock, Users } from "lucide-react";

const BootcampIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Bootcamp IA Intensif
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Formation immersive de 3 semaines pour devenir expert en intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Rejoindre le bootcamp
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Formation intensive</CardTitle>
                <CardDescription>
                  Apprentissage accéléré
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Devenez expert IA en 3 semaines avec notre programme intensif.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Projets pratiques</CardTitle>
                <CardDescription>
                  Mise en application immédiate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travaillez sur des projets réels d'entreprises partenaires.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Accompagnement expert</CardTitle>
                <CardDescription>
                  Mentoring personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bénéficiez du support d'experts IA reconnus dans l'industrie.
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

export default BootcampIA;
