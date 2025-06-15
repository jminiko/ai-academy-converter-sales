
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Target, TrendingUp, Users } from "lucide-react";

const RecommandationIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Star className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Systèmes de Recommandation IA
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Créez des expériences personnalisées avec l'IA de recommandation
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Personnaliser l'expérience
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Recommandations précises</CardTitle>
                <CardDescription>
                  Ciblage intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recommandations hyper-personnalisées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Analyse comportementale</CardTitle>
                <CardDescription>
                  Compréhension utilisateur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez et prédisez les préférences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Optimisation ROI</CardTitle>
                <CardDescription>
                  Performance mesurable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Augmentez vos conversions et revenus.
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

export default RecommandationIA;
