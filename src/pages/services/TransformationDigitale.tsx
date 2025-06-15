
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Layers, Settings, CheckCircle } from "lucide-react";

const TransformationDigitale = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Workflow className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Transformation Digitale par l'IA
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Accompagnement complet dans votre transformation digitale avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Démarrer ma transformation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Stratégie digitale</CardTitle>
                <CardDescription>
                  Roadmap personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Définissez votre stratégie de transformation avec l'aide de nos experts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Implémentation</CardTitle>
                <CardDescription>
                  Déploiement sur mesure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mise en œuvre progressive de solutions IA adaptées à vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Accompagnement</CardTitle>
                <CardDescription>
                  Support continu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suivi et optimisation continue de votre transformation digitale.
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

export default TransformationDigitale;
