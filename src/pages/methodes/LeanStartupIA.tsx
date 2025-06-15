
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, BarChart3, RefreshCw, Target } from "lucide-react";

const LeanStartupIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Lean Startup pour l'IA
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Développez vos produits IA de manière agile et orientée données
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Adopter le Lean IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>MVP IA</CardTitle>
                <CardDescription>
                  Produit minimum viable intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Lancez rapidement une version basique de votre solution IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Mesurer l'impact</CardTitle>
                <CardDescription>
                  Métriques et KPI IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mesurez l'efficacité réelle de vos algorithmes en production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <RefreshCw className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Pivot intelligent</CardTitle>
                <CardDescription>
                  Adaptation basée sur les données
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adaptez votre stratégie IA en fonction des retours utilisateurs.
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

export default LeanStartupIA;
