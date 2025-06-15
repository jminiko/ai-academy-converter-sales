
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Users, Star, TrendingUp } from "lucide-react";

const HospitalityIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Hotel className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Hôtellerie
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Personnalisez l'expérience client et optimisez vos opérations hôtelières
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Révolutionner l'accueil
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Personnalisation client</CardTitle>
                <CardDescription>
                  Expérience sur mesure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adaptez automatiquement les services aux préférences clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Gestion de réputation</CardTitle>
                <CardDescription>
                  Analyse des avis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillez et améliorez votre réputation en ligne avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Optimisation des prix</CardTitle>
                <CardDescription>
                  Revenue management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maximisez vos revenus avec une tarification dynamique IA.
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

export default HospitalityIA;
