
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Video, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Evenements = () => {
  const upcomingEvents = [
    {
      title: "IA Summit 2024",
      type: "Conférence",
      date: "25 Juin 2024",
      time: "09:00 - 18:00",
      location: "Paris La Défense",
      format: "Présentiel",
      attendees: "500+",
      price: "Gratuit",
      topics: ["GPT-4", "Automatisation", "Éthique IA", "ROI"],
      icon: "🎯"
    },
    {
      title: "Webinaire : Prompt Engineering Avancé",
      type: "Webinaire",
      date: "2 Juillet 2024",
      time: "14:00 - 15:30",
      location: "En ligne",
      format: "Virtuel",
      attendees: "200",
      price: "Gratuit",
      topics: ["Chain of Thought", "Few-shot", "Templates"],
      icon: "💡"
    },
    {
      title: "Workshop : Automatisation RPA + IA",
      type: "Atelier",
      date: "10 Juillet 2024",
      time: "09:00 - 17:00",
      location: "Lyon",
      format: "Hybride",
      attendees: "50",
      price: "299€",
      topics: ["UiPath", "Power Automate", "Intégration IA"],
      icon: "⚙️"
    }
  ];

  const pastEvents = [
    { title: "AI Revolution Conference", date: "Mai 2024", attendees: "800+" },
    { title: "ChatGPT Business Masterclass", date: "Avril 2024", attendees: "300+" },
    { title: "Future of Work Summit", date: "Mars 2024", attendees: "600+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Événements & Webinaires
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Rejoignez notre communauté d'experts IA lors de nos événements exclusifs, 
            conférences et webinaires gratuits
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Voir tous les événements
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Événements à Venir</h2>
          
          <div className="space-y-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{event.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge className="bg-green-100 text-green-800 mt-1">{event.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-2xl font-bold text-green-600">{event.price}</div>
                      <div className="text-sm text-gray-500">{event.attendees} participants</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        {event.format === "Virtuel" ? 
                          <Video className="h-4 w-4 text-gray-500 mr-2" /> : 
                          <Users className="h-4 w-4 text-gray-500 mr-2" />
                        }
                        <span>{event.format}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Sujets abordés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1" asChild>
                      <Link to="/contact">S'inscrire maintenant</Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Ajouter au calendrier
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-green-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Événements Passés</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                  <p className="text-green-600 font-semibold">{event.attendees} participants</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Pourquoi Participer ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Mic className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Experts Reconnus</h4>
                <p className="text-gray-600 text-sm">Interventions des leaders IA</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Networking</h4>
                <p className="text-gray-600 text-sm">Rencontrez votre communauté</p>
              </div>
              <div className="text-center">
                <Video className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Formats Variés</h4>
                <p className="text-gray-600 text-sm">Présentiel, virtuel, hybride</p>
              </div>
              <div className="text-center">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Régularité</h4>
                <p className="text-gray-600 text-sm">Nouveaux événements chaque mois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Newsletter Événements</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ne manquez aucun événement ! Recevez nos invitations en avant-première
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Votre email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button>S'abonner</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
