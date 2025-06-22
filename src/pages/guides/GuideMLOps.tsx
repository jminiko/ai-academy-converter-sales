
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, Monitor, Rocket, Database } from "lucide-react";

const GuideMLOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide MLOps Complet
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Guide pratique pour industrialiser vos modèles ML
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Découvrir MLOps
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-600">Surveillance continue</p>
            </Card>
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Déploiement</h3>
              <p className="text-gray-600">Mise en production</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Versioning</h3>
              <p className="text-gray-600">Gestion de versions</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automation</h3>
              <p className="text-gray-600">Pipeline automatisé</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideMLOps;
