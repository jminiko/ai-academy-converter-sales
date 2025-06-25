
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Star } from "lucide-react";

const ConferenceMondialIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Star className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Conférence Mondiale IA 2025</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Le plus grand événement IA de l'année avec les leaders mondiaux
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Réserver ma place
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">15-17 Mars 2025</h3>
              <p className="text-gray-600">3 jours d'innovation</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Paris, France</h3>
              <p className="text-gray-600">Palais des Congrès</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">200+ experts</h3>
              <p className="text-gray-600">Speakers internationaux</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">50+ sessions</h3>
              <p className="text-gray-600">Workshops et conférences</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConferenceMondialIA2025;
