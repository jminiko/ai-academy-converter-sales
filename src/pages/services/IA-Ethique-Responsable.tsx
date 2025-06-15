
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Balance, Users, Eye } from "lucide-react";

const IAEthiqueResponsable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA Éthique & Responsable
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Développez une IA respectueuse des valeurs humaines et éthiques
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            IA responsable
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Balance className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Équité algorithmique</CardTitle>
                <CardDescription>
                  Biais éliminés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Créez des algorithmes équitables pour tous.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Impact social</CardTitle>
                <CardDescription>
                  Bien-être collectif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Évaluez l'impact social de vos solutions IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Transparence IA</CardTitle>
                <CardDescription>
                  Explicabilité totale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rendez vos modèles IA compréhensibles.
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

export default IAEthiqueResponsable;
