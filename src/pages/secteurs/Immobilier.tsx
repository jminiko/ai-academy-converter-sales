
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, TrendingUp, MapPin, Calculator } from "lucide-react";

const Immobilier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Immobilier
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez le secteur immobilier avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Découvrir nos solutions
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calculator className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Évaluation automatique</CardTitle>
                <CardDescription>
                  Estimation précise des biens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Algorithmes d'évaluation automatique basés sur l'analyse de marché.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Prédiction des prix</CardTitle>
                <CardDescription>
                  Anticipez les évolutions du marché
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Modèles prédictifs pour anticiper les fluctuations immobilières.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Géolocalisation intelligente</CardTitle>
                <CardDescription>
                  Analyse des zones et quartiers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analyse géospatiale pour identifier les opportunités d'investissement.
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

export default Immobilier;
