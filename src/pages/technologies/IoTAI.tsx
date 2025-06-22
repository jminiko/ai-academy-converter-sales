
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, Smartphone, Zap, Shield } from "lucide-react";

const IoTAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Wifi className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IoT & IA</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            L'Internet des Objets intelligents avec l'IA
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Connecter intelligemment
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Smartphone className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Appareils connectés</h3>
              <p className="text-gray-600">Réseau intelligent</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automatisation</h3>
              <p className="text-gray-600">Contrôle autonome</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sécurité IoT</h3>
              <p className="text-gray-600">Protection avancée</p>
            </Card>
            <Card className="p-6 text-center">
              <Wifi className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Communication</h3>
              <p className="text-gray-600">Protocoles optimisés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTAI;
