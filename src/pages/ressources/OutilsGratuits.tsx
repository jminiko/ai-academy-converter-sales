
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Code, Calculator, Lightbulb } from "lucide-react";

const OutilsGratuits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Gift className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Outils Gratuits IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Boîte à outils gratuite pour vos projets d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Découvrir les outils
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calculator className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Calculateur ROI IA</CardTitle>
                <CardDescription>
                  Estimez votre retour sur investissement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Calculez les bénéfices potentiels de vos projets IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Générateur de code</CardTitle>
                <CardDescription>
                  Templates et boilerplates IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez vos développements avec nos templates prêts à l'emploi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Générateur d'idées</CardTitle>
                <CardDescription>
                  Inspiration pour vos projets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trouvez l'inspiration pour votre prochain projet IA innovant.
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

export default OutilsGratuits;
