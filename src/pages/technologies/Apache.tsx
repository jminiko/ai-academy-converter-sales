
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Database, Workflow, Zap } from "lucide-react";

const Apache = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Server className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Apache Ecosystem
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'écosystème Apache pour le Big Data et l'IA
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Explorer Apache
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Apache Spark</CardTitle>
                <CardDescription>
                  Big Data processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Traitement distribué de données massives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Workflow className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Apache Kafka</CardTitle>
                <CardDescription>
                  Streaming de données
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Plateforme de streaming en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Apache Airflow</CardTitle>
                <CardDescription>
                  Orchestration de workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatisez vos pipelines de données.
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
