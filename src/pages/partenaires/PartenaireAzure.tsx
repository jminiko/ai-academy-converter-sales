
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, Cpu, Database, Shield } from "lucide-react";

const PartenaireAzure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <Cloud className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Partenaire Microsoft Azure</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Solutions IA sur la plateforme cloud Microsoft Azure
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Découvrir Azure AI
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Azure AI Services</h3>
              <p className="text-gray-600">APIs IA prêtes à l'emploi</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Studio ML Azure</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sécurité</h3>
              <p className="text-gray-600">Conformité enterprise</p>
            </Card>
            <Card className="p-6 text-center">
              <Cloud className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Hybride</h3>
              <p className="text-gray-600">Déploiement flexible</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartenaireAzure;
