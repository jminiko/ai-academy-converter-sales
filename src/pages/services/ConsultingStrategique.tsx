
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

const ConsultingStrategique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Consulting Stratégique IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Définissez votre stratégie IA pour transformer votre entreprise
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Élaborer ma stratégie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Vision IA</CardTitle>
                <CardDescription>
                  Stratégie d'innovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Définissez une vision claire pour l'adoption de l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>ROI et performances</CardTitle>
                <CardDescription>
                  Mesure d'impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Évaluez et optimisez le retour sur investissement IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Conduite du changement</CardTitle>
                <CardDescription>
                  Transformation organisationnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accompagnez vos équipes dans la transformation IA.
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

export default ConsultingStrategique;
