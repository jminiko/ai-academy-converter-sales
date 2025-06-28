
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, FileText, Search, Shield } from "lucide-react";

const IAAvocat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Avocats</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle au service du droit et de la justice
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Droit & IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Search className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recherche juridique</h3>
              <p className="text-gray-600">Jurisprudence intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rédaction contrats</h3>
              <p className="text-gray-600">Génération automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse risques</h3>
              <p className="text-gray-600">Évaluation juridique</p>
            </Card>
            <Card className="p-6 text-center">
              <Scale className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Justice prédictive</h3>
              <p className="text-gray-600">Prédiction des décisions</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAAvocat;
