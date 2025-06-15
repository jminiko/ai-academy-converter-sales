
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Target } from "lucide-react";

const ConsultingIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Conseil
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Transformez vos missions de conseil avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Conseiller avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Analyse stratégique</CardTitle>
                <CardDescription>
                  Insights intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez les données clients avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Gestion de projet IA</CardTitle>
                <CardDescription>
                  Efficacité optimisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez vos projets de conseil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Recommandations IA</CardTitle>
                <CardDescription>
                  Conseils personnalisés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez des recommandations précises.
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

export default ConsultingIA;
