
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Shield, Users, FileText } from "lucide-react";

const IAGovernment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Gouvernement
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Solutions IA pour améliorer les services publics et la gouvernance
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Moderniser les services
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Sécurité publique</CardTitle>
                <CardDescription>
                  Protection citoyenne
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Renforcez la sécurité avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Services citoyens</CardTitle>
                <CardDescription>
                  Amélioration continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez l'expérience citoyenne.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Processus administratifs</CardTitle>
                <CardDescription>
                  Automatisation publique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simplifiez les démarches administratives.
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

export default IAGovernment;
