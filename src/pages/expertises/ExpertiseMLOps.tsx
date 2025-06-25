
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cog, GitBranch, Monitor, Zap } from "lucide-react";

const ExpertiseMLOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Cog className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Expertise MLOps</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Déployement et gestion de modèles ML en production
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Optimiser vos modèles
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <GitBranch className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">CI/CD ML</h3>
              <p className="text-gray-600">Pipeline automatisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-600">Surveillance temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Déploiement</h3>
              <p className="text-gray-600">Mise en production sécurisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Cog className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Orchestration</h3>
              <p className="text-gray-600">Gestion des workflows</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertiseMLOps;
