
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Globe, Trophy } from "lucide-react";

const SymposiumIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Symposium International IA
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Le plus grand rassemblement mondial des experts en intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Participer au symposium
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>3 jours d'événement</CardTitle>
                <CardDescription>
                  Programme intensif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conférences, ateliers et sessions networking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Experts internationaux</CardTitle>
                <CardDescription>
                  Speakers de renommée mondiale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rencontrez les leaders de l'IA mondiale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Concours d'innovation</CardTitle>
                <CardDescription>
                  Prix de l'innovation IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participez au concours startup IA.
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

export default SymposiumIA;
