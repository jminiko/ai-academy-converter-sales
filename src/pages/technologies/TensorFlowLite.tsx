
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Cpu, Zap, Download } from "lucide-react";

const TensorFlowLite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            TensorFlow Lite
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            IA embarquée pour applications mobiles et IoT
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Développer avec TF Lite
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisé mobile</h3>
              <p className="text-gray-600">Performance embarquée</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Faible latence</h3>
              <p className="text-gray-600">Réponse instantanée</p>
            </Card>
            <Card className="p-6 text-center">
              <Download className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Taille réduite</h3>
              <p className="text-gray-600">Modèles compacts</p>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-plateformes</h3>
              <p className="text-gray-600">iOS, Android, IoT</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TensorFlowLite;
