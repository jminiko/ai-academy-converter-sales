
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Clock, Play } from "lucide-react";

const WebinaireTendancesIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Play className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Webinaire Tendances IA 2024
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Découvrez les dernières innovations et tendances en intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            S'inscrire maintenant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Date</h3>
              <p className="text-gray-600">Prochaine session</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Durée</h3>
              <p className="text-gray-600">90 minutes</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Participants</h3>
              <p className="text-gray-600">500+ inscrits</p>
            </Card>
            <Card className="p-6 text-center">
              <Play className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Format</h3>
              <p className="text-gray-600">En ligne interactif</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebinaireTendancesIA2024;
