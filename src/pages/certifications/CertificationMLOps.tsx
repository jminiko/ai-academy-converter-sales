
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, GitBranch, Monitor, Award } from "lucide-react";

const CertificationMLOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Workflow className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certification MLOps
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez le déploiement et la maintenance de modèles ML en production
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Obtenir la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <GitBranch className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Pipeline ML</CardTitle>
                <CardDescription>
                  Automatisation complète
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construisez des pipelines ML robustes et scalables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Monitor className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Monitoring avancé</CardTitle>
                <CardDescription>
                  Surveillance continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillez la performance et la dérive des modèles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Certification reconnue</CardTitle>
                <CardDescription>
                  Standard industrie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certification reconnue par les leaders tech.
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

export default CertificationMLOps;
