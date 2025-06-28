
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, TrendingUp, Mail, BarChart3, CheckCircle, Users, MessageSquare, Zap, Eye } from "lucide-react";

const IAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Marketing</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre marketing avec l'IA : personnalisation avancée, automatisation intelligente 
            et analyses prédictives pour maximiser vos performances marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Booster mon marketing
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              Voir les résultats
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Marketing</h2>
          
          <Tabs defaultValue="personnalisation" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="personnalisation">Personnalisation</TabsTrigger>
              <TabsTrigger value="automatisation">Automatisation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="contenu">Contenu IA</TabsTrigger>
            </TabsList>

            <TabsContent value="personnalisation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-purple-600" />
                    Personnalisation Avancée
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA analyse le comportement de vos clients pour créer des expériences ultra-personnalisées 
                    qui augmentent l'engagement et les conversions de 300%.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Segmentation intelligente
                      </h4>
                      <p className="text-sm text-gray-600">Création automatique de segments comportementaux</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Recommandations dynamiques
                      </h4>
                      <p className="text-sm text-gray-600">Suggestions personnalisées en temps réel</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Résultats prouvés :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• +300% d'engagement client</li>
                      <li>• +250% de taux de conversion</li>
                      <li>• +180% de valeur vie client</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automatisation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-purple-600" />
                    Automatisation Marketing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Automatisez vos campagnes marketing avec l'IA pour un ciblage précis et des messages optimisés 
                    qui s'adaptent en temps réel aux comportements clients.
                  </p>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Email marketing intelligent
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chatbots conversationnels
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Target className="h-4 w-4 mr-2" />
                      Ciblage publicitaire précis
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                    Analytics Marketing Avancés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Transformez vos données marketing en insights stratégiques avec des analyses prédictives 
                    qui optimisent vos budgets et maximisent le ROI.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">ROI Prédictif</h4>
                      <p className="text-sm text-gray-600">+95% précision</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Attribution Multi-Touch</h4>
                      <p className="text-sm text-gray-600">Analyse complète</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Optimisation Auto</h4>
                      <p className="text-sm text-gray-600">Ajustements temps réel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contenu" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                    Génération de Contenu IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Créez du contenu marketing personnalisé à grande échelle avec l'IA générative : 
                    articles, posts sociaux, emails et publicités optimisés pour chaque audience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Articles de blog optimisés SEO</span>
                      <span className="text-sm text-purple-600 font-semibold">10x plus rapide</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Posts réseaux sociaux</span>
                      <span className="text-sm text-purple-600 font-semibold">+400% engagement</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Copies publicitaires</span>
                      <span className="text-sm text-purple-600 font-semibold">+250% CTR</span>
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

export default IAMarketing;
