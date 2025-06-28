
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Palette, Music, FileText } from "lucide-react";

const FormationModelesGeneratifsAvances = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Modèles Génératifs</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Créez du contenu innovant avec l'IA générative de pointe
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Créer avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Palette className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Images génératives</h3>
              <p className="text-gray-600">DALL-E, Midjourney, Stable Diffusion</p>
            </Card>
            <Card className="p-6 text-center">
              <Music className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Audio génératif</h3>
              <p className="text-gray-600">Musique et voix synthétiques</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Texte génératif</h3>
              <p className="text-gray-600">GPT et modèles de langage</p>
            </Card>
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation créative</h3>
              <p className="text-gray-600">Nouvelles formes d'art</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationModelesGeneratifsAvances;
