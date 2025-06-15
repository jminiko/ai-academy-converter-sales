
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Download, FileText, Video } from "lucide-react";

const BibliothequeIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Book className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Bibliothèque de Ressources IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Accédez à notre collection complète de ressources sur l'IA
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Explorer la bibliothèque
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Papers & Recherches</CardTitle>
                <CardDescription>
                  Publications scientifiques récentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accès aux dernières publications de recherche en IA.
                </p>
                <Button className="mt-4" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Video className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Tutoriels Vidéo</CardTitle>
                <CardDescription>
                  Formations vidéo détaillées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bibliothèque de tutoriels vidéo pour tous niveaux.
                </p>
                <Button className="mt-4" variant="outline">
                  <Video className="h-4 w-4 mr-2" />
                  Regarder
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Book className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Livres Blancs</CardTitle>
                <CardDescription>
                  Guides complets et méthodologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Collection de guides approfondis sur l'IA d'entreprise.
                </p>
                <Button className="mt-4" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BibliothequeIA;
