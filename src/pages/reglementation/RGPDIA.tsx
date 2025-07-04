
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText, Users } from "lucide-react";

const RGPDIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            RGPD & IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conformité RGPD pour vos projets d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Assurer la conformité
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Lock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Protection des données</CardTitle>
                <CardDescription>Sécurité garantie</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Protégez les données personnelles dans vos systèmes IA.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Documentation complète</CardTitle>
                <CardDescription>Traçabilité assurée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Documentez tous vos traitements de données IA.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Droits des personnes</CardTitle>
                <CardDescription>Respect total</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Respectez tous les droits RGPD des individus.
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

export default RGPDIA;
