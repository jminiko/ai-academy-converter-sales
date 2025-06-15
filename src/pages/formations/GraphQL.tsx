
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Database, Zap, Code } from "lucide-react";

const GraphQL = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation GraphQL pour l'IA
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos APIs IA avec GraphQL
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Maîtriser GraphQL
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Requêtes optimisées</CardTitle>
                <CardDescription>
                  Efficacité maximale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des requêtes GraphQL performantes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Temps réel</CardTitle>
                <CardDescription>
                  Subscriptions GraphQL
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implémentez des données en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Schémas IA</CardTitle>
                <CardDescription>
                  Types intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Concevez des schémas pour l'IA.
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

export default GraphQL;
