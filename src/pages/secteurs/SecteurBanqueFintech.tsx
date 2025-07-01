
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Shield, Smartphone, Bot, Target, Users, Zap } from "lucide-react";

const SecteurBanqueFintech = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Banque & Fintech</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez les services financiers avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            💰 Financial Services AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Fraude</h3>
              <p className="text-sm text-gray-600">Sécurité renforcée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Trading Algorithmique</h3>
              <p className="text-sm text-gray-600">Optimisation investissements</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bot className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Conseillers Virtuels</h3>
              <p className="text-sm text-gray-600">Service client 24/7</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Scoring Crédit</h3>
              <p className="text-sm text-gray-600">Évaluation risques</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA pour la Finance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-green-600 mr-2" />
                  Cybersécurité Financière
                </h3>
                <p className="text-gray-600 mb-4">
                  Protégez vos systèmes financiers avec des solutions IA avancées
                  de détection et prévention des fraudes en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection de fraudes en temps réel</li>
                  <li>• Analyse comportementale des utilisateurs</li>
                  <li>• Authentification biométrique avancée</li>
                  <li>• Monitoring des transactions suspectes</li>
                  <li>• Prévention du blanchiment d'argent</li>
                  <li>• Conformité réglementaire automatisée</li>
                  <li>• Gestion des risques opérationnels</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Fraud Detection</Badge>
                  <Badge variant="outline">AML</Badge>
                  <Badge variant="outline">Risk Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  Intelligence Investissement
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez vos stratégies d'investissement avec des algorithmes
                  d'IA prédictifs et des analyses de marché sophistiquées.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Trading algorithmique haute fréquence</li>
                  <li>• Analyse prédictive des marchés</li>
                  <li>• Gestion automatisée de portefeuilles</li>
                  <li>• Robo-advisors personnalisés</li>
                  <li>• Analyse de sentiment des actualités</li>
                  <li>• Optimisation de l'allocation d'actifs</li>
                  <li>• Backtesting et simulation de stratégies</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Algorithmic Trading</Badge>
                  <Badge variant="outline">Portfolio Management</Badge>
                  <Badge variant="outline">Market Analysis</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-purple-600 mr-2" />
                  Expérience Client IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Transformez l'expérience client bancaire avec des assistants
                  virtuels intelligents et des services personnalisés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chatbots bancaires multilingues</li>
                  <li>• Conseillers financiers virtuels</li>
                  <li>• Recommandations produits personnalisées</li>
                  <li>• Analyse de sentiment client</li>
                  <li>• Support client prédictif</li>
                  <li>• Onboarding automatisé</li>
                  <li>• Interface vocale et conversationnelle</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chatbots</Badge>
                  <Badge variant="outline">Personalization</Badge>
                  <Badge variant="outline">Voice AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Smartphone className="h-6 w-6 text-orange-600 mr-2" />
                  Fintech Innovation
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des solutions fintech innovantes avec l'IA
                  pour les paiements, l'inclusion financière et plus encore.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Paiements intelligents et sécurisés</li>
                  <li>• Néobanques basées sur l'IA</li>
                  <li>• Microfinance et crédit alternatif</li>
                  <li>• Assurance paramétrique automatisée</li>
                  <li>• Blockchain et cryptomonnaies</li>
                  <li>• Open banking et APIs</li>
                  <li>• Financial inclusion par IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Digital Payments</Badge>
                  <Badge variant="outline">Neobanking</Badge>
                  <Badge variant="outline">Blockchain</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Transformation Digitale Bancaire</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Sécurité Renforcée</h4>
                <p className="text-sm text-gray-600">Protection des données et transactions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Expérience Utilisateur</h4>
                <p className="text-sm text-gray-600">Interfaces intuitives et personnalisées</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Performance Optimisée</h4>
                <p className="text-sm text-gray-600">Efficacité opérationnelle accrue</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Innovation Continue</h4>
                <p className="text-sm text-gray-600">Adaptation aux nouvelles technologies</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Avenir de la Finance</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme fondamentalement le secteur financier en créant
              des services plus sécurisés, personnalisés et accessibles pour tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <DollarSign className="mr-2 h-5 w-5" />
                Solutions Fintech IA
              </Button>
              <Button size="lg" variant="outline">
                <Target className="mr-2 h-5 w-5" />
                Cas d'Usage Bancaires
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecteurBanqueFintech;
