
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Calculator, BarChart3, Target, Zap, Brain, Users } from "lucide-react";

const Finance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour la Finance</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos services financiers avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-green-500/30 text-white px-4 py-2 text-lg mb-6">
            💰 FinTech Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Fraude</h3>
              <p className="text-sm text-gray-600">Sécurité renforcée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Scoring Crédit</h3>
              <p className="text-sm text-gray-600">Évaluation intelligente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Trading Algorithmique</h3>
              <p className="text-sm text-gray-600">Stratégies automatisées</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Robo-Advisors</h3>
              <p className="text-sm text-gray-600">Conseil automatisé</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Finance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-emerald-600 mr-2" />
                  Détection de Fraude Avancée
                </h3>
                <p className="text-gray-600 mb-4">
                  Protégez vos clients et votre institution avec des systèmes
                  de détection de fraude alimentés par l'IA en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse comportementale en temps réel</li>
                  <li>• Machine learning pour patterns suspects</li>
                  <li>• Réduction des faux positifs</li>
                  <li>• Compliance réglementaire automatisée</li>
                  <li>• Surveillance multi-canaux</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Anti-Fraud</Badge>
                  <Badge variant="outline">Real-time</Badge>
                  <Badge variant="outline">Compliance</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calculator className="h-6 w-6 text-green-600 mr-2" />
                  Scoring et Évaluation Crédit
                </h3>
                <p className="text-gray-600 mb-4">
                  Améliorez la précision de vos évaluations de crédit
                  avec des modèles IA sophistiqués et des données alternatives.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Modèles prédictifs avancés</li>
                  <li>• Données alternatives (médias sociaux, mobile)</li>
                  <li>• Réduction du risque de défaut</li>
                  <li>• Processus d'approbation accéléré</li>
                  <li>• Inclusion financière améliorée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Credit Scoring</Badge>
                  <Badge variant="outline">Risk Assessment</Badge>
                  <Badge variant="outline">Alternative Data</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
                  Trading Algorithmique IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des stratégies de trading sophistiquées
                  avec l'IA pour optimiser vos performances de marché.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Algorithmes de trading haute fréquence</li>
                  <li>• Analyse sentiment de marché</li>
                  <li>• Gestion automatique des risques</li>
                  <li>• Optimisation de portefeuille</li>
                  <li>• Backtesting et simulation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Algorithmic Trading</Badge>
                  <Badge variant="outline">Market Analysis</Badge>
                  <Badge variant="outline">Risk Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-2" />
                  Expérience Client Personnalisée
                </h3>
                <p className="text-gray-600 mb-4">
                  Transformez l'expérience client avec des services
                  financiers personnalisés et des chatbots intelligents.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chatbots financiers intelligents</li>
                  <li>• Recommandations produits personnalisées</li>
                  <li>• Analyse prédictive des besoins clients</li>
                  <li>• Support client 24/7 automatisé</li>
                  <li>• Onboarding digital optimisé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Customer Experience</Badge>
                  <Badge variant="outline">Personalization</Badge>
                  <Badge variant="outline">Chatbots</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Finance du Futur</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme le secteur financier avec des solutions innovantes
              pour la sécurité, l'efficacité et l'expérience client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <TrendingUp className="mr-2 h-5 w-5" />
                Solutions FinTech IA
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="mr-2 h-5 w-5" />
                Sécurité Financière
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Finance;
