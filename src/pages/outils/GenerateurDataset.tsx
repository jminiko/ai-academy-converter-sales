
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Shuffle, Download, Settings } from "lucide-react";

const GenerateurDataset = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Générateur de Datasets
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Créez des jeux de données synthétiques pour vos modèles IA
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Générer des données
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Shuffle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Données synthétiques</h3>
              <p className="text-gray-600">Génération automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Paramètres personnalisés</h3>
              <p className="text-gray-600">Configuration avancée</p>
            </Card>
            <Card className="p-6 text-center">
              <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Export multi-format</h3>
              <p className="text-gray-600">CSV, JSON, XML</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualité garantie</h3>
              <p className="text-gray-600">Données cohérentes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerateurDataset;
