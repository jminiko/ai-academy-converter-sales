
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, MapPin, Calendar, Users, Star, MessageSquare, Camera, TrendingUp, Bot } from "lucide-react";

const IATourisme = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Plane className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour le Tourisme</h1>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'expérience touristique avec l'IA : recommandations personnalisées, 
            assistants virtuels et optimisation des prix pour un tourisme intelligent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              Transformer mon offre
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-sky-600">
              Voir les innovations
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Tourisme</h2>
          
          <Tabs defaultValue="personnalisation" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="personnalisation">Personnalisation</TabsTrigger>
              <TabsTrigger value="assistant">Assistant IA</TabsTrigger>
              <TabsTrigger value="pricing">Pricing Dynamique</TabsTrigger>
              <TabsTrigger value="experience">Expérience</TabsTrigger>
            </TabsList>

            <TabsContent value="personnalisation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-sky-600" />
                    Recommandations Personnalisées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA analyse les préférences de vos clients pour recommander des destinations, 
                    activités et hébergements parfaitement adaptés à leurs goûts et budget.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Destinations intelligentes</Badge>
                      <p className="text-sm text-gray-600">Suggestions basées sur l'historique et les préférences</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Itinéraires optimisés</Badge>
                      <p className="text-sm text-gray-600">Planification automatique des voyages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assistant" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-sky-600" />
                    Assistant Virtuel Tourisme
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Chatbot IA multilingue disponible 24/7 pour guider vos clients, 
                    répondre aux questions et effectuer des réservations en temps réel.
                  </p>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Support multilingue 24/7
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Réservations automatisées
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Guide touristique virtuel
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-sky-600" />
                    Pricing Dynamique IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Optimisez vos revenus avec des prix dynamiques ajustés en temps réel 
                    selon la demande, la concurrence et les événements locaux.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Revenus</h4>
                      <p className="text-sm text-gray-600">+35% d'augmentation</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Users className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Occupation</h4>
                      <p className="text-sm text-gray-600">95% taux moyen</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Star className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Satisfaction</h4>
                      <p className="text-sm text-gray-600">4.8/5 étoiles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-6 w-6 text-sky-600" />
                    Expérience Immersive
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Créez des expériences touristiques uniques avec la réalité augmentée, 
                    visites virtuelles et reconnaissance d'images pour enrichir le voyage.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Réalité augmentée</span>
                      <span className="text-sm text-sky-600 font-semibold">Guides interactifs</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Reconnaissance visuelle</span>
                      <span className="text-sm text-sky-600 font-semibold">Infos instantanées</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Visites virtuelles</span>
                      <span className="text-sm text-sky-600 font-semibold">Expérience 360°</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IATourisme;
