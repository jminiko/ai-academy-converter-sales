
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Database, Zap, Network } from "lucide-react";

const Apache = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Server className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Écosystème Apache pour l'IA
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Utilisez les outils Apache pour vos projets IA
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Explorer Apache
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Apache Spark</CardTitle>
                <CardDescription>
                  Big Data ML
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Traitez de gros volumes de données IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Apache Kafka</CardTitle>
                <CardDescription>
                  Streaming temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gérez les flux de données en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Network className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Apache Airflow</CardTitle>
                <CardDescription>
                  Orchestration ML
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Orchestrez vos pipelines ML.
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

export default Apache;
