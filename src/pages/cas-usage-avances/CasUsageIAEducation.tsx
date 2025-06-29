
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Brain, Users, BookOpen, Target, TrendingUp, MessageCircle, Award } from "lucide-react";

const CasUsageIAEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Cas d'Usage IA Éducation</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez comment l'intelligence artificielle révolutionne l'éducation.
            Personnalisation, assistance intelligente et analytics d'apprentissage.
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            📚 EdTech Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Transformations IA en Éducation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Apprentissage Adaptatif</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Personnalisation des parcours selon chaque apprenant</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Tuteur IA 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Assistant intelligent disponible en permanence</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Analytics Pédagogiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Analyse prédictive des performances d'apprentissage</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Génération de Contenu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Création automatique d'exercices et supports</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle>Évaluation Intelligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Correction automatique et feedback personnalisé</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle>Collaboration IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Formation de groupes optimaux et projets collaboratifs</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Cas d'Usage Concrets</h2>
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Brain className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Plateforme d'Apprentissage Adaptatif - Khan Academy</h3>
                    <p className="text-gray-600 mb-4">
                      Khan Academy utilise l'IA pour personnaliser l'expérience d'apprentissage de millions d'étudiants. 
                      L'algorithme adapte la difficulté et suggère des ressources basées sur les performances individuelles.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">🎯 Objectifs</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Personnaliser les parcours d'apprentissage</li>
                          <li>• Identifier les lacunes de connaissances</li>
                          <li>• Optimiser la rétention d'information</li>
                          <li>• Maintenir l'engagement des apprenants</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">📊 Résultats</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• +35% d'amélioration des résultats</li>
                          <li>• +50% de temps d'engagement</li>
                          <li>• -40% de taux d'abandon</li>
                          <li>• 120M+ utilisateurs actifs</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">Adaptive Learning</Badge>
                      <Badge variant="outline">Personalization</Badge>
                      <Badge variant="outline">Analytics</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Assistant IA Universitaire - Georgia State University</h3>
                    <p className="text-gray-600 mb-4">
                      Mise en place de "Jill Watson", un assistant IA basé sur IBM Watson, pour répondre aux questions 
                      des étudiants 24/7 et améliorer l'expérience d'apprentissage en ligne.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">🎯 Défis Relevés</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Volume élevé de questions répétitives</li>
                          <li>• Support 24/7 impossible avec staff humain</li>
                          <li>• Temps de réponse trop longs</li>
                          <li>• Coûts de support élevés</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">📈 Impact</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 97% de précision des réponses</li>
                          <li>• Réponse instantanée 24/7</li>
                          <li>• -70% de charge sur le staff</li>
                          <li>• +60% satisfaction étudiante</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">NLP</Badge>
                      <Badge variant="outline">Chatbot</Badge>
                      <Badge variant="outline">Watson AI</Badge>
                      <Badge variant="outline">Student Support</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-12 w-12 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Analytics Prédictives - Arizona State University</h3>
                    <p className="text-gray-600 mb-4">
                      Utilisation d'algorithmes prédictifs pour identifier précocement les étudiants à risque 
                      de décrochage et mettre en place des interventions personnalisées.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">🔍 Indicateurs Analysés</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Fréquence de connexion LMS</li>
                          <li>• Temps passé sur les ressources</li>
                          <li>• Résultats aux évaluations</li>
                          <li>• Participation aux discussions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">🎯 Résultats</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• +18% taux de réussite</li>
                          <li>• -25% taux de décrochage</li>
                          <li>• Détection précoce à 85%</li>
                          <li>• ROI de 300% sur 3 ans</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Predictive Analytics</Badge>
                      <Badge variant="outline">Early Warning</Badge>
                      <Badge variant="outline">Student Success</Badge>
                      <Badge variant="outline">Intervention</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-12 w-12 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Génération de Contenu IA - McGraw-Hill ALEKS</h3>
                    <p className="text-gray-600 mb-4">
                      Système ALEKS (Assessment and Learning in Knowledge Spaces) qui génère automatiquement 
                      des exercices personnalisés et adapte le contenu selon la maîtrise de chaque concept.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-600 mb-2">⚙️ Technologies</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Théorie des espaces de connaissances</li>
                          <li>• Génération procédurale d'exercices</li>
                          <li>• Modélisation cognitive</li>
                          <li>• Diagnostic adaptatif</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-600 mb-2">📚 Domaines</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Mathématiques (K-12 à université)</li>
                          <li>• Chimie et sciences</li>
                          <li>• Statistiques</li>
                          <li>• Économie et finance</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Content Generation</Badge>
                      <Badge variant="outline">Adaptive Testing</Badge>
                      <Badge variant="outline">Knowledge Spaces</Badge>
                      <Badge variant="outline">Mathematics</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies IA en Éducation</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600">Apprentissage adaptatif et prédictions</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">NLP & Chatbots</h3>
                <p className="text-sm text-gray-600">Assistants conversationnels</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Learning Analytics</h3>
                <p className="text-sm text-gray-600">Analyse des données d'apprentissage</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Évaluation Automatique</h3>
                <p className="text-sm text-gray-600">Correction et feedback intelligents</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez l'Éducation avec l'IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment implémenter ces solutions IA dans votre institution éducative
              pour améliorer l'apprentissage et l'engagement des étudiants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <GraduationCap className="mr-2 h-5 w-5" />
                Consulter nos Experts
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="mr-2 h-5 w-5" />
                Guide d'Implémentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasUsageIAEducation;
