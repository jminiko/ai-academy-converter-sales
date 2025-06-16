
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Users, Code, Share } from "lucide-react";

const HuggingFaceSpaces = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            HuggingFace Spaces
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Déployez et partagez vos modèles IA facilement avec Spaces
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Créer un Space
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Déploiement simplifié</CardTitle>
                <CardDescription>
                  En quelques clics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Déployez vos modèles sans configuration complexe.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Communauté active</CardTitle>
                <CardDescription>
                  Collaboration globale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rejoignez une communauté de millions de développeurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Share className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Partage instantané</CardTitle>
                <CardDescription>
                  Diffusion mondiale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Partagez vos créations avec le monde entier.
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

export default HuggingFaceSpaces;
