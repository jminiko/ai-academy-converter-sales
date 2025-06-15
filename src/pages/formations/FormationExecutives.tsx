
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Target, TrendingUp, Users } from "lucide-react";

const FormationExecutives = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Crown className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA pour Dirigeants
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Programme exécutif pour comprendre et piloter la transformation IA
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Rejoindre le programme
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Stratégie IA</CardTitle>
                <CardDescription>
                  Vision et roadmap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Définissez votre stratégie IA d'entreprise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>ROI et performances</CardTitle>
                <CardDescription>
                  Mesurer l'impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Calculez le retour sur investissement de vos projets IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Conduite du changement</CardTitle>
                <CardDescription>
                  Transformation organisationnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accompagnez vos équipes dans la transition IA.
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

export default FormationExecutives;
