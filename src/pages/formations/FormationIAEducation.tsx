
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Brain, Target, Lightbulb, Monitor, Graduation Cap, Star } from "lucide-react";

const FormationIAEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Graduation Cap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA dans l'Éducation</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'apprentissage avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            🎓 Educational AI & EdTech
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Apprentissage Adaptatif</h3>
              <p className="text-sm text-gray-600">Personnalisation pédagogique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Tutoring Intelligent</h3>
              <p className="text-sm text-gray-600">Assistance 24/7</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Évaluation Automatique</h3>
              <p className="text-sm text-gray-600">Feedback instantané</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gamification IA</h3>
              <p className="text-sm text-gray-600">Engagement optimal</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA pour l'Éducation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                  Apprentissage Personnalisé
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des parcours d'apprentissage adaptatifs qui s'ajustent
                  au niveau et au style d'apprentissage de chaque élève.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Adaptive learning algorithms</li>
                  <li>• Learning path optimization</li>
                  <li>• Knowledge gap identification</li>
                  <li>• Cognitive load management</li>
                  <li>• Multi-modal content delivery</li>
                  <li>• Progress tracking et analytics</li>
                  <li>• Recommandation de ressources</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Adaptive Learning</Badge>
                  <Badge variant="outline">Personalization</Badge>
                  <Badge variant="outline">Learning Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Tuteurs Virtuels Intelligents
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des assistants pédagogiques IA capables
                  d'accompagner et guider les apprenants individuellement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Conversational AI pour l'éducation</li>
                  <li>• Natural language understanding</li>
                  <li>• Socratic questioning techniques</li>
                  <li>• Emotional intelligence in tutoring</li>
                  <li>• Multi-domain knowledge bases</li>
                  <li>• Interactive problem solving</li>
                  <li>• Scaffolding et hints generation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Intelligent Tutoring</Badge>
                  <Badge variant="outline">Conversational AI</Badge>
                  <Badge variant="outline">Knowledge Engineering</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Évaluation et Assessment
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisez l'évaluation des apprentissages avec des
                  systèmes d'assessment intelligents et objectifs.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Automated essay scoring</li>
                  <li>• Code assessment et debugging</li>
                  <li>• Plagiarism detection avancée</li>
                  <li>• Formative assessment continu</li>
                  <li>• Competency-based evaluation</li>
                  <li>• Peer assessment facilitation</li>
                  <li>• Rubric-based grading automation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Automated Assessment</Badge>
                  <Badge variant="outline">NLP Evaluation</Badge>
                  <Badge variant="outline">Competency Mapping</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 text-orange-600 mr-2" />
                  Plateformes Éducatives IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Concevez des LMS intelligents qui optimisent l'expérience
                  d'apprentissage pour tous les acteurs éducatifs.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Intelligent content curation</li>
                  <li>• Predictive analytics pour décrochage</li>
                  <li>• Social learning facilitation</li>
                  <li>• Accessibility et inclusion features</li>
                  <li>• Teacher dashboard et insights</li>
                  <li>• Parent engagement tools</li>
                  <li>• Cross-platform synchronization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">EdTech Platform</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">Social Learning</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Transformation Numérique Éducative</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Apprentissage Collaboratif</h4>
                <p className="text-sm text-gray-600">IA pour faciliter les interactions</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Innovation Pédagogique</h4>
                <p className="text-sm text-gray-600">Nouvelles méthodes d'enseignement</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Résultats Mesurables</h4>
                <p className="text-sm text-gray-600">Analytics et performance tracking</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Engagement Optimisé</h4>
                <p className="text-sm text-gray-600">Motivation et rétention accrues</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'École du Futur</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme l'éducation en créant des expériences d'apprentissage
              personnalisées, engageantes et accessibles à tous les apprenants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Graduation Cap className="mr-2 h-5 w-5" />
                Formation EdTech IA
              </Button>
              <Button size="lg" variant="outline">
                <Lightbulb className="mr-2 h-5 w-5" />
                Innovations Pédagogiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAEducation;
