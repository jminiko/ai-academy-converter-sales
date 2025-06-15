
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Shield, Coins, Network } from "lucide-react";

const BlockchainIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Link className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Blockchain & IA
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Explorez la convergence entre blockchain et intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Décentraliser l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>IA décentralisée</CardTitle>
                <CardDescription>
                  Réseaux distribués
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des systèmes d'IA décentralisés et sécurisés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Coins className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Smart contracts IA</CardTitle>
                <CardDescription>
                  Automatisation blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intégrez l'IA dans vos contrats intelligents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Network className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Gouvernance IA</CardTitle>
                <CardDescription>
                  DAO intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des organisations autonomes guidées par l'IA.
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

export default BlockchainIA;
