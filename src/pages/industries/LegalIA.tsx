
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, Search, Shield } from "lucide-react";

const LegalIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Secteur Juridique
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Automatisez la recherche juridique et l'analyse de documents
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Moderniser le droit
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Analyse de contrats</CardTitle>
                <CardDescription>
                  Review automatisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez et révisez les contrats automatiquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Recherche jurisprudentielle</CardTitle>
                <CardDescription>
                  Base de données intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trouvez rapidement les précédents juridiques pertinents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Conformité automatisée</CardTitle>
                <CardDescription>
                  Monitoring réglementaire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Surveillez les changements réglementaires en continu.
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

export default LegalIA;
