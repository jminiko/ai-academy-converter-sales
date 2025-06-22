
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Edit, Sparkles, Zap } from "lucide-react";

const OutilGenerationTexte = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Outil Génération de Texte</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Créez du contenu de qualité avec l'IA générative
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Générer du contenu
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Edit className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rédaction</h3>
              <p className="text-gray-600">Articles automatiques</p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Créativité</h3>
              <p className="text-gray-600">Contenu original</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rapidité</h3>
              <p className="text-gray-600">Génération instantanée</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Formats multiples</h3>
              <p className="text-gray-600">Tous types de texte</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilGenerationTexte;
