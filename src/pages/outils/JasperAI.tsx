
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Megaphone, TrendingUp, Users } from "lucide-react";

const JasperAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <PenTool className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Jasper AI
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            L'assistant IA pour le marketing et la création de contenu
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Créer avec Jasper
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Megaphone className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Marketing content</CardTitle>
                <CardDescription>
                  Campagnes publicitaires efficaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des campagnes marketing qui convertissent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Optimisation SEO</CardTitle>
                <CardDescription>
                  Contenu optimisé pour les moteurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez du contenu optimisé pour le référencement naturel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Brand voice</CardTitle>
                <CardDescription>
                  Cohérence de votre marque
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maintenez la voix de votre marque dans tous vos contenus.
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

export default JasperAI;
