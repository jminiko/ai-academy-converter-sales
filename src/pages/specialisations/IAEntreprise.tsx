
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Shield, TrendingUp } from "lucide-react";

const IAEntreprise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA d'Entreprise
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Solutions IA sur mesure pour les grandes entreprises
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Transformer l'entreprise
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Gestion des talents</CardTitle>
                <CardDescription>
                  RH intelligentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez le recrutement et la gestion RH.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Gouvernance IA</CardTitle>
                <CardDescription>
                  Contrôle et conformité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assurez la gouvernance de vos projets IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Transformation digitale</CardTitle>
                <CardDescription>
                  Innovation continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez votre transformation digitale.
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

export default IAEntreprise;
