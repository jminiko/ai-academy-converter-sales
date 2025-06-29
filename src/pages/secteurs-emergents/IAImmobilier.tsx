
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, TrendingUp, MapPin, Calculator } from "lucide-react";

const IAImmobilier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Immobilier</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez le secteur immobilier avec l'intelligence artificielle.
            Évaluation automatique, analyse de marché et recommandations personnalisées.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calculator className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Évaluation Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Estimation précise de la valeur des biens</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Analyse de Marché</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Prédiction des tendances immobilières</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Recherche Géolocalisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Recommandations basées sur la localisation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAImmobilier;
