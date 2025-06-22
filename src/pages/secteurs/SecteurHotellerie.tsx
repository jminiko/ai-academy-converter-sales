
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hotel, Users, Calendar, Star } from "lucide-react";

const SecteurHotellerie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Hotel className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour l'Hôtellerie
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transformez l'expérience client avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Moderniser l'hôtellerie
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion réservations</h3>
              <p className="text-gray-600">Optimisation automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Service client IA</h3>
              <p className="text-gray-600">Assistance 24/7</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personnalisation</h3>
              <p className="text-gray-600">Expérience sur mesure</p>
            </Card>
            <Card className="p-6 text-center">
              <Hotel className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Revenue management</h3>
              <p className="text-gray-600">Prix dynamiques</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecteurHotellerie;
