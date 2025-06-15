
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Edit, Archive } from "lucide-react";

const TraitementDocuments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Traitement Intelligent de Documents
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Automatisez l'analyse et le traitement de vos documents avec l'IA
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Traiter les documents
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Extraction de données</CardTitle>
                <CardDescription>
                  OCR intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Extrayez automatiquement les informations clés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Edit className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Classification automatique</CardTitle>
                <CardDescription>
                  Tri intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Classifiez vos documents automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Archive className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Archivage intelligent</CardTitle>
                <CardDescription>
                  Gestion optimisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Organisez et retrouvez vos documents facilement.
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

export default TraitementDocuments;
