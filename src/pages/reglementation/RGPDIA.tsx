
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, FileText, AlertTriangle } from "lucide-react";

const RGPDIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            RGPD et IA : Conformité
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Respectez le RGPD dans vos projets d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Guide de conformité
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Protection données</h3>
              <p className="text-gray-600">Sécurité renforcée</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-gray-600">Traçabilité complète</p>
            </Card>
            <Card className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion des risques</h3>
              <p className="text-gray-600">Évaluation d'impact</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Droits utilisateurs</h3>
              <p className="text-gray-600">Respect des libertés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RGPDIA;
