
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Camera, Scan, Image } from "lucide-react";

const ExpertiseVisionParOrdinateur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Expertise Vision par Ordinateur</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Solutions avancées de reconnaissance et d'analyse d'images par IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Découvrir nos solutions vision
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reconnaissance d'objets</h3>
              <p className="text-gray-600">Détection automatique d'objets</p>
            </Card>
            <Card className="p-6 text-center">
              <Scan className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse faciale</h3>
              <p className="text-gray-600">Reconnaissance et analyse faciale</p>
            </Card>
            <Card className="p-6 text-center">
              <Image className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Traitement d'images</h3>
              <p className="text-gray-600">Amélioration et analyse</p>
            </Card>
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vision industrielle</h3>
              <p className="text-gray-600">Contrôle qualité automatisé</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertiseVisionParOrdinateur;
