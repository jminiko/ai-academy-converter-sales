
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Smartphone, Wifi, Battery } from "lucide-react";

const IAEmbedded = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Cpu className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA Embarquée
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Intégrez l'intelligence artificielle dans les systèmes embarqués
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Embarquer l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>IA mobile</CardTitle>
                <CardDescription>
                  Intelligence sur smartphone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez l'IA pour les appareils mobiles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wifi className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>IoT intelligent</CardTitle>
                <CardDescription>
                  Objets connectés IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rendez vos objets connectés intelligents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Battery className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Efficacité énergétique</CardTitle>
                <CardDescription>
                  IA basse consommation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez la consommation énergétique.
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

export default IAEmbedded;
