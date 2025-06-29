
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users, MessageSquare, BarChart, Zap, Eye, Brain } from "lucide-react";

const FormationIAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Marketing</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos stratégies marketing avec l'intelligence artificielle.
            Personnalisation, automation et optimisation data-driven.
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            📊 MarTech AI Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Segmentation IA</h3>
              <p className="text-sm text-gray-600">Ciblage intelligent des audiences</p>
            </Card>
            <Card className="text-center p-6">
              <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Contenu Personnalisé</h3>
              <p className="text-sm text-gray-600">Génération automatique de contenu</p>
            </Card>
            <Card className="text-center p-6">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Avancés</h3>
              <p className="text-sm text-gray-600">Insights prédictifs</p>
            </Card>
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Automation</h3>
              <p className="text-sm text-gray-600">Campagnes automatisées</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Programme de Formation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  Module 1: IA Customer Analytics
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse comportementale avancée et segmentation intelligente
                  des clients avec machine learning et deep learning.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Customer Journey Mapping IA</li>
                  <li>• Clustering comportemental</li>
                  <li>• Lifetime Value prédictif</li>
                  <li>• Churn prediction</li>
                  <li>• Recommandation personnalisée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Analytics</Badge>
                  <Badge variant="outline">Segmentation</Badge>
                  <Badge variant="outline">Prediction</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
                  Module 2: Génération de Contenu IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Création automatisée de contenu marketing personnalisé
                  avec GPT, DALL-E et outils génératifs avancés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Rédaction automatique d'articles</li>
                  <li>• Génération d'images marketing</li>
                  <li>• Personnalisation à l'échelle</li>
                  <li>• A/B testing automatisé</li>
                  <li>• Optimisation SEO par IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Content AI</Badge>
                  <Badge variant="outline">GPT</Badge>
                  <Badge variant="outline">Image Gen</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-purple-600 mr-2" />
                  Module 3: Publicité Programmique IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisation des campagnes publicitaires avec algorithmes
                  d'enchères automatiques et ciblage intelligent.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Real-time bidding optimization</li>
                  <li>• Lookalike audiences IA</li>
                  <li>• Attribution modeling avancé</li>
                  <li>• Budget allocation automatique</li>
                  <li>• Cross-channel optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Programmatic</Badge>
                  <Badge variant="outline">RTB</Badge>
                  <Badge variant="outline">Attribution</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
                  Module 4: Marketing Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  Orchestration intelligente des parcours clients avec
                  workflows adaptatifs et déclencheurs comportementaux.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Lead scoring prédictif</li>
                  <li>• Email marketing intelligent</li>
                  <li>• Nurturing automatisé</li>
                  <li>• Chatbots conversationnels</li>
                  <li>• Social media automation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Lead Scoring</Badge>
                  <Badge variant="outline">Chatbots</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez votre Marketing</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les outils IA les plus avancés pour créer des campagnes
              marketing ultra-performantes et personnalisées à grande échelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Target className="mr-2 h-5 w-5" />
                S'inscrire à la Formation
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                Programme Détaillé
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
