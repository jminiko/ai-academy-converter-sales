
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Scale, Eye } from "lucide-react";

const FormationEthiqueIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Éthique de l'IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Développez une IA responsable et éthique
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            S'engager pour l'éthique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Biais et équité</CardTitle>
                <CardDescription>
                  IA inclusive et juste
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez et corrigez les biais dans vos modèles IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Cadre réglementaire</CardTitle>
                <CardDescription>
                  Conformité RGPD et AI Act
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Respectez les réglementations européennes sur l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Transparence</CardTitle>
                <CardDescription>
                  IA explicable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rendez vos décisions IA compréhensibles et auditables.
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

export default FormationEthiqueIA;
