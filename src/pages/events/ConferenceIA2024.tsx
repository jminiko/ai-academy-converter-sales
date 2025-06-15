
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Mic } from "lucide-react";

const ConferenceIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Mic className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conférence IA 2024
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Le plus grand événement IA de France - 15-16 novembre 2024
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Réserver ma place
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">15-16 Nov 2024</h3>
              <p>2 jours de conférences</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Paris</h3>
              <p>Palais des Congrès</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">2000+</h3>
              <p>Participants attendus</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConferenceIA2024;
