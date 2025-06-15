
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Compass, Star } from "lucide-react";

const TourismIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Compass className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Tourisme
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Personnalisez l'expérience voyage avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explorer les solutions
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Recommandations intelligentes</CardTitle>
                <CardDescription>
                  Itinéraires personnalisés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des itinéraires sur mesure basés sur les préférences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Optimisation tarifaire</CardTitle>
                <CardDescription>
                  Pricing dynamique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ajustez les prix en temps réel selon la demande.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Assistant voyage IA</CardTitle>
                <CardDescription>
                  Support 24/7 intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chatbot multilingue pour assistance voyage.
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

export default TourismIA;
