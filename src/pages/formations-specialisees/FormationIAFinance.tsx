
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Shield, AlertTriangle, BarChart, Users, Target, Zap, Brain, Cpu, Monitor, Database } from "lucide-react";

const FormationIAFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Finance</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intelligence artificielle pour les services financiers.
            Trading algorithmique, détection de fraude et gestion des risques.
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            💰 FinTech AI Master
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Trading Algorithmique</h3>
              <p className="text-sm text-gray-600">Stratégies automatisées IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection de Fraude</h3>
              <p className="text-sm text-gray-600">Protection temps réel</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gestion des Risques</h3>
              <p className="text-sm text-gray-600">Évaluation prédictive</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Scoring Crédit</h3>
              <p className="text-sm text-gray-600">Évaluation automatisée</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Finance IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  Trading Algorithmique IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des stratégies de trading automatisées utilisant
                  l'apprentissage automatique pour optimiser les performances.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse technique automatisée</li>
                  <li>• Algorithmes de trading haute fréquence</li>
                  <li>• Sentiment analysis sur actualités</li>
                  <li>• Portfolio optimization par IA</li>
                  <li>• Risk-adjusted return maximization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Algorithmic Trading</Badge>
                  <Badge variant="outline">HFT</Badge>
                  <Badge variant="outline">Portfolio ML</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-green-600 mr-2" />
                  Détection de Fraude IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes de détection de fraude en temps réel
                  utilisant des modèles d'apprentissage non supervisé.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Anomaly detection avancée</li>
                  <li>• Pattern recognition frauduleux</li>
                  <li>• Real-time transaction monitoring</li>
                  <li>• Graph neural networks pour fraude</li>
                  <li>• Adaptive threshold learning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Fraud Detection</Badge>
                  <Badge variant="outline">Anomaly Detection</Badge>
                  <Badge variant="outline">Graph ML</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
                  Gestion des Risques IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les modèles de risque quantitatifs et la régulation
                  FinTech pour une gestion des risques optimale.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Value at Risk (VaR) ML models</li>
                  <li>• Credit risk scoring avancé</li>
                  <li>• Market risk prediction</li>
                  <li>• Stress testing automatisé</li>
                  <li>• Regulatory compliance monitoring</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Risk Management</Badge>
                  <Badge variant="outline">VaR Models</Badge>
                  <Badge variant="outline">RegTech</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Robo-Advisory & Wealth Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des conseillers financiers automatisés capables de
                  proposer des stratégies d'investissement personnalisées.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Automated portfolio rebalancing</li>
                  <li>• Risk profiling par ML</li>
                  <li>• Goal-based investing algorithms</li>
                  <li>• Tax-loss harvesting automation</li>
                  <li>• Behavioral finance modeling</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Robo-Advisory</Badge>
                  <Badge variant="outline">Wealth Management</Badge>
                  <Badge variant="outline">Behavioral Finance</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies FinTech IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Bloomberg API</h3>
                <p className="text-sm text-gray-600">Données financières temps réel</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Quantlib Python</h3>
                <p className="text-sm text-gray-600">Modélisation quantitative</p>
              </Card>
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Apache Kafka</h3>
                <p className="text-sm text-gray-600">Streaming data processing</p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">TensorFlow Finance</h3>
                <p className="text-sm text-gray-600">Deep learning financier</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez la Finance</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies IA financières les plus avancées pour
              créer des solutions FinTech innovantes et performantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <DollarSign className="mr-2 h-5 w-5" />
                Commencer la Formation
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                Simulateur Trading IA
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAFinance;
