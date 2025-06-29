
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star, MessageCircle } from "lucide-react";

const CasUsageIATourisme = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA dans le Tourisme</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Transformez l'expérience touristique avec l'intelligence artificielle.
            Recommandations personnalisées, planification automatique et guides virtuels.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Planification Intelligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Création automatique d'itinéraires optimisés</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Recommandations IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Suggestions personnalisées d'activités</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Assistants Virtuels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Guides touristiques conversationnels</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasUsageIATourisme;
