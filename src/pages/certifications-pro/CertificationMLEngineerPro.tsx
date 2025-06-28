
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cog, Award, Code, Zap } from "lucide-react";

const CertificationMLEngineerPro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Cog className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Certification ML Engineer Pro</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Devenez ingénieur Machine Learning certifié avec notre programme avancé
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Commencer la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">MLOps</h3>
              <p className="text-gray-600">Déploiement en production</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Performance des modèles</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certification</h3>
              <p className="text-gray-600">Reconnue internationalement</p>
            </Card>
            <Card className="p-6 text-center">
              <Cog className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <p className="text-gray-600">Architecture ML complète</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationMLEngineerPro;
