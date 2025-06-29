
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Users, Zap, BarChart, MessageSquare, Eye, Heart, Share, Search, Mail, Smartphone, Camera, Video } from "lucide-react";

const FormationIAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Marketing</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos campagnes marketing avec l'intelligence artificielle.
            Personnalisation, automation et optimisation des performances.
          </p>
          <Badge variant="secondary" className="bg-rose-500/30 text-white px-4 py-2 text-lg mb-6">
            📊 Marketing AI Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Ciblage Intelligent</h3>
              <p className="text-sm text-gray-600">Audiences optimisées par IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Contenu Automatisé</h3>
              <p className="text-sm text-gray-600">Génération de contenu IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Prédictifs</h3>
              <p className="text-sm text-gray-600">ROI optimisé par ML</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Personnalisation</h3>
              <p className="text-sm text-gray-600">Expérience sur mesure</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Marketing IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  Ciblage et Segmentation IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les algorithmes de segmentation client et de ciblage
                  publicitaire pour maximiser vos conversions.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Clustering avancé de clients</li>
                  <li>• Lookalike audiences automatisées</li>
                  <li>• Scoring de propension d'achat</li>
                  <li>• Optimization multi-objectifs</li>
                  <li>• Attribution modeling IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Customer Segmentation</Badge>
                  <Badge variant="outline">Propensity Scoring</Badge>
                  <Badge variant="outline">Attribution</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
                  Génération de Contenu IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisez la création de contenu marketing avec GPT,
                  DALL-E et les derniers modèles génératifs.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Copywriting automatisé</li>
                  <li>• Génération d'images marketing</li>
                  <li>• A/B testing de contenu IA</li>
                  <li>• Personnalisation à grande échelle</li>
                  <li>• Video content generation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GPT Content</Badge>
                  <Badge variant="outline">DALL-E</Badge>
                  <Badge variant="outline">Auto Generation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-purple-600 mr-2" />
                  Analytics et Prédiction
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'IA pour analyser et prédire les performances
                  de vos campagnes marketing en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction de LTV client</li>
                  <li>• Forecasting des ventes</li>
                  <li>• Marketing mix modeling</li>
                  <li>• Churn prediction avancée</li>
                  <li>• ROI optimization en temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">LTV Prediction</Badge>
                  <Badge variant="outline">Marketing Mix</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Smartphone className="h-6 w-6 text-orange-600 mr-2" />
                  Automation Marketing IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des workflows marketing automatisés intelligents
                  qui s'adaptent au comportement de vos prospects.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Email marketing intelligent</li>
                  <li>• Lead scoring automatisé</li>
                  <li>• Chatbots conversationnels</li>
                  <li>• Nurturing sequences adaptatives</li>
                  <li>• Cross-channel orchestration</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Marketing Automation</Badge>
                  <Badge variant="outline">Lead Scoring</Badge>
                  <Badge variant="outline">Chatbots</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Outils Marketing IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Google Ads AI</h3>
                <p className="text-sm text-gray-600">Smart bidding avancé</p>
              </Card>
              <Card className="p-6 text-center">
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">HubSpot AI</h3>
                <p className="text-sm text-gray-600">Automation intelligente</p>
              </Card>
              <Card className="p-6 text-center">
                <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Canva AI</h3>
                <p className="text-sm text-gray-600">Design automatisé</p>
              </Card>
              <Card className="p-6 text-center">
                <Video className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Loom AI</h3>
                <p className="text-sm text-gray-600">Vidéo marketing IA</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez votre Marketing</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies IA marketing les plus avancées pour
              créer des campagnes performantes et personnalisées à grande échelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <TrendingUp className="mr-2 h-5 w-5" />
                Commencer la Formation
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                ROI Calculator IA
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
