
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Eye, Mic, Image } from "lucide-react";

const OpenAIGPT4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            GPT-4 by OpenAI
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Le modèle de langage le plus avancé pour toutes vos applications IA
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Explorer GPT-4
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vision multimodale</h3>
              <p className="text-gray-600">Analyse d'images</p>
            </Card>
            <Card className="p-6 text-center">
              <Mic className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Synthèse vocale</h3>
              <p className="text-gray-600">Voix naturelle</p>
            </Card>
            <Card className="p-6 text-center">
              <Image className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">DALL-E intégré</h3>
              <p className="text-gray-600">Génération d'images</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance optimale</h3>
              <p className="text-gray-600">Vitesse et précision</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenAIGPT4;
