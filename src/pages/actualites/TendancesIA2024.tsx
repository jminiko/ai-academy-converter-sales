
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Star, Lightbulb, Calendar } from "lucide-react";

const TendancesIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Tendances IA 2024
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Découvrez les principales tendances qui façonnent l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Explorer les tendances
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>IA multimodale</CardTitle>
                <CardDescription>
                  Convergence des médias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  L'IA qui comprend texte, image et audio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Edge AI</CardTitle>
                <CardDescription>
                  IA embarquée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intelligence artificielle directement sur l'appareil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>AutoML démocratisé</CardTitle>
                <CardDescription>
                  IA accessible à tous
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Machine learning sans expertise technique.
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

export default TendancesIA2024;
