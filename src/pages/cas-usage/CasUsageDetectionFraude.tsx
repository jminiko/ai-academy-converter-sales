
import { Header } from "@/components/Header"; 
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Eye, Lock } from "lucide-react";

const CasUsageDetectionFraude = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Détection de Fraude par IA
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Protégez votre entreprise avec des systèmes de détection intelligents
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Sécuriser avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Temps réel</h3>
              <p className="text-gray-600">Détection instantanée</p>
            </Card>
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse comportementale</h3>
              <p className="text-gray-600">Patterns suspects</p>
            </Card>
            <Card className="p-6 text-center">
              <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prévention</h3>
              <p className="text-gray-600">Blocage automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Protection</h3>
              <p className="text-gray-600">Sécurité renforcée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasUsageDetectionFraude;
