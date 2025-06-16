
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Award, Globe } from "lucide-react";

const ConferenceML2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conférence Machine Learning 2024
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Le plus grand événement ML de l'année réunissant experts et innovateurs
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Réserver ma place
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Experts internationaux</CardTitle>
                <CardDescription>
                  Speakers de renom
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rencontrez les leaders du ML mondial.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Ateliers pratiques</CardTitle>
                <CardDescription>
                  Hands-on sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprenez par la pratique.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Networking global</CardTitle>
                <CardDescription>
                  Communauté mondiale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Élargissez votre réseau professionnel.
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

export default ConferenceML2024;
