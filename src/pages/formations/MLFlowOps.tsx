
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, GitBranch, Monitor, Database } from "lucide-react";

const MLFlowOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Workflow className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation MLFlow & MLOps
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Gérez le cycle de vie complet de vos modèles ML avec MLFlow
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Maîtriser MLFlow
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <GitBranch className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Versioning des modèles</CardTitle>
                <CardDescription>
                  Tracking et gestion des versions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suivez l'évolution de vos modèles et expérimentations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Monitor className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Monitoring production</CardTitle>
                <CardDescription>
                  Surveillance continue des performances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitorer la performance de vos modèles en production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Registry des modèles</CardTitle>
                <CardDescription>
                  Centralisation et déploiement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gérez un registry centralisé pour tous vos modèles ML.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLFlowOps;
