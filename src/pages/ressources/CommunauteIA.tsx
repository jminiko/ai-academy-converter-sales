
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageCircle, Share2, Trophy } from "lucide-react";

const CommunauteIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Communauté IA
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Rejoignez notre communauté de passionnés d'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Rejoindre la communauté
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Forums de discussion</CardTitle>
                <CardDescription>
                  Échanges enrichissants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participez aux discussions sur les dernières avancées de l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Share2 className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Partage de projets</CardTitle>
                <CardDescription>
                  Collaboration ouverte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Partagez vos projets IA et découvrez ceux des autres membres.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Défis IA</CardTitle>
                <CardDescription>
                  Compétitions stimulantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participez à des défis et hackathons IA pour progresser.
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

export default CommunauteIA;
