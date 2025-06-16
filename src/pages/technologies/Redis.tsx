
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Database, Clock, BarChart } from "lucide-react";

const Redis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Redis pour l'IA
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Cache intelligent et base de données en mémoire pour l'IA haute performance
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Accélérer avec Redis
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Cache intelligent</CardTitle>
                <CardDescription>
                  Performance optimale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mise en cache des prédictions et résultats IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>RedisAI</CardTitle>
                <CardDescription>
                  Modèles en mémoire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exécutez des modèles directement dans Redis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Time series</CardTitle>
                <CardDescription>
                  Données temporelles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gérez les données temporelles pour l'IA.
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

export default Redis;
