
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Factory, Thermometer, BarChart } from "lucide-react";

const MetallurgieIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Cog className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Métallurgie
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos processus métallurgiques avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Optimiser la production
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Factory className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Contrôle de qualité</CardTitle>
                <CardDescription>
                  Inspection automatisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Détectez les défauts et anomalies automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Thermometer className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Optimisation thermique</CardTitle>
                <CardDescription>
                  Gestion énergétique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez les processus de chauffage et refroidissement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Prédiction de propriétés</CardTitle>
                <CardDescription>
                  Caractérisation matériaux
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prédisez les propriétés des alliages métalliques.
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

export default MetallurgieIA;
