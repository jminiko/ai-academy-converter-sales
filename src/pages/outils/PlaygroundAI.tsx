
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Palette, Zap, Users } from "lucide-react";

const PlaygroundAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Playground AI
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des images IA facilement avec Playground AI
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Créer avec Playground
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Palette className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Génération créative</CardTitle>
                <CardDescription>
                  Art IA accessible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des images artistiques avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Interface intuitive</CardTitle>
                <CardDescription>
                  Simplicité d'usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Interface conviviale pour tous les niveaux.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Communauté créative</CardTitle>
                <CardDescription>
                  Partage et inspiration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Partagez vos créations avec la communauté.
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

export default PlaygroundAI;
