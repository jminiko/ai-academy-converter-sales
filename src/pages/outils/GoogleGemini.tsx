
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Search, Globe, Smartphone } from "lucide-react";

const GoogleGemini = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Google Gemini
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            L'IA multimodale de Google pour comprendre et créer du contenu
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Découvrir Gemini
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Search className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recherche avancée</h3>
              <p className="text-gray-600">Information en temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Intégration Google</h3>
              <p className="text-gray-600">Écosystème complet</p>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile-first</h3>
              <p className="text-gray-600">Optimisé mobile</p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Créativité IA</h3>
              <p className="text-gray-600">Génération créative</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleGemini;
