
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Shield, Users, Heart } from "lucide-react";

const IAEthics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Éthique de l'IA
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Développez une IA responsable et éthique
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Agir éthiquement
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Biais algorithmiques</CardTitle>
                <CardDescription>
                  Fairness & équité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez et corrigez les biais dans l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Impact sociétal</CardTitle>
                <CardDescription>
                  Responsabilité sociale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mesurez l'impact de l'IA sur la société.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>IA centrée humain</CardTitle>
                <CardDescription>
                  Human-centered AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Placez l'humain au centre de l'IA.
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

export default IAEthics;
