
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Shield, Zap, BarChart } from "lucide-react";

const PostgreSQL = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            PostgreSQL pour l'IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Base de données avancée pour vos projets d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explorer PostgreSQL
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Extensions IA</CardTitle>
                <CardDescription>
                  Modules spécialisés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Utilisez pgvector et autres extensions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Performances</CardTitle>
                <CardDescription>
                  Optimisation avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gérez de gros volumes de données IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Analytics IA</CardTitle>
                <CardDescription>
                  Analyse en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez vos données intelligemment.
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

export default PostgreSQL;
