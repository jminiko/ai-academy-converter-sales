
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Workflow, BarChart, Cloud } from "lucide-react";

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Data Engineering avec IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les pipelines de données intelligents et l'architecture moderne
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Construire des pipelines IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Workflow className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Pipelines ETL</CardTitle>
                <CardDescription>
                  Extraction et transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des pipelines de données robustes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Data Warehousing</CardTitle>
                <CardDescription>
                  Architecture de données
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Concevez des entrepôts de données modernes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Cloud platforms</CardTitle>
                <CardDescription>
                  Infrastructure scalable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Déployez sur AWS, Azure et GCP.
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

export default DataEngineering;
