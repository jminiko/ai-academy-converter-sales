
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, TrendingUp, Users } from "lucide-react";

const LivresBlancsIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Livres Blancs IA
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Ressources expertes pour approfondir vos connaissances en IA
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Accéder aux livres blancs
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Download className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Téléchargement gratuit</CardTitle>
                <CardDescription>
                  Accès libre à nos publications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Téléchargez nos livres blancs sans inscription préalable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Tendances 2024</CardTitle>
                <CardDescription>
                  Analyses prospectives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Découvrez les tendances qui façonnent l'avenir de l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Études de cas</CardTitle>
                <CardDescription>
                  Retours d'expérience concrets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprenez des succès et échecs de vrais projets IA.
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

export default LivresBlancsIA;
