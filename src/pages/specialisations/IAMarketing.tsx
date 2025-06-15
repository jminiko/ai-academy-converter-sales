
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, TrendingUp, MessageSquare } from "lucide-react";

const IAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA Marketing & Publicité
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos campagnes marketing avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Transformer le marketing
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Segmentation client</CardTitle>
                <CardDescription>
                  Ciblage précis des audiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Algorithmes de segmentation avancée pour personnaliser les campagnes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Génération de contenu</CardTitle>
                <CardDescription>
                  Création automatisée de contenus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  IA générative pour créer du contenu marketing personnalisé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Optimisation des conversions</CardTitle>
                <CardDescription>
                  Amélioration du ROI marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisation automatique des campagnes pour maximiser les conversions.
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

export default IAMarketing;
