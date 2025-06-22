
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Eye, Zap, Lock } from "lucide-react";

const Defense = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour la Défense
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Solutions d'intelligence artificielle pour la sécurité et la défense nationale
          </p>
          <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
            Solutions sécurisées
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-slate-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Surveillance intelligente</h3>
              <p className="text-gray-600">Détection automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-slate-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Systèmes autonomes</h3>
              <p className="text-gray-600">Robotique militaire</p>
            </Card>
            <Card className="p-6 text-center">
              <Lock className="h-12 w-12 text-slate-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cybersécurité IA</h3>
              <p className="text-gray-600">Protection avancée</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-slate-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse de menaces</h3>
              <p className="text-gray-600">Prédiction des risques</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Defense;
