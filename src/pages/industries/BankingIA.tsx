
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, TrendingUp, Users } from "lucide-react";

const BankingIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Secteur Bancaire
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos services financiers avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Digitaliser la banque
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Détection de fraude</CardTitle>
                <CardDescription>
                  Protection en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Algorithmes avancés pour détecter les transactions suspectes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Analyse de crédit</CardTitle>
                <CardDescription>
                  Évaluation intelligente des risques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Modèles prédictifs pour l'évaluation du risque crédit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Conseillers virtuels</CardTitle>
                <CardDescription>
                  Assistance client 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chatbots intelligents pour le conseil financier personnalisé.
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

export default BankingIA;
