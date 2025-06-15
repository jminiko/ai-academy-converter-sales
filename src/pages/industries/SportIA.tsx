
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Activity, Target, BarChart3 } from "lucide-react";

const SportIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA dans le Sport
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Optimisez les performances sportives et l'analyse tactique avec l'IA
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Performer avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Activity className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Analyse de performance</CardTitle>
                <CardDescription>
                  Optimisation des athlètes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez en temps réel les performances des sportifs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Stratégie tactique</CardTitle>
                <CardDescription>
                  IA d'analyse de jeu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des stratégies gagnantes basées sur la data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Prévention blessures</CardTitle>
                <CardDescription>
                  Santé des sportifs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prévenez les blessures grâce à l'analyse prédictive.
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

export default SportIA;
