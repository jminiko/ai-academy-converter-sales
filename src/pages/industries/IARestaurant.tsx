
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, Users, TrendingUp, Clock, Star, Bot, Package, BarChart3, Utensils } from "lucide-react";

const IARestaurant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <ChefHat className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Restaurants</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre restaurant avec l'IA : gestion intelligente des commandes, 
            prévision de la demande et personnalisation de l'expérience client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              Moderniser mon restaurant
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600">
              Voir les bénéfices
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Restaurant</h2>
          
          <Tabs defaultValue="commandes" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="commandes">Commandes IA</TabsTrigger>
              <TabsTrigger value="prevision">Prévision</TabsTrigger>
              <TabsTrigger value="personnalisation">Personnalisation</TabsTrigger>
              <TabsTrigger value="operations">Opérations</TabsTrigger>
            </TabsList>

            <TabsContent value="commandes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-amber-600" />
                    Système de Commandes Intelligent
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Assistant IA pour prendre les commandes vocales et écrites, optimiser les files d'attente 
                    et coordonner la cuisine pour une expérience client fluide.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Commandes vocales</Badge>
                      <p className="text-sm text-gray-600">Reconnaissance vocale multilingue</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Optimisation temps</Badge>
                      <p className="text-sm text-gray-600">-40% temps d'attente moyen</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Résultats mesurés :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• +60% efficacité prise de commande</li>
                      <li>• -25% erreurs de commande</li>
                      <li>• +35% satisfaction client</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="prevision" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-amber-600" />
                    Prévision de Demande
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Anticipez la demande avec l'IA qui analyse les données historiques, météo, 
                    événements locaux pour optimiser stocks et staffing.
                  </p>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Prévision affluence quotidienne
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Package className="h-4 w-4 mr-2" />
                      Gestion stocks intelligente
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Planification personnel optimale
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personnalisation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-6 w-6 text-amber-600" />
                    Expérience Personnalisée
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Créez des expériences uniques avec des recommandations personnalisées, 
                    menus adaptatifs et service client individualisé basé sur l'IA.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Star className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Recommandations</h4>
                      <p className="text-sm text-gray-600">Plats personnalisés</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Fidélisation</h4>
                      <p className="text-sm text-gray-600">+45% clients fidèles</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Revenus</h4>
                      <p className="text-sm text-gray-600">+28% chiffre d'affaires</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="operations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-amber-600" />
                    Optimisation Opérationnelle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Streamline vos opérations avec l'IA qui coordonne cuisine, service, livraisons 
                    et maintient la qualité constante pendant les pics d'activité.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Coordination cuisine</span>
                      <span className="text-sm text-amber-600 font-semibold">Temps réel</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Gestion livraisons</span>
                      <span className="text-sm text-amber-600 font-semibold">-30% délais</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Contrôle qualité</span>
                      <span className="text-sm text-amber-600 font-semibold">98% conformité</span>
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

export default IARestaurant;
