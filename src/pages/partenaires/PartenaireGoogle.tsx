
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Cloud, Camera, Mic } from "lucide-react";

const PartenaireGoogle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Partenaire Google Cloud</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Solutions IA avec Google Cloud et ses technologies avancées
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Utiliser Google Cloud
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cloud className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vertex AI</h3>
              <p className="text-gray-600">Plateforme ML unifiée</p>
            </Card>
            <Card className="p-6 text-center">
              <Camera className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vision API</h3>
              <p className="text-gray-600">Reconnaissance d'images</p>
            </Card>
            <Card className="p-6 text-center">
              <Mic className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Speech API</h3>
              <p className="text-gray-600">Traitement vocal avancé</p>
            </Card>
            <Card className="p-6 text-center">
              <Search className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">BigQuery ML</h3>
              <p className="text-gray-600">Analytics et ML intégrés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartenaireGoogle;
