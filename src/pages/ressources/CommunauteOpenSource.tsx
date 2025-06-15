
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Users, Code, Heart } from "lucide-react";

const CommunauteOpenSource = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Github className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Communauté Open Source IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Rejoignez la plus grande communauté open source dédiée à l'IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Rejoindre la communauté
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Projets collaboratifs</CardTitle>
                <CardDescription>
                  Innovation partagée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contribuez à des projets IA open source innovants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Réseau mondial</CardTitle>
                <CardDescription>
                  Communauté active
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connectez-vous avec des développeurs du monde entier.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Impact positif</CardTitle>
                <CardDescription>
                  IA pour le bien
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des solutions IA pour un impact social positif.
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

export default CommunauteOpenSource;
