
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Mic, Radio, Headphones } from "lucide-react";

const IAMusic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Music className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Musicale
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez de la musique avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Composer avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Mic className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Génération musicale</CardTitle>
                <CardDescription>
                  Composition automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des mélodies uniques avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Analyse audio</CardTitle>
                <CardDescription>
                  Reconnaissance intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez et classifiez la musique automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Headphones className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Personnalisation</CardTitle>
                <CardDescription>
                  Recommandations intelligentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des expériences musicales personnalisées.
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
