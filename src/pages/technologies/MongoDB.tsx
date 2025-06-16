
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Search, BarChart } from "lucide-react";

const MongoDB = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            MongoDB pour l'IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Base de données NoSQL moderne pour vos applications d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Explorer MongoDB IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Recherche vectorielle</CardTitle>
                <CardDescription>
                  Atlas Vector Search
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recherche sémantique avancée avec des vecteurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Full-text search</CardTitle>
                <CardDescription>
                  Recherche textuelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recherche textuelle intelligente et rapide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Analytics en temps réel</CardTitle>
                <CardDescription>
                  Insights instantanés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez vos données en temps réel.
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

export default MongoDB;
