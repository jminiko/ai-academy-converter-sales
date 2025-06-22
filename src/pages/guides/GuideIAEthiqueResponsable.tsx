
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Users, Scale, Heart } from "lucide-react";

const GuideIAEthiqueResponsable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide IA Éthique et Responsable
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Développez une IA éthique et responsable pour un avenir durable
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Découvrir l'éthique IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Inclusivité</h3>
              <p className="text-gray-600">IA pour tous</p>
            </Card>
            <Card className="p-6 text-center">
              <Scale className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Équité</h3>
              <p className="text-gray-600">Algorithmes justes</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Bienveillance</h3>
              <p className="text-gray-600">Impact positif</p>
            </Card>
            <Card className="p-6 text-center">
              <ShieldCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparence</h3>
              <p className="text-gray-600">IA explicable</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideIAEthiqueResponsable;
