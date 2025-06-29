
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, TrendingUp, Shield, Zap, BarChart, Target, Brain } from "lucide-react";

const SolutionIAComptabilite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Solution IA Comptabilité</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Automatisez et optimisez vos processus comptables avec l'IA.
            Saisie automatique, contrôles intelligents et analytics financiers.
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            💰 FinTech AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">OCR Intelligent</h3>
              <p className="text-sm text-gray-600">Extraction automatique de données</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Contrôles Automatiques</h3>
              <p className="text-sm text-gray-600">Détection d'anomalies</p>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prévisions</h3>
              <p className="text-sm text-gray-600">Analytics prédictifs</p>
            </Card>
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Automatisation</h3>
              <p className="text-sm text-gray-600">Workflows intelligents</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Solution Comptable</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  Saisie Automatique
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisez la saisie comptable avec OCR intelligent
                  et reconnaissance des documents financiers.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• OCR avancé factures/reçus</li>
                  <li>• Classification automatique</li>
                  <li>• Validation règles métier</li>
                  <li>• Intégration ERP/logiciels</li>
                  <li>• Workflow approbation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">OCR</Badge>
                  <Badge variant="outline">Classification</Badge>
                  <Badge variant="outline">ERP</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  Contrôles & Conformité
                </h3>
                <p className="text-gray-600 mb-4">
                  Système de contrôles automatiques pour détecter
                  anomalies, erreurs et risques de fraude.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection anomalies</li>
                  <li>• Contrôles cohérence</li>
                  <li>• Analyse fraude</li>
                  <li>• Conformité réglementaire</li>
                  <li>• Audit trail automatique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Anomaly Detection</Badge>
                  <Badge variant="outline">Fraud</Badge>
                  <Badge variant="outline">Compliance</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-green-600 mr-2" />
                  Analytics Financiers
                </h3>
                <p className="text-gray-600 mb-4">
                  Tableaux de bord intelligents et analyses prédictives
                  pour optimiser la performance financière.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Dashboards temps réel</li>
                  <li>• Prévisions cash-flow</li>
                  <li>• Analyse rentabilité</li>
                  <li>• KPIs automatisés</li>
                  <li>• Reporting dynamique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Dashboard</Badge>
                  <Badge variant="outline">Cash Flow</Badge>
                  <Badge variant="outline">KPI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Assistant Comptable IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Assistant virtuel pour répondre aux questions comptables
                  et guider les utilisateurs dans leurs tâches.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Support conversationnel</li>
                  <li>• Aide à la saisie</li>
                  <li>• Recommandations fiscales</li>
                  <li>• Formation utilisateurs</li>
                  <li>• Documentation intelligente</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chatbot</Badge>
                  <Badge variant="outline">Support</Badge>
                  <Badge variant="outline">Training</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Modernisez votre Comptabilité</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Déployez une solution comptable IA complète pour gagner en efficacité,
              réduire les erreurs et optimiser vos processus financiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Calculator className="mr-2 h-5 w-5" />
                Démonstration Solution
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                Calcul ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionIAComptabilite;
