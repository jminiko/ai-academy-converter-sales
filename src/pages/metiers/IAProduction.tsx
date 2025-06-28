
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Factory, Settings, Zap, Activity } from "lucide-react";

const IAProduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Production</h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre production industrielle avec l'IA
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Production IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance prédictive</h3>
              <p className="text-gray-600">Prévention des pannes</p>
            </Card>
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Contrôle qualité</h3>
              <p className="text-gray-600">Inspection automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation énergie</h3>
              <p className="text-gray-600">Efficacité maximale</p>
            </Card>
            <Card className="p-6 text-center">
              <Factory className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Planification intelligente</h3>
              <p className="text-gray-600">Production optimisée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAProduction;
