
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu, Database, Cloud, Code } from "lucide-react";

const ConseilsTechnologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Cpu className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseils Technologie IA
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Choix technologiques pour vos projets IA
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Choisir mes technologies
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Frameworks</h3>
              <p className="text-gray-600">TensorFlow, PyTorch</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Données</h3>
              <p className="text-gray-600">Architecture data</p>
            </Card>
            <Card className="p-6 text-center">
              <Cloud className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud IA</h3>
              <p className="text-gray-600">Plateformes MLaaS</p>
            </Card>
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <p className="text-gray-600">GPU, TPU, edge</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilsTechnologie;
