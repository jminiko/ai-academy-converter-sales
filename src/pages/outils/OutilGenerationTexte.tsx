
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Wand2, Languages, Zap } from "lucide-react";

const OutilGenerationTexte = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Outil Génération de Texte IA</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Créez du contenu de qualité avec l'IA générative
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Générer du contenu
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Wand2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Génération</h3>
              <p className="text-gray-600">Contenu instantané</p>
            </Card>
            <Card className="p-6 text-center">
              <Languages className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multilingue</h3>
              <p className="text-gray-600">50+ langues</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">SEO intégré</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Formats</h3>
              <p className="text-gray-600">Multiple types</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilGenerationTexte;
