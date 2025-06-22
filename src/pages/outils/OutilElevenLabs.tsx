
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, Mic, Headphones, Waveform } from "lucide-react";

const OutilElevenLabs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Volume2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            ElevenLabs - Synthèse Vocale IA
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Génération de voix ultra-réalistes avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Créer des voix IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Mic className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Clonage vocal</h3>
              <p className="text-gray-600">Reproduction voix</p>
            </Card>
            <Card className="p-6 text-center">
              <Headphones className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualité studio</h3>
              <p className="text-gray-600">Audio professionnel</p>
            </Card>
            <Card className="p-6 text-center">
              <Waveform className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Modulation</h3>
              <p className="text-gray-600">Contrôle expression</p>
            </Card>
            <Card className="p-6 text-center">
              <Volume2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-langues</h3>
              <p className="text-gray-600">Support international</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilElevenLabs;
