
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Mail, TrendingUp, Users } from "lucide-react";

const AutomatisationMarketingIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Automatisation Marketing IA
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos campagnes marketing avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Automatiser le marketing
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Mail className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Email marketing IA</CardTitle>
                <CardDescription>
                  Personnalisation avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des emails personnalisés automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Segmentation intelligente</CardTitle>
                <CardDescription>
                  Ciblage précis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Segmentez vos audiences avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Optimisation ROI</CardTitle>
                <CardDescription>
                  Performance maximale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maximisez le retour sur investissement.
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

export default AutomatisationMarketingIA;
