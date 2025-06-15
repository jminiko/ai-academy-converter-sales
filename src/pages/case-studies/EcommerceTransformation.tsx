
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, TrendingUp, Users, Star } from "lucide-react";

const EcommerceTransformation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Transformation E-commerce avec l'IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Comment une marketplace a multiplié son chiffre d'affaires par 3
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Lire l'étude complète
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>+300% de CA</CardTitle>
                <CardDescription>
                  Croissance exceptionnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Augmentation du chiffre d'affaires grâce à la personnalisation IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>85% satisfaction</CardTitle>
                <CardDescription>
                  Expérience client améliorée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recommandations personnalisées et service client automatisé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>40% conversion</CardTitle>
                <CardDescription>
                  Taux de conversion optimisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Amélioration significative du taux de conversion global.
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

export default EcommerceTransformation;
