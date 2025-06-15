
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Cloud, Shield, TrendingUp } from "lucide-react";

const PartenaireGoogle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Partenaire Google Cloud
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Solutions IA avancées avec l'écosystème Google Cloud Platform
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explorer Google Cloud AI
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AutoML</CardTitle>
                <CardDescription>
                  Machine learning sans expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des modèles ML personnalisés sans connaissances approfondies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Vertex AI</CardTitle>
                <CardDescription>
                  Plateforme ML unifiée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez, déployez et gérez vos modèles ML à grande échelle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>BigQuery ML</CardTitle>
                <CardDescription>
                  Analytics et ML intégrés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez vos données et créez des modèles directement dans BigQuery.
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

export default PartenaireGoogle;
