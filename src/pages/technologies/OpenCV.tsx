
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Eye, Scan, Video } from "lucide-react";

const OpenCV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Camera className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            OpenCV & Vision par Ordinateur
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Bibliothèque de référence pour la vision par ordinateur
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Maîtriser OpenCV
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Détection d'objets</CardTitle>
                <CardDescription>
                  Reconnaissance et localisation automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez et localisez des objets dans les images et vidéos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Video className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Traitement vidéo</CardTitle>
                <CardDescription>
                  Analyse en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Processus de flux vidéo en temps réel pour applications interactives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scan className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Filtres avancés</CardTitle>
                <CardDescription>
                  Amélioration et transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Appliquez des filtres sophistiqués pour améliorer la qualité d'image.
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

export default OpenCV;
