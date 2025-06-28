
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Phone } from "lucide-react";

const IAVendeur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Vendeurs</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Boostez vos ventes avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Vente IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prospection intelligente</h3>
              <p className="text-gray-600">Identification automatique des leads</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction ventes</h3>
              <p className="text-gray-600">Prévisions précises</p>
            </Card>
            <Card className="p-6 text-center">
              <Phone className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suivi automatisé</h3>
              <p className="text-gray-600">Relance intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation performance</h3>
              <p className="text-gray-600">Amélioration continue</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAVendeur;
