
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Map, CheckCircle } from "lucide-react";

const ConseilTransition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseil en Transition IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Accompagnement stratégique pour votre transformation digitale IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Planifier la transition
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Stratégie sur mesure</CardTitle>
                <CardDescription>
                  Approche personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Définissez votre feuille de route IA unique.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Map className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Roadmap détaillée</CardTitle>
                <CardDescription>
                  Étapes structurées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Planifiez chaque étape de votre transformation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Suivi continu</CardTitle>
                <CardDescription>
                  Accompagnement permanent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bénéficiez d'un support tout au long du processus.
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

export default ConseilTransition;
