
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Zap, Database, TrendingUp } from "lucide-react";

const ElasticSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Elasticsearch pour l'IA
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Moteur de recherche et d'analyse pour vos applications IA
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Rechercher avec Elasticsearch
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Recherche vectorielle</CardTitle>
                <CardDescription>
                  IA sémantique
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
                <Database className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Indexation intelligente</CardTitle>
                <CardDescription>
                  Performance optimale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Indexez vos données pour une recherche ultra-rapide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Analytics temps réel</CardTitle>
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

export default ElasticSearch;
