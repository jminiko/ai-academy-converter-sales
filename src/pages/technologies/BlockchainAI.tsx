
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, Shield, Database, Zap } from "lucide-react";

const BlockchainAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Link className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Blockchain & IA</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            L'alliance révolutionnaire entre blockchain et intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Explorer la convergence
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sécurité IA</h3>
              <p className="text-gray-600">Protection des modèles</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Données décentralisées</h3>
              <p className="text-gray-600">Stockage distribué</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Contracts IA</h3>
              <p className="text-gray-600">Automatisation intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <Link className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Consensus IA</h3>
              <p className="text-gray-600">Algorithmes hybrides</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainAI;
