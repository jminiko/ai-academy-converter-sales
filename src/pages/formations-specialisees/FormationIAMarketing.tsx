
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users, MessageSquare, BarChart, Eye, Zap, Globe, Brain, Cpu, Monitor, Database } from "lucide-react";

const FormationIAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Marketing</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intelligence artificielle pour le marketing digital.
            Personnalisation, automation et analyse prédictive des campagnes.
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            📈 MarTech AI Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Segmentation Client</h3>
              <p className="text-sm text-gray-600">Ciblage intelligent IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Chatbots Marketing</h3>
              <p className="text-sm text-gray-600">Conversation automatisée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Prédictives</h3>
              <p className="text-sm text-gray-600">Prévision performance</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Personnalisation</h3>
              <p className="text-sm text-gray-600">Expérience sur-mesure</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Marketing IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  Customer Intelligence IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez l'analyse comportementale client avec des modèles IA
                  pour la segmentation et le ciblage personnalisé.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Customer lifetime value prediction</li>
                  <li>• Behavioral segmentation ML</li>
                  <li>• Churn prediction modeling</li>
                  <li>• Next best action algorithms</li>
                  <li>• Real-time personalization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Customer Analytics</Badge>
                  <Badge variant="outline">Segmentation</Badge>
                  <Badge variant="outline">Churn Prediction</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
                  Conversational Marketing IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des chatbots et assistants marketing intelligents
                  pour l'engagement client et la génération de leads.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chatbot design et développement</li>
                  <li>• Natural language processing</li>
                  <li>• Intent recognition avancée</li>
                  <li>• Voice marketing automation</li>
                  <li>• Conversational commerce</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chatbots</Badge>
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">Voice Marketing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-purple-600 mr-2" />
                  Marketing Analytics IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez vos campagnes avec des modèles prédictifs
                  et l'analyse avancée des données marketing.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Attribution modeling avancé</li>
                  <li>• Campaign performance prediction</li>
                  <li>• A/B testing automatisé</li>
                  <li>• Marketing mix modeling</li>
                  <li>• ROI optimization algorithms</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">Attribution</Badge>
                  <Badge variant="outline">Campaign Optimization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-orange-600 mr-2" />
                  Programmatic & AdTech IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez l'achat média programmatique et l'optimisation
                  publicitaire avec l'intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Real-time bidding algorithms</li>
                  <li>• Audience targeting IA</li>
                  <li>• Creative optimization</li>
                  <li>• Fraud detection publicitaire</li>
                  <li>• Cross-channel attribution</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Programmatic</Badge>
                  <Badge variant="outline">RTB</Badge>
                  <Badge variant="outline">AdTech</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies MarTech IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600">Modèles prédictifs</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Marketing Automation</h3>
                <p className="text-sm text-gray-600">Workflows intelligents</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">CDP & DMP</h3>
                <p className="text-sm text-gray-600">Données unifiées</p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Real-time Processing</h3>
                <p className="text-sm text-gray-600">Décisions instantanées</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez le Marketing</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies IA marketing les plus avancées pour
              créer des campagnes personnalisées et performantes à grande échelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Target className="mr-2 h-5 w-5" />
                Commencer la Formation
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                ROI Calculator Marketing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAMarketing;
