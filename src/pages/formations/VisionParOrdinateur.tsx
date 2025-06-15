
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Camera, Image, Scan } from "lucide-react";

const VisionParOrdinateur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Vision par Ordinateur
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'analyse et la reconnaissance d'images avec l'IA
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Voir avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Camera className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Détection d'objets</CardTitle>
                <CardDescription>
                  Recognition avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez et localisez des objets dans les images.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Classification d'images</CardTitle>
                <CardDescription>
                  Catégorisation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Classifiez automatiquement vos contenus visuels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scan className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Analyse faciale</CardTitle>
                <CardDescription>
                  Reconnaissance biométrique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des systèmes de reconnaissance faciale.
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

export default VisionParOrdinateur;
