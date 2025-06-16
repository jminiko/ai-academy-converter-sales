
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Headphones, Mic, Volume2 } from "lucide-react";

const IAMusic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Music className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Musique
          </h1>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
            Créez et composez de la musique avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Composer avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Headphones className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Composition automatique</CardTitle>
                <CardDescription>
                  Création musicale IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez des mélodies et harmonies uniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mic className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Analyse audio</CardTitle>
                <CardDescription>
                  Traitement du signal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez et transformez les signaux audio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Volume2 className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Synthèse vocale</CardTitle>
                <CardDescription>
                  Voice synthesis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des voix synthétiques réalistes.
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

export default IAMusic;
