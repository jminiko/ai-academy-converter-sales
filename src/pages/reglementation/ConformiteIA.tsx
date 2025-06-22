
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileCheck, AlertTriangle, Shield } from "lucide-react";

const ConformiteIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conformité IA
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Assurez la conformité réglementaire de vos systèmes IA
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Vérifier la conformité
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileCheck className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Audit réglementaire</CardTitle>
                <CardDescription>Conformité vérifiée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Auditez vos systèmes IA selon les réglementations en vigueur.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Gestion des risques</CardTitle>
                <CardDescription>Prévention active</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez et gérez les risques de non-conformité.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Certification</CardTitle>
                <CardDescription>Reconnaissance officielle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez les certifications nécessaires pour vos systèmes IA.
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

export default ConformiteIA;
