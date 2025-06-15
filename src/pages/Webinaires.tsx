
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video, Play, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Webinaires = () => {
  const webinairesAVenir = [
    {
      titre: "ChatGPT 4.0 : Nouveautés et Applications Business",
      date: "25 Juin 2024",
      heure: "14h00 - 15h30",
      duree: "90 minutes",
      participants: 250,
      maxParticipants: 500,
      gratuit: true,
      niveau: "Intermédiaire",
      intervenant: "Sophie Martin",
      posteIntervenant: "CTO & Co-fondatrice",
      description: "Découvrez les dernières fonctionnalités de ChatGPT 4.0 et comment les intégrer dans vos processus business.",
      programme: [
        "Présentation des nouvelles fonctionnalités",
        "Démonstrations pratiques en direct",
        "Cas d'usage en entreprise",
        "Session Q&A interactive"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
    },
    {
      titre: "Automatisation IA : ROI et Implémentation",
      date: "2 Juillet 2024", 
      heure: "16h00 - 17h00",
      duree: "60 minutes",
      participants: 180,
      maxParticipants: 300,
      gratuit: false,
      prix: 49,
      niveau: "Avancé",
      intervenant: "Alexandre Dubois",
      posteIntervenant: "CEO & Fondateur",
      description: "Masterclass sur l'automatisation intelligente : calcul du ROI, méthodologie d'implémentation et retours d'expérience.",
      programme: [
        "Framework de calcul du ROI",
        "Méthodologie d'implémentation",
        "Étude de cas client",
        "Tools et ressources exclusives"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      titre: "IA Générative pour les RH : Révolution du Recrutement",
      date: "9 Juillet 2024",
      heure: "11h00 - 12h30",
      duree: "90 minutes", 
      participants: 320,
      maxParticipants: 400,
      gratuit: true,
      niveau: "Débutant",
      intervenant: "Marie Rousseau",
      posteIntervenant: "Lead Consultant IA",
      description: "Comment l'IA transforme les processus RH : recrutement, évaluation, formation et gestion des talents.",
      programme: [
        "IA dans le sourcing candidats",
        "Automatisation des entretiens",
        "Analyse prédictive des performances",
        "Outils recommandés"
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    }
  ];

  const webinairesPassés = [
    {
      titre: "Prompt Engineering : Techniques Avancées",
      date: "18 Juin 2024",
      participants: 480,
      satisfaction: 4.9,
      duree: "120 minutes",
      replay: true,
      gratuit: false,
      prix: 39
    },
    {
      titre: "Microsoft Copilot : Guide Complet pour Entreprises",
      date: "11 Juin 2024", 
      participants: 350,
      satisfaction: 4.7,
      duree: "90 minutes",
      replay: true,
      gratuit: true,
      prix: 0
    },
    {
      titre: "Sécurité IA : Bonnes Pratiques et Conformité",
      date: "4 Juin 2024",
      participants: 290,
      satisfaction: 4.8,
      duree: "75 minutes",
      replay: true,
      gratuit: false,
      prix: 29
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Video className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Webinaires IA
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Rejoignez nos experts pour des sessions live interactives sur l'intelligence artificielle. 
            Formation, démonstrations et échanges en direct.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Voir le planning
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Prochains Webinaires</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {webinairesAVenir.map((webinaire, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={webinaire.image} 
                    alt={webinaire.titre}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={webinaire.gratuit ? "bg-green-500" : "bg-blue-500"}>
                      {webinaire.gratuit ? "Gratuit" : `${webinaire.prix}€`}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white text-gray-800">
                      {webinaire.niveau}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{webinaire.titre}</CardTitle>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {webinaire.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {webinaire.heure}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{webinaire.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Programme :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {webinaire.programme.map((item, progIndex) => (
                        <li key={progIndex} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {webinaire.participants}/{webinaire.maxParticipants}
                    </div>
                    <div className="text-gray-500">{webinaire.duree}</div>
                  </div>
                  
                  <div className="border-t pt-4 mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>Intervenant :</strong> {webinaire.intervenant}
                    </p>
                    <p className="text-xs text-gray-500">{webinaire.posteIntervenant}</p>
                  </div>
                  
                  <Button 
                    className={`w-full ${webinaire.gratuit ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                  >
                    {webinaire.participants >= webinaire.maxParticipants ? 'Complet - Liste d\'attente' : 'S\'inscrire maintenant'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Replays Disponibles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinairesPassés.map((webinaire, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={webinaire.gratuit ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                      {webinaire.gratuit ? "Gratuit" : `${webinaire.prix}€`}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 mr-1" />
                      {webinaire.satisfaction}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{webinaire.titre}</CardTitle>
                  <p className="text-sm text-gray-600">{webinaire.date} • {webinaire.duree}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {webinaire.participants} participants
                    </div>
                    <div className="flex items-center">
                      <Play className="h-4 w-4 mr-1" />
                      Replay
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    asChild
                  >
                    <Link to={webinaire.gratuit ? "#" : "/contact"}>
                      {webinaire.gratuit ? "Voir le replay" : "Accéder au replay"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Organiser un Webinaire Sur-Mesure</h2>
            <p className="text-lg text-gray-600 mb-8">
              Besoin d'une formation spécifique pour votre équipe ? Nous organisons des webinaires 
              privés adaptés à vos besoins et votre secteur d'activité.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Équipe Dédiée</h3>
                <p className="text-gray-600 text-sm">Formation privée pour votre équipe uniquement</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Contenu Personnalisé</h3>
                <p className="text-gray-600 text-sm">Programme adapté à vos besoins spécifiques</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Horaires Flexibles</h3>
                <p className="text-gray-600 text-sm">Planification selon votre agenda</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link to="/contact">
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinaires;
