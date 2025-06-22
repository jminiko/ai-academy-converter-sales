
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Wifi, Battery, Zap } from "lucide-react";

const EdgeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Edge AI
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            IA embarquée et computing en périphérie
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            IA à la périphérie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Wifi className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Computing distribué</CardTitle>
                <CardDescription>Architecture edge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Déployez l'IA sur edge.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Battery className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Optimisation énergie</CardTitle>
                <CardDescription>Efficacité énergétique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Optimisez la consommation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Latence ultra-faible</Cardtitle>
                <CardDescription>Réponse instantanée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Minimisez la latence.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeAI;
