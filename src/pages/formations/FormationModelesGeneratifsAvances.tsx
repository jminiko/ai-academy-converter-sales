
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Palette, Music2, Video } from "lucide-react";

const FormationModelesGeneratifsAvances = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Modèles Génératifs Avancés
          </h1>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
            GANs, VAEs, Diffusion Models et techniques de génération
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Créer avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Palette className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Génération d'images</CardTitle>
                <CardDescription>GANs et Diffusion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Créez des images haute qualité.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Music2 className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Audio génératif</CardTitle>
                <CardDescription>Création sonore IA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Générez musique et sons.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Video className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Vidéo générative</CardTitle>
                <CardDescription>Contenu multimédia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Produisez du contenu vidéo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationModelesGeneratifsAvances;
