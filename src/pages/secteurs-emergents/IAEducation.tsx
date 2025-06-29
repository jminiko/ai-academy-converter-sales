
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Brain, Target, BarChart, MessageSquare, Monitor, Gamepad2, Globe, Zap, Settings } from "lucide-react";

const IAEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Éducation</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'éducation avec l'intelligence artificielle.
            Apprentissage personnalisé, tuteurs virtuels et évaluation automatisée.
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            🎓 EdTech AI Revolution
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Apprentissage Adaptatif</h3>
              <p className="text-sm text-gray-600">Parcours personnalisés IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Tuteurs Virtuels</h3>
              <p className="text-sm text-gray-600">Assistance 24/7 intelligente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Pédagogiques</h3>
              <p className="text-sm text-gray-600">Données d'apprentissage</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Évaluation Automatisée</h3>
              <p className="text-sm text-gray-600">Correction intelligente</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Éducation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  Apprentissage Personnalisé IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des parcours d'apprentissage adaptatifs qui s'ajustent
                  automatiquement au niveau et au style d'apprentissage de chaque étudiant.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Adaptive learning algorithms</li>
                  <li>• Learning style detection</li>
                  <li>• Difficulty adjustment automatique</li>
                  <li>• Recommandations de contenu</li>
                  <li>• Progress tracking intelligent</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Adaptive Learning</Badge>
                  <Badge variant="outline">Personalization</Badge>
                  <Badge variant="outline">Recommendation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
                  Tuteurs Virtuels Intelligents
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des assistants pédagogiques IA capables de répondre
                  aux questions et guider les étudiants dans leur apprentissage.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chatbots pédagogiques avancés</li>
                  <li>• Natural language understanding</li>
                  <li>• Socratic method implementation</li>
                  <li>• Multi-language support</li>
                  <li>• Voice-enabled interactions</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Virtual Tutors</Badge>
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">Conversational AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-purple-600 mr-2" />
                  Évaluation & Feedback IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisez l'évaluation et fournissez un feedback instantané
                  et constructif pour améliorer l'apprentissage.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Automated essay scoring</li>
                  <li>• Code evaluation automatique</li>
                  <li>• Plagiarism detection avancée</li>
                  <li>• Instant feedback generation</li>
                  <li>• Rubric-based assessment</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Auto Assessment</Badge>
                  <Badge variant="outline">Feedback AI</Badge>
                  <Badge variant="outline">Code Evaluation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-orange-600 mr-2" />
                  Learning Analytics & Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Analysez les données d'apprentissage pour identifier les
                  difficultés et optimiser les méthodes pédagogiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Student performance analytics</li>
                  <li>• Learning pattern recognition</li>
                  <li>• Early intervention alerts</li>
                  <li>• Curriculum effectiveness analysis</li>
                  <li>• Predictive dropout modeling</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Learning Analytics</Badge>
                  <Badge variant="outline">Predictive Modeling</Badge>
                  <Badge variant="outline">Performance Tracking</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies EdTech IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Content Generation</h3>
                <p className="text-sm text-gray-600">Création automatique</p>
              </Card>
              <Card className="p-6 text-center">
                <Gamepad2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Gamification IA</h3>
                <p className="text-sm text-gray-600">Apprentissage ludique</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">VR/AR Learning</h3>
                <p className="text-sm text-gray-600">Immersion éducative</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">LMS Intelligent</h3>
                <p className="text-sm text-gray-600">Plateformes adaptatives</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez l'Éducation</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Révolutionnez l'apprentissage avec l'IA : personnalisation à grande échelle,
              efficacité pédagogique et accessibilité universelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <GraduationCap className="mr-2 h-5 w-5" />
                Solutions IA Éducation
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                Métriques Apprentissage
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAEducation;
