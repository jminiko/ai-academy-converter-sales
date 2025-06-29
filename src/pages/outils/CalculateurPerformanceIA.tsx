
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, TrendingUp, Zap, Target, Cpu, Monitor, Database, Eye, Settings, Globe, Users, Shield } from "lucide-react";

const CalculateurPerformanceIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Calculateur Performance IA
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Évaluez et optimisez les performances de vos modèles d'intelligence artificielle.
            Métriques avancées, benchmarking et recommandations d'amélioration.
          </p>
          <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2 text-lg mb-6">
            📊 AI Performance Analytics
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Précision Modèles</h3>
              <p className="text-sm text-gray-600">Métriques de qualité</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Performance Temps Réel</h3>
              <p className="text-sm text-gray-600">Latence et throughput</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Efficacité Ressources</h3>
              <p className="text-sm text-gray-600">CPU, GPU, mémoire</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Optimisation Continue</h3>
              <p className="text-sm text-gray-600">Amélioration automatique</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités Calculateur IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  Métriques de Qualité IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Calculez automatiquement toutes les métriques de performance
                  essentielles pour évaluer la qualité de vos modèles IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Accuracy, Precision, Recall, F1-Score</li>
                  <li>• ROC AUC et PR AUC curves</li>
                  <li>• Confusion matrix analysis</li>
                  <li>• Classification reports détaillés</li>
                  <li>• Regression metrics (MAE, RMSE, R²)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Accuracy Metrics</Badge>
                  <Badge variant="outline">ROC Analysis</Badge>
                  <Badge variant="outline">Classification</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-green-600 mr-2" />
                  Performance Temps Réel
                </h3>
                <p className="text-gray-600 mb-4">
                  Surveillez les performances de vos modèles en production
                  avec des métriques de latence et de débit en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Latence inference moyenne/P95/P99</li>
                  <li>• Throughput requests per second</li>
                  <li>• Load testing automatisé</li>
                  <li>• Stress testing capabilities</li>
                  <li>• Scalability assessment</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Latency</Badge>
                  <Badge variant="outline">Throughput</Badge>
                  <Badge variant="outline">Load Testing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cpu className="h-6 w-6 text-purple-600 mr-2" />
                  Monitoring Ressources
                </h3>
                <p className="text-gray-600 mb-4">
                  Analysez l'utilisation des ressources système pour optimiser
                  l'efficacité et réduire les coûts d'infrastructure.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• CPU et GPU utilization</li>
                  <li>• Memory consumption analysis</li>
                  <li>• Network I/O monitoring</li>
                  <li>• Storage performance metrics</li>
                  <li>• Cost per inference calculation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Resource Monitoring</Badge>
                  <Badge variant="outline">Cost Analysis</Badge>
                  <Badge variant="outline">Efficiency</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-orange-600 mr-2" />
                  Analyse & Recommandations
                </h3>
                <p className="text-gray-600 mb-4">
                  Obtenez des recommandations intelligentes pour améliorer
                  les performances de vos modèles et optimiser votre architecture.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Model drift detection</li>
                  <li>• Performance degradation alerts</li>
                  <li>• Optimization recommendations</li>
                  <li>• Benchmark comparisons</li>
                  <li>• Best practices suggestions</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Model Drift</Badge>
                  <Badge variant="outline">Optimization</Badge>
                  <Badge variant="outline">Benchmarking</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Fonctionnalités Avancées</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Data Quality</h3>
                <p className="text-sm text-gray-600">Analyse qualité données</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Dashboard</h3>
                <p className="text-sm text-gray-600">Visualisation temps réel</p>
              </Card>
              <Card className="p-6 text-center">
                <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Auto-tuning</h3>
                <p className="text-sm text-gray-600">Optimisation automatique</p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Model Security</h3>
                <p className="text-sm text-gray-600">Sécurité et compliance</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Optimisez vos Modèles IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maximisez les performances de vos modèles IA avec des métriques précises,
              un monitoring continu et des recommandations d'optimisation intelligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <BarChart className="mr-2 h-5 w-5" />
                Calculer Performance
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                Guide Optimisation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalculateurPerformanceIA;
