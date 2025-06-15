
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Calendar, Users, Download } from "lucide-react";

const Webinaires = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Video className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Webinaires IA
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Participez à nos sessions en ligne pour approfondir vos connaissances
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            S'inscrire aux webinaires
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Sessions programmées</CardTitle>
                <CardDescription>
                  Calendrier régulier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Webinaires hebdomadaires sur les dernières tendances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Experts invités</CardTitle>
                <CardDescription>
                  Leaders du secteur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rencontrez les pionners de l'intelligence artificielle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Replays disponibles</CardTitle>
                <CardDescription>
                  Accès permanent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Téléchargez et revisionnez tous nos webinaires.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinaires;
