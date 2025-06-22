
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Code, Layers, Gauge } from "lucide-react";

const PyTorchMobile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            PyTorch Mobile
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Déployez vos modèles PyTorch sur mobile avec une performance optimale
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Commencer avec PyTorch Mobile
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">API simple</h3>
              <p className="text-gray-600">Intégration facile</p>
            </Card>
            <Card className="p-6 text-center">
              <Layers className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Modèles optimisés</h3>
              <p className="text-gray-600">Quantification automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Gauge className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Accélération GPU</p>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cross-platform</h3>
              <p className="text-gray-600">iOS et Android</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PyTorchMobile;
