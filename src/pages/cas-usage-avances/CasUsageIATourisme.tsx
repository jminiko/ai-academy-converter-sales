
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Camera, Users, Star, TrendingUp, MessageCircle, Globe } from "lucide-react";

const CasUsageIATourisme = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Plane className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Cas d'Usage IA Tourisme</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Explorez comment l'intelligence artificielle révolutionne l'industrie du tourisme.
            Personnalisation, optimisation et expériences immersives.
          </p>
          <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2 text-lg mb-6">
            ✈️ Travel Tech Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Révolution IA dans le Tourisme</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-cyan-600 mb-2" />
                  <CardTitle>Recommandations Personnalisées</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Suggestions de destinations et activités sur-mesure</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Concierge IA 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Assistant virtuel multilingue intelligent</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Pricing Dynamique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Optimisation des prix en temps réel</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Camera className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Reconnaissance Visuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Identification de lieux et monuments</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Analyse Comportementale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Compréhension des préférences voyageurs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle>Traduction Instantanée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Communication sans barrières linguistiques</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Cas d'Usage Emblématiques</h2>
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <MapPin className="h-12 w-12 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Recommandation Hyper-Personnalisée - Booking.com</h3>
                    <p className="text-gray-600 mb-4">
                      Booking.com utilise des algorithmes d'IA avancés pour analyser le comportement de plus de 
                      1,5 milliard de visiteurs et proposer des recommandations personnalisées en temps réel.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">🎯 Données Analysées</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Historique de recherches et réservations</li>
                          <li>• Préférences de prix et localisation</li>
                          <li>• Saisonnalité des voyages</li>
                          <li>• Feedback et évaluations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">📊 Résultats</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• +30% de taux de conversion</li>
                          <li>• -45% temps de recherche</li>
                          <li>• +25% satisfaction client</li>
                          <li>• 1,5M+ réservations/jour</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">Personalization</Badge>
                      <Badge variant="outline">Recommendation Engine</Badge>
                      <Badge variant="outline">Real-time Analytics</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Concierge IA Multilingue - Marriott Hotels</h3>
                    <p className="text-gray-600 mb-4">
                      Marriott a déployé des assistants IA conversationnels dans ses hôtels pour offrir 
                      un service client 24/7 en 30+ langues avec des recommandations locales personnalisées.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">🤖 Capacités</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Service room 24/7 sans intervention humaine</li>
                          <li>• Recommandations restaurants & activités</li>
                          <li>• Gestion des réservations et réclamations</li>
                          <li>• Information transport et météo locale</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">💡 Impact</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 87% de résolution en première interaction</li>
                          <li>• -60% temps de réponse moyen</li>
                          <li>• +40% satisfaction service client</li>
                          <li>• Économies de 2M$/an en personnel</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">NLP</Badge>
                      <Badge variant="outline">Multilingual</Badge>
                      <Badge variant="outline">Voice Assistant</Badge>
                      <Badge variant="outline">Customer Service</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-12 w-12 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Pricing Dynamique IA - Airbnb</h3>
                    <p className="text-gray-600 mb-4">
                      Airbnb utilise l'IA pour optimiser les prix de 7+ millions de logements en temps réel, 
                      en analysant 130+ facteurs pour maximiser les revenus des hôtes et l'accessibilité.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">📈 Facteurs Analysés</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Demande locale et saisonnalité</li>
                          <li>• Événements et festivals régionaux</li>
                          <li>• Concurrence et prix du marché</li>
                          <li>• Caractéristiques du logement</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">🎯 Bénéfices</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• +13% revenus moyens hôtes</li>
                          <li>• +9% taux d'occupation</li>
                          <li>• Optimisation en temps réel</li>
                          <li>• Recommendations automatiques</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Dynamic Pricing</Badge>
                      <Badge variant="outline">Revenue Optimization</Badge>
                      <Badge variant="outline">Market Analysis</Badge>
                      <Badge variant="outline">Demand Forecasting</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Camera className="h-12 w-12 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Guide Touristique IA - Google Lens & Travel</h3>
                    <p className="text-gray-600 mb-4">
                      Google intègre la reconnaissance visuelle dans ses services travel pour identifier 
                      monuments, restaurants et points d'intérêt en temps réel via la caméra smartphone.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">👁️ Reconnaissance</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Monuments et architecture historique</li>
                          <li>• Menus restaurants et traduction</li>
                          <li>• Panneaux et signalisations</li>
                          <li>• Œuvres d'art et expositions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">📱 Fonctionnalités</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Information contextuelle instantanée</li>
                          <li>• Traduction visuelle en temps réel</li>
                          <li>• Recommandations similaires</li>
                          <li>• Intégration Maps & Reviews</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">AR/VR</Badge>
                      <Badge variant="outline">Real-time Translation</Badge>
                      <Badge variant="outline">Visual Search</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies IA en Tourisme</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Behavioral Analytics</h3>
                <p className="text-sm text-gray-600">Analyse des préférences voyageurs</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Conversational AI</h3>
                <p className="text-sm text-gray-600">Assistants virtuels multilingues</p>
              </div>
              <div className="text-center">
                <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Computer Vision</h3>
                <p className="text-sm text-gray-600">Reconnaissance d'images et AR</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Predictive Analytics</h3>
                <p className="text-sm text-gray-600">Optimisation et prévisions</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Innovez dans le Tourisme avec l'IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment transformer l'expérience de vos voyageurs avec des solutions IA 
              personnalisées et des technologies d'avant-garde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Plane className="mr-2 h-5 w-5" />
                Démarrer un Projet IA
              </Button>
              <Button size="lg" variant="outline">
                <MapPin className="mr-2 h-5 w-5" />
                Cas d'Usage Détaillés
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasUsageIATourisme;
