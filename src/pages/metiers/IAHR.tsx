
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Search, Brain, TrendingUp, CheckCircle, Target, Calendar, MessageSquare, Award } from "lucide-react";

const IAHR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour RH</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transformez vos ressources humaines avec l'IA : recrutement intelligent, 
            gestion des talents et analyse prédictive RH pour optimiser votre capital humain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Optimiser mes RH
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Voir les bénéfices
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA pour RH</h2>
          
          <Tabs defaultValue="recrutement" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="recrutement">Recrutement</TabsTrigger>
              <TabsTrigger value="talents">Gestion Talents</TabsTrigger>
              <TabsTrigger value="formation">Formation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics RH</TabsTrigger>
            </TabsList>

            <TabsContent value="recrutement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-6 w-6 text-blue-600" />
                    Recrutement Intelligent
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA révolutionne le recrutement en automatisant le sourcing, le screening et l'évaluation des candidats 
                    pour identifier les meilleurs talents plus rapidement.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Sourcing automatisé
                      </h4>
                      <p className="text-sm text-gray-600">Identification proactive des candidats potentiels</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Screening IA
                      </h4>
                      <p className="text-sm text-gray-600">Évaluation automatique des CV et compétences</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Résultats mesurés :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 70% de réduction du temps de recrutement</li>
                      <li>• 85% d'amélioration de la qualité des candidats</li>
                      <li>• 60% de réduction des coûts de recrutement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="talents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Gestion des Talents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Optimisez le développement et la rétention de vos talents grâce à l'analyse prédictive 
                    et aux recommandations personnalisées.
                  </p>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Award className="h-4 w-4 mr-2" />
                      Détection des hauts potentiels
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Prédiction du turnover
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Planification des carrières
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="formation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-blue-600" />
                    Formation Personnalisée
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA analyse les compétences et besoins de chaque employé pour recommander 
                    des formations personnalisées et optimiser le développement des compétences.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Analyse Skills</h4>
                      <p className="text-sm text-gray-600">Évaluation des compétences</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Recommandations</h4>
                      <p className="text-sm text-gray-600">Formations sur mesure</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Suivi Progrès</h4>
                      <p className="text-sm text-gray-600">Mesure de l'efficacité</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    Analytics RH Avancés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Transformez vos données RH en insights actionnables avec des tableaux de bord 
                    intelligents et des analyses prédictives.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Prédiction d'engagement</span>
                      <span className="text-sm text-blue-600 font-semibold">95% précision</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Analyse de la performance</span>
                      <span className="text-sm text-blue-600 font-semibold">Temps réel</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Optimisation des équipes</span>
                      <span className="text-sm text-blue-600 font-semibold">+40% efficacité</span>
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

export default IAHR;
