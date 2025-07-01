
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, Settings, Target, TrendingUp, Clock, Workflow, ArrowRight } from "lucide-react";

const FormationAutomatisationRPA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Automatisation RPA</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'automatisation des processus robotiques pour transformer votre entreprise
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🤖 Robotic Process Automation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Workflow className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Workflows Intelligents</h3>
              <p className="text-sm text-gray-600">Automatisation complète</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gain de Temps</h3>
              <p className="text-sm text-gray-600">Efficacité maximale</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Précision Parfaite</h3>
              <p className="text-sm text-gray-600">Zéro erreur humaine</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">ROI Immédiat</h3>
              <p className="text-sm text-gray-600">Retour sur investissement</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Programme Complet RPA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-blue-600 mr-2" />
                  Fondamentaux RPA
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprenez les principes fondamentaux de l'automatisation robotique
                  et identifiez les opportunités d'automatisation dans votre entreprise.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Introduction aux concepts RPA</li>
                  <li>• Identification des processus automatisables</li>
                  <li>• Cartographie des workflows existants</li>
                  <li>• Analyse coût-bénéfice de l'automatisation</li>
                  <li>• Stratégie de déploiement RPA</li>
                  <li>• Gouvernance et bonnes pratiques</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Process Mining</Badge>
                  <Badge variant="outline">Workflow Analysis</Badge>
                  <Badge variant="outline">ROI Calculation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-indigo-600 mr-2" />
                  Outils RPA Avancés
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les principales plateformes RPA du marché
                  et développez vos premiers bots automatisés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• UiPath Studio et Orchestrator</li>
                  <li>• Automation Anywhere Enterprise</li>
                  <li>• Blue Prism Digital Workforce</li>
                  <li>• Microsoft Power Automate</li>
                  <li>• Zapier et intégrations no-code</li>
                  <li>• Développement de bots personnalisés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">UiPath</Badge>
                  <Badge variant="outline">Power Automate</Badge>
                  <Badge variant="outline">Blue Prism</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-purple-600 mr-2" />
                  IA et RPA Intelligent
                </h3>
                <p className="text-gray-600 mb-4">
                  Intégrez l'intelligence artificielle dans vos processus RPA
                  pour créer des automatisations cognitives avancées.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• OCR et reconnaissance de documents</li>
                  <li>• Traitement du langage naturel (NLP)</li>
                  <li>• Computer Vision pour l'automatisation</li>
                  <li>• Machine Learning prédictif</li>
                  <li>• Chatbots et assistants virtuels</li>
                  <li>• Automatisation cognitive avancée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Intelligent Automation</Badge>
                  <Badge variant="outline">OCR</Badge>
                  <Badge variant="outline">Cognitive RPA</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Cas d'Usage Métiers
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez des cas d'usage concrets d'automatisation RPA
                  dans différents secteurs et fonctions d'entreprise.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Automatisation comptable et financière</li>
                  <li>• Gestion des ressources humaines</li>
                  <li>• Service client et support</li>
                  <li>• Processus de commande et facturation</li>
                  <li>• Conformité et reporting automatisés</li>
                  <li>• Intégration de systèmes legacy</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Finance Automation</Badge>
                  <Badge variant="outline">HR Processes</Badge>
                  <Badge variant="outline">Customer Service</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-6">Méthodologie Projet RPA</h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
                <h4 className="font-semibold text-sm">Découverte</h4>
                <p className="text-xs text-gray-600">Analyse des processus</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
                <h4 className="font-semibold text-sm">Conception</h4>
                <p className="text-xs text-gray-600">Design des workflows</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
                <h4 className="font-semibold text-sm">Développement</h4>
                <p className="text-xs text-gray-600">Création des bots</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">4</div>
                <h4 className="font-semibold text-sm">Tests</h4>
                <p className="text-xs text-gray-600">Validation et debug</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">5</div>
                <h4 className="font-semibold text-sm">Déploiement</h4>
                <p className="text-xs text-gray-600">Mise en production</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez Votre Entreprise</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'automatisation RPA révolutionne la façon de travailler en libérant
              vos équipes des tâches répétitives pour se concentrer sur la valeur ajoutée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Bot className="mr-2 h-5 w-5" />
                Démarrer la Formation RPA
              </Button>
              <Button size="lg" variant="outline">
                <ArrowRight className="mr-2 h-5 w-5" />
                Voir les Cas d'Usage
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationAutomatisationRPA;
