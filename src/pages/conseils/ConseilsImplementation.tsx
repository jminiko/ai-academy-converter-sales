
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, Rocket, Code, CheckCircle } from "lucide-react";

const ConseilsImplementation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseils Implémentation IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Mise en œuvre réussie de vos solutions IA
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Implémenter l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Développement</h3>
              <p className="text-gray-600">Architecture technique</p>
            </Card>
            <Card className="p-6 text-center">
              <Rocket className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Déploiement</h3>
              <p className="text-gray-600">Mise en production</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tests</h3>
              <p className="text-gray-600">Validation qualité</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance</h3>
              <p className="text-gray-600">Support continu</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilsImplementation;
