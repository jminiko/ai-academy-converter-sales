
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Calculator, FileText, Users } from "lucide-react";

const AssuranceIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Assurance
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Modernisez votre offre d'assurance avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Sécuriser l'avenir
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calculator className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Évaluation des risques</CardTitle>
                <CardDescription>
                  Analyse prédictive avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Améliorez la précision de vos évaluations de risques avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Traitement des sinistres</CardTitle>
                <CardDescription>
                  Automatisation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez le traitement des sinistres avec des processus automatisés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Relation client</CardTitle>
                <CardDescription>
                  Personnalisation avancée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Offrez des produits personnalisés basés sur les profils clients.
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

export default AssuranceIA;
