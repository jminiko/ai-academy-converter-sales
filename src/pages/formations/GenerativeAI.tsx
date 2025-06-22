
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Palette, Music, FileText } from "lucide-react";

const GenerativeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Générative
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Créez du contenu avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Générer avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Palette className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Génération d'images</CardTitle>
                <CardDescription>Art artificiel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Créez des images avec l'IA.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Music className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Création musicale</CardTitle>
                <CardDescription>Composition IA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Composez de la musique intelligemment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Génération de texte</CardTitle>
                <CardDescription>Écriture assistée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rédigez avec l'aide de l'IA.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerativeAI;
