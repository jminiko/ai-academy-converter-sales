
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link2, Shield, Zap, Database } from "lucide-react";

const BlockchainAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Link2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Blockchain & IA</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            L'alliance révolutionnaire entre blockchain et intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Explorer la synergie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sécurité IA</h3>
              <p className="text-gray-600">Modèles sécurisés</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Données décentralisées</h3>
              <p className="text-gray-600">Stockage distribué</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Contracts IA</h3>
              <p className="text-gray-600">Automatisation intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <Link2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gouvernance</h3>
              <p className="text-gray-600">DAO alimentées par IA</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainAI;
