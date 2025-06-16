
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Users, TrendingUp, Target } from "lucide-react";

const IARetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Retail
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Spécialisez-vous dans les solutions IA pour le commerce de détail
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Vendre intelligemment
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Personnalisation</CardTitle>
                <CardDescription>
                  Expérience unique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personnalisez chaque interaction client.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Prévision des ventes</CardTitle>
                <CardDescription>
                  Optimisation des stocks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anticipez la demande client.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Marketing ciblé</CardTitle>
                <CardDescription>
                  Campagnes efficaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ciblez les bons clients au bon moment.
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

export default IARetail;
