
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Code, Settings, Download } from "lucide-react";

const OutilStableDiffusion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Camera className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Stable Diffusion - IA Open Source
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Génération d'images IA open source avec contrôle total
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Utiliser Stable Diffusion
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-gray-600">Code libre et modifiable</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personnalisable</h3>
              <p className="text-gray-600">Modèles custom</p>
            </Card>
            <Card className="p-6 text-center">
              <Download className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Installation locale</h3>
              <p className="text-gray-600">Pas de cloud requis</p>
            </Card>
            <Card className="p-6 text-center">
              <Camera className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-formats</h3>
              <p className="text-gray-600">Images, vidéos, 3D</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilStableDiffusion;
