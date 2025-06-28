
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, MapPin, BarChart3, Clock, CheckCircle, TrendingUp, Package, Route, Zap } from "lucide-react";

const IALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Logistique</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne logistique avec l'IA : gestion prédictive des stocks, 
            optimisation des routes et automatisation des entrepôts pour une logistique intelligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Optimiser ma logistique
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
              Voir les gains
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Logistique</h2>
          
          <Tabs defaultValue="stocks" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="stocks">Gestion Stocks</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
              <TabsTrigger value="entrepot">Entrepôt</TabsTrigger>
              <TabsTrigger value="prevision">Prévision</TabsTrigger>
            </TabsList>

            <TabsContent value="stocks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-6 w-6 text-orange-600" />
                    Gestion Intelligente des Stocks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA optimise vos niveaux de stock en analysant la demande, les tendances saisonnières 
                    et les délais d'approvisionnement pour réduire les coûts de 30%.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Prévision de demande
                      </h4>
                      <p className="text-sm text-gray-600">Anticipation précise des besoins clients</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Réapprovisionnement auto
                      </h4>
                      <p className="text-sm text-gray-600">Commandes automatiques optimisées</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Bénéfices mesurés :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• -30% coûts de stockage</li>
                      <li>• -50% ruptures de stock</li>
                      <li>• +25% rotation des stocks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transport" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Route className="h-6 w-6 text-orange-600" />
                    Optimisation Transport
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Optimisez vos routes de livraison en temps réel avec l'IA qui prend en compte 
                    le trafic, la météo et les contraintes pour réduire les coûts de transport.
                  </p>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Routage intelligent dynamique
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Clock className="h-4 w-4 mr-2" />
                      Planification optimale des tournées
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Truck className="h-4 w-4 mr-2" />
                      Gestion de flotte intelligente
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="entrepot" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-orange-600" />
                    Entrepôt Intelligent
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Automatisez et optimisez vos opérations d'entrepôt avec l'IA : gestion des emplacements, 
                    picking optimal et coordination robotique pour une efficacité maximale.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Package className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Picking Optimal</h4>
                      <p className="text-sm text-gray-600">+60% productivité</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Slotting IA</h4>
                      <p className="text-sm text-gray-600">Placement optimisé</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Automatisation</h4>
                      <p className="text-sm text-gray-600">Robots coordonnés</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="prevision" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                    Prévisions Avancées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Anticipez les tendances logistiques avec des prévisions IA multicritères qui intègrent 
                    données internes, externes et signaux faibles pour une planification optimale.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Prévision demande saisonnière</span>
                      <span className="text-sm text-orange-600 font-semibold">98% précision</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Anticipation des pics</span>
                      <span className="text-sm text-orange-600 font-semibold">3 semaines à l'avance</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Optimisation capacités</span>
                      <span className="text-sm text-orange-600 font-semibold">+35% efficacité</span>
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

export default IALogistique;
