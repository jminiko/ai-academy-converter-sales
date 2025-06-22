
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cog, Server, GitBranch, Monitor } from "lucide-react";

const FormationMLOpsProduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Cog className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation MLOps Production
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Déployez et maintenez vos modèles IA en production avec MLOps
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Industrialiser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Server className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">CI/CD ML</h3>
              <p className="text-gray-600">Pipelines automatisés</p>
            </Card>
            <Card className="p-6 text-center">
              <GitBranch className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Versioning</h3>
              <p className="text-gray-600">Gestion des modèles</p>
            </Card>
            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-600">Surveillance en temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <Cog className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Orchestration</h3>
              <p className="text-gray-600">Workflows automatisés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationMLOpsProduction;
