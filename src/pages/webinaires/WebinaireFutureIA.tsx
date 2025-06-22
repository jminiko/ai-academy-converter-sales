
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Video, Clock } from "lucide-react";

const WebinaireFutureIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Video className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Webinaire : Le Futur de l'IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez les tendances et innovations qui façonneront l'IA de demain
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            S'inscrire au webinaire
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">25 Janvier 2025</h3>
              <p className="text-gray-600">Prochaine session</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">14h-16h</h3>
              <p className="text-gray-600">2h de contenu</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Experts IA</h3>
              <p className="text-gray-600">Intervenants de qualité</p>
            </Card>
            <Card className="p-6 text-center">
              <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Replay disponible</h3>
              <p className="text-gray-600">Accès illimité</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebinaireFutureIA;
