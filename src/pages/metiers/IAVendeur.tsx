
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, Target, Phone, BarChart3, Bot, Zap, CheckCircle, ArrowRight, Star, Quote } from "lucide-react";

const IAVendeur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Vendeurs</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos performances commerciales avec l'intelligence artificielle. 
            Augmentez vos ventes de 40% grâce à des outils IA personnalisés pour les professionnels de la vente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Démarrer maintenant
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-600">
              Voir la démo
            </Button>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">+40%</div>
              <div className="text-gray-600">Augmentation des ventes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">-60%</div>
              <div className="text-gray-600">Temps de prospection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">+85%</div>
              <div className="text-gray-600">Taux de conversion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-600">Suivi automatisé</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions IA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA pour Vendeurs</h2>
          
          <Tabs defaultValue="prospection" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="prospection">Prospection</TabsTrigger>
              <TabsTrigger value="prediction">Prédiction</TabsTrigger>
              <TabsTrigger value="suivi">Suivi Client</TabsTrigger>
              <TabsTrigger value="optimisation">Optimisation</TabsTrigger>
            </TabsList>

            <TabsContent value="prospection" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-cyan-600" />
                    Prospection Intelligente IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Notre IA analyse des millions de données pour identifier automatiquement vos prospects les plus qualifiés. 
                    Fini les heures perdues sur des leads froids !
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Identification automatique
                      </h4>
                      <p className="text-sm text-gray-600">Analyse comportementale et scoring automatique des prospects</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Personnalisation avancée
                      </h4>
                      <p className="text-sm text-gray-600">Messages personnalisés générés par IA pour chaque prospect</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="prediction" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-cyan-600" />
                    Prédiction des Ventes IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Anticipez vos résultats avec une précision de 95%. Notre IA analyse vos pipelines et prédit 
                    vos performances futures pour optimiser votre stratégie commerciale.
                  </p>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Fonctionnalités avancées :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Prévision des revenus sur 3-12 mois</li>
                      <li>• Analyse des cycles de vente</li>
                      <li>• Identification des opportunités à risque</li>
                      <li>• Recommandations d'actions prioritaires</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="suivi" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-cyan-600" />
                    Suivi Client Automatisé
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Ne perdez plus jamais un client ! Notre système IA surveille tous vos contacts et déclenche 
                    automatiquement les bonnes actions au bon moment.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Badge variant="secondary" className="p-3 justify-start">
                      <Bot className="h-4 w-4 mr-2" />
                      Relances automatiques
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start">
                      <Zap className="h-4 w-4 mr-2" />
                      Alertes intelligentes
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start">
                      <Target className="h-4 w-4 mr-2" />
                      Segmentation avancée
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="optimisation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-cyan-600" />
                    Optimisation des Performances
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Maximisez votre potentiel avec des analyses en temps réel et des recommandations personnalisées 
                    basées sur vos données de performance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Analyse des appels</span>
                      <ArrowRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Coaching IA personnalisé</span>
                      <ArrowRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Optimisation des argumentaires</span>
                      <ArrowRight className="h-4 w-4 text-cyan-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-cyan-600 mb-4" />
                <p className="text-gray-600 mb-4">
                  "Grâce à l'IA, j'ai doublé mes ventes en 6 mois. La prospection automatisée m'a fait gagner 20h par semaine !"
                </p>
                <div className="font-semibold">Marie Dubois</div>
                <div className="text-sm text-gray-500">Commerciale Senior, TechCorp</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-cyan-600 mb-4" />
                <p className="text-gray-600 mb-4">
                  "L'analyse prédictive m'aide à me concentrer sur les bonnes opportunités. Mon taux de conversion a augmenté de 85% !"
                </p>
                <div className="font-semibold">Jean Martin</div>
                <div className="text-sm text-gray-500">Directeur Commercial, InnovatePlus</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-cyan-600 mb-4" />
                <p className="text-gray-600 mb-4">
                  "Le suivi automatisé des clients est révolutionnaire. Plus aucune opportunité ne m'échappe maintenant !"
                </p>
                <div className="font-semibold">Sophie Laurent</div>
                <div className="text-sm text-gray-500">Account Manager, SalesPro</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à révolutionner vos ventes ?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 5000 vendeurs qui ont déjà transformé leur performance avec notre IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Essai gratuit 14 jours
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-600">
              Planifier une démo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAVendeur;
