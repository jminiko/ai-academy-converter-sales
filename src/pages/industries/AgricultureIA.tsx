
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, Droplets, Sun, Tractor } from "lucide-react";

const AgricultureIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Sprout className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Agriculture IA</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'agriculture avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Cultiver avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Irrigation intelligente</h3>
              <p className="text-gray-600">Optimisation de l'eau</p>
            </Card>
            <Card className="p-6 text-center">
              <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Météo prédictive</h3>
              <p className="text-gray-600">Prévisions précises</p>
            </Card>
            <Card className="p-6 text-center">
              <Tractor className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tracteurs autonomes</h3>
              <p className="text-gray-600">Agriculture automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring cultures</h3>
              <p className="text-gray-600">Santé des plantations</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgricultureIA;
