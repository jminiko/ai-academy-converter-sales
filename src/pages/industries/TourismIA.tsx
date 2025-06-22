
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, MapPin, Camera, Users } from "lucide-react";

const TourismIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Plane className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA dans le Tourisme</h1>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Révolutionner l'expérience voyage avec l'IA
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
            Explorer les solutions
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recommandations</h3>
              <p className="text-gray-600">Suggestions personnalisées</p>
            </Card>
            <Card className="p-6 text-center">
              <Camera className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reconnaissance</h3>
              <p className="text-gray-600">Identification visuelle</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Service client</h3>
              <p className="text-gray-600">Assistance 24/7</p>
            </Card>
            <Card className="p-6 text-center">
              <Plane className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Gestion des réservations</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourismIA;
