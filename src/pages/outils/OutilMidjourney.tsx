
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image, Palette, Brush, Sparkles } from "lucide-react";

const OutilMidjourney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Image className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Midjourney - Création d'Images IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Générez des images artistiques époustouflantes avec l'IA générative
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Créer avec Midjourney
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Styles artistiques</h3>
              <p className="text-gray-600">Variété infinie de styles</p>
            </Card>
            <Card className="p-6 text-center">
              <Brush className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualité pro</h3>
              <p className="text-gray-600">Résolution ultra-haute</p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Créativité</h3>
              <p className="text-gray-600">Innovation artistique</p>
            </Card>
            <Card className="p-6 text-center">
              <Image className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Variants</h3>
              <p className="text-gray-600">Génération multiple</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilMidjourney;
