
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, PieChart, AlertTriangle, CheckCircle, BarChart, Users } from "lucide-react";

const SolutionIAComptabilite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Solution IA Comptabilité</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre comptabilité avec l'intelligence artificielle.
            Automatisation, analyse prédictive et conformité réglementaire optimisées.
          </p>
          <Badge variant="secondary" className="bg-green-500/30 text-white px-4 py-2 text-lg mb-6">
            💼 Comptabilité Intelligente
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Saisie Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">OCR intelligent pour traiter factures et reçus</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Analyse Prédictive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Prévisions de trésorerie et budgets intelligents</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Détection d'Anomalies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Identification automatique des erreurs et fraudes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Conformité Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Respect des normes comptables et fiscales</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <PieChart className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Reporting Intelligent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Génération automatique de rapports financiers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Tableau de Bord IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Visualisation intelligente des données financières</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités Avancées</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-emerald-600 mr-2" />
                  Traitement Automatique des Documents
                </h3>
                <p className="text-gray-600 mb-4">
                  Notre IA traite automatiquement factures, reçus et documents comptables
                  avec une précision de 99%+. Extraction intelligente des données clés
                  et catégorisation automatique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• OCR avancé multi-langues</li>
                  <li>• Reconnaissance de formats variés</li>
                  <li>• Validation croisée des données</li>
                  <li>• Apprentissage continu</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">PDF/Image</Badge>
                  <Badge variant="outline">Email</Badge>
                  <Badge variant="outline">API Integration</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  Intelligence Financière
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyses prédictives pour optimiser la gestion financière.
                  Modèles d'apprentissage automatique pour prévoir les tendances
                  et identifier les opportunités.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prévisions de cash-flow</li>
                  <li>• Analyse des ratios financiers</li>
                  <li>• Recommandations d'optimisation</li>
                  <li>• Alertes proactives</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Forecast</Badge>
                  <Badge variant="outline">KPI Analytics</Badge>
                  <Badge variant="outline">Risk Assessment</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  Contrôle et Audit Intelligent
                </h3>
                <p className="text-gray-600 mb-4">
                  Système de contrôle automatisé qui détecte les anomalies,
                  incohérences et risques potentiels en temps réel.
                  Facilite les audits internes et externes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection de fraude par ML</li>
                  <li>• Contrôles de cohérence</li>
                  <li>• Pistes d'audit automatiques</li>
                  <li>• Rapports de conformité</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Fraud Detection</Badge>
                  <Badge variant="outline">Compliance</Badge>
                  <Badge variant="outline">Audit Trail</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-2" />
                  Assistant Comptable IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Chatbot intelligent qui répond aux questions comptables,
                  aide à la saisie et guide les utilisateurs dans leurs tâches
                  quotidiennes avec des suggestions personnalisées.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Support conversationnel 24/7</li>
                  <li>• Guidance procédurale</li>
                  <li>• Formation interactive</li>
                  <li>• Suggestions contextuelles</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ChatBot</Badge>
                  <Badge variant="outline">Help Desk</Badge>
                  <Badge variant="outline">Training</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Bénéfices Mesurables</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">75%</div>
                <div className="text-gray-600">Réduction du temps de saisie</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Précision des données</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-gray-600">Diminution des erreurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
                <div className="text-gray-600">Gain de productivité</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez votre comptabilité</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui ont révolutionné leur gestion financière
              avec notre solution IA comptabilité de nouvelle génération.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Calculator className="mr-2 h-5 w-5" />
                Demander une Démo
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="mr-2 h-5 w-5" />
                Télécharger la Brochure
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
