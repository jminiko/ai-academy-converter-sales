
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scan, Eye, Image, Search } from "lucide-react";

const SanteRadiologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Scan className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Radiologie</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour l'imagerie médicale avancée
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Solutions radio IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Détection anomalies</h3>
              <p className="text-gray-600">Analyse automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Image className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Amélioration image</h3>
              <p className="text-gray-600">Qualité optimisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnostic précoce</h3>
              <p className="text-gray-600">Détection rapide</p>
            </Card>
            <Card className="p-6 text-center">
              <Scan className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">3D reconstruction</h3>
              <p className="text-gray-600">Modélisation avancée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SanteRadiologie;
