
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Shield, FileText } from "lucide-react";

const IAGovernment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA Gouvernementale
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Transformez les services publics avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Moderniser l'administration
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Services citoyens</CardTitle>
                <CardDescription>
                  Administration numérique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Améliorez les services aux citoyens.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Sécurité publique</CardTitle>
                <CardDescription>
                  Protection intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Renforcez la sécurité publique.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Gestion documentaire</CardTitle>
                <CardDescription>
                  Automatisation administrative
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatisez le traitement des documents.
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
