
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Scale, Eye, CheckCircle } from "lucide-react";

const AnalyseurBiais = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Analyseur de Biais IA
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Détectez et corrigez les biais dans vos modèles IA
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Analyser les biais
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Détection</h3>
              <p className="text-gray-600">Identification automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Scale className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Équité</h3>
              <p className="text-gray-600">Métriques fairness</p>
            </Card>
            <Card className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Alertes</h3>
              <p className="text-gray-600">Notifications temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Correction</h3>
              <p className="text-gray-600">Solutions automatisées</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalyseurBiais;
