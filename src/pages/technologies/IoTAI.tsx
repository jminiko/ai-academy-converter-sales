
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, Smartphone, Home, Factory } from "lucide-react";

const IoTAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Wifi className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IoT & IA</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Objets connectés intelligents alimentés par l'IA
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Connecter l'intelligence
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Home className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maison intelligente</h3>
              <p className="text-gray-600">Domotique IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Factory className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Industrie 4.0</h3>
              <p className="text-gray-600">Usines connectées</p>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Wearables</h3>
              <p className="text-gray-600">Santé connectée</p>
            </Card>
            <Card className="p-6 text-center">
              <Wifi className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
              <p className="text-gray-600">IA en périphérie</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTAI;
