
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Layers, TrendingUp } from "lucide-react";

const MethodeFewShot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Méthode Few-Shot Learning</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Apprentissage efficace avec peu d'exemples.
            Optimisation des performances avec des données limitées.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Apprentissage Rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Adaptation rapide à de nouvelles tâches</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Transfer Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Utilisation de connaissances pré-acquises</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Efficacité Optimale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Résultats impressionnants avec peu de données</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MethodeFewShot;
