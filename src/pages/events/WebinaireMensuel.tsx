
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Video, Clock } from "lucide-react";

const WebinaireMensuel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Video className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Webinaire Mensuel IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Rendez-vous mensuel pour découvrir les dernières innovations IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            S'inscrire gratuitement
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Chaque 3e jeudi</CardTitle>
                <CardDescription>
                  Rendez-vous régulier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Webinaire mensuel à 14h, chaque 3e jeudi du mois.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>500+ participants</CardTitle>
                <CardDescription>
                  Communauté active
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rejoignez notre communauté de professionnels IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>1h30 de contenu</CardTitle>
                <CardDescription>
                  Format interactif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Présentation + Q&A avec nos experts.
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

export default WebinaireMensuel;
