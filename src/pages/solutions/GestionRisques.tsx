
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, TrendingDown, Lock } from "lucide-react";

const GestionRisques = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Gestion des Risques IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Anticipez et gérez les risques avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Gérer les risques
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Détection précoce</CardTitle>
                <CardDescription>
                  Alerte intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez les risques avant qu'ils surviennent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingDown className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Évaluation des risques</CardTitle>
                <CardDescription>
                  Analyse prédictive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Évaluez l'impact et la probabilité des risques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Mitigation automatique</CardTitle>
                <CardDescription>
                  Protection active
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mettez en place des mesures préventives automatiques.
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

export default GestionRisques;
