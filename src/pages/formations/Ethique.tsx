
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Shield, Heart, Eye } from "lucide-react";

const Ethique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Éthique IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Développez une IA responsable et éthique pour un futur durable
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Agir avec éthique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Biais et discrimination</CardTitle>
                <CardDescription>
                  IA inclusive et équitable
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
                <Heart className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Impact social</CardTitle>
                <CardDescription>
                  IA au service de l'humanité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mesurez l'impact social de vos solutions IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Transparence</CardTitle>
                <CardDescription>
                  IA explicable et auditable
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

export default Ethique;
