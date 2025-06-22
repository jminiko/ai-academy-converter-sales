
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Lightbulb, Sparkles, Eye } from "lucide-react";

const OutilDALLEPro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            DALL-E Pro - Images OpenAI
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Créez des images photoréalistes avec le générateur IA d'OpenAI
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Générer avec DALL-E
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Créativité</h3>
              <p className="text-gray-600">Concepts innovants</p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualité HD</h3>
              <p className="text-gray-600">Images haute définition</p>
            </Card>
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Photoréalisme</h3>
              <p className="text-gray-600">Rendu ultra-réaliste</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rapidité</h3>
              <p className="text-gray-600">Génération instantanée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilDALLEPro;
