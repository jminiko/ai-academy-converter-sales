
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, TrendingUp, Users, Package } from "lucide-react";

const FormationIARetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Retail
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour le commerce et la vente
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Optimiser les ventes
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recommandations</h3>
              <p className="text-gray-600">Personnalisation produits</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Segmentation clients</h3>
              <p className="text-gray-600">Ciblage intelligent</p>
            </Card>
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion stock</h3>
              <p className="text-gray-600">Prévision demande</p>
            </Card>
            <Card className="p-6 text-center">
              <ShoppingCart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prix dynamiques</h3>
              <p className="text-gray-600">Optimisation revenus</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIARetail;
