
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Play, Clock, Calendar } from "lucide-react";

const Podcasts = () => {
  const podcasts = [
    {
      title: "L'avenir de l'IA générative",
      description: "Discussion avec des experts sur les tendances 2024",
      duration: "45 min",
      date: "15 Déc 2024",
      category: "Tendances"
    },
    {
      title: "IA et éthique : enjeux actuels",
      description: "Débat sur les défis éthiques de l'intelligence artificielle",
      duration: "38 min",
      date: "8 Déc 2024",
      category: "Éthique"
    },
    {
      title: "Réussir son projet IA",
      description: "Méthodologie et bonnes pratiques pour les entreprises",
      duration: "52 min",
      date: "1 Déc 2024",
      category: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Mic className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Podcasts IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Écoutez nos experts discuter des dernières innovations en IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Écouter les podcasts
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{podcast.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {podcast.date}
                    </div>
                  </div>
                  <CardTitle className="flex items-center">
                    <Play className="h-5 w-5 text-purple-600 mr-2" />
                    {podcast.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{podcast.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {podcast.duration}
                    </div>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Écouter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcasts;
