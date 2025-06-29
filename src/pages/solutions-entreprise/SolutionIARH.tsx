
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Search, TrendingUp, MessageSquare, Target, Brain, BarChart, Zap } from "lucide-react";

const SolutionIARH = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Solution IA RH</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos ressources humaines avec l'intelligence artificielle.
            Recrutement intelligent, gestion des talents et analytics RH.
          </p>
          <Badge variant="secondary" className="bg-rose-500/30 text-white px-4 py-2 text-lg mb-6">
            👥 HR Tech AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Recrutement IA</h3>
              <p className="text-sm text-gray-600">Sourcing et sélection automatisés</p>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gestion Talents</h3>
              <p className="text-sm text-gray-600">Développement personnalisé</p>
            </Card>
            <Card className="text-center p-6">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics RH</h3>
              <p className="text-sm text-gray-600">Insights prédictifs</p>
            </Card>
            <Card className="text-center p-6">
              <MessageSquare className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Chatbot RH</h3>
              <p className="text-sm text-gray-600">Support automatisé</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Solution RH</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Search className="h-6 w-6 text-blue-600 mr-2" />
                  Recrutement Intelligent
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisez le processus de recrutement avec IA :
                  sourcing, tri de CV, matching candidats et entretiens.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Parsing automatique des CV</li>
                  <li>• Matching compétences-poste</li>
                  <li>• Scoring prédictif candidats</li>
                  <li>• Entretiens vidéo IA</li>
                  <li>• Assessment automatisé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">CV Parsing</Badge>
                  <Badge variant="outline">Matching</Badge>
                  <Badge variant="outline">Video AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                  Gestion des Performances
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez les performances des employés avec analytics
                  prédictifs et recommandations personnalisées.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Évaluation continue 360°</li>
                  <li>• Plans de développement IA</li>
                  <li>• Prédiction des performances</li>
                  <li>• Feedback intelligent</li>
                  <li>• Recommendations formations</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Performance</Badge>
                  <Badge variant="outline">360 Feedback</Badge>
                  <Badge variant="outline">Development</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-purple-600 mr-2" />
                  People Analytics
                </h3>
                <p className="text-gray-600 mb-4">
                  Tableaux de bord et analytics avancés pour optimiser
                  les décisions RH stratégiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction turnover</li>
                  <li>• Analyse engagement</li>
                  <li>• Optimisation effectifs</li>
                  <li>• ROI formations</li>
                  <li>• Benchmarking secteur</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Turnover</Badge>
                  <Badge variant="outline">Engagement</Badge>
                  <Badge variant="outline">ROI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-pink-600 mr-2" />
                  Assistant RH Virtuel
                </h3>
                <p className="text-gray-600 mb-4">
                  Chatbot intelligent pour support employés et automatisation
                  des processus RH récurrents.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Support 24/7 employés</li>
                  <li>• Gestion congés automatisée</li>
                  <li>• FAQ RH intelligente</li>
                  <li>• Onboarding digital</li>
                  <li>• Workflow automatisés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chatbot</Badge>
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Workflow</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez vos RH</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Déployez une solution RH complète alimentée par l'IA pour optimiser
              vos processus et améliorer l'expérience employé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Users className="mr-2 h-5 w-5" />
                Démonstration Solution
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionIARH;
