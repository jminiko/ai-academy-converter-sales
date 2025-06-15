
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Camera, Music, Mic } from "lucide-react";

const MediaIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Video className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour les Médias
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transformez la production et distribution de contenu avec l'IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Révolutionner les médias
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Camera className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Génération de contenu</CardTitle>
                <CardDescription>
                  Création automatisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez des images, vidéos et textes automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Music className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Post-production IA</CardTitle>
                <CardDescription>
                  Montage intelligent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatisez le montage et les effets visuels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mic className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Transcription temps réel</CardTitle>
                <CardDescription>
                  Audio vers texte instantané
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transcrivez et traduisez en temps réel.
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

export default MediaIA;
