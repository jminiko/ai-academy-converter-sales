
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Cloud, Zap, Monitor, Settings, Target, TrendingUp, Shield } from "lucide-react";

const FormationMLOpsPro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <GitBranch className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation MLOps Professionnel</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez le déploiement et la gestion de modèles ML en production
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🚀 Machine Learning Operations
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Cloud className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Déploiement Cloud</h3>
              <p className="text-sm text-gray-600">AWS, Azure, GCP</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Monitor className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Monitoring IA</h3>
              <p className="text-sm text-gray-600">Performance tracking</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">CI/CD Pipeline</h3>
              <p className="text-sm text-gray-600">Automatisation complète</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité ML</h3>
              <p className="text-sm text-gray-600">Modèles sécurisés</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Parcours MLOps Complet</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <GitBranch className="h-6 w-6 text-blue-600 mr-2" />
                  Pipeline ML Production
                </h3>
                <p className="text-gray-600 mb-4">
                  Construisez des pipelines robustes pour déployer vos modèles
                  ML en production avec les meilleures pratiques DevOps.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Version control pour modèles ML (MLflow, DVC)</li>
                  <li>• CI/CD pipelines automatisés</li>
                  <li>• Tests automatisés pour modèles</li>
                  <li>• Déploiement containerisé (Docker, Kubernetes)</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                  <li>• Orchestration avec Apache Airflow</li>
                  <li>• Blue-green deployments</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MLflow</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 text-indigo-600 mr-2" />
                  Monitoring et Observabilité
                </h3>
                <p className="text-gray-600 mb-4">
                  Surveillez vos modèles en production pour détecter la dérive
                  des données et maintenir les performances optimales.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Data drift detection et monitoring</li>
                  <li>• Model performance tracking</li>
                  <li>• Alertes et notifications automatiques</li>
                  <li>• Dashboards de monitoring (Grafana)</li>
                  <li>• Logging centralisé (ELK Stack)</li>
                  <li>• A/B testing pour modèles ML</li>
                  <li>• Explainabilité et interprétabilité</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Grafana</Badge>
                  <Badge variant="outline">Prometheus</Badge>
                  <Badge variant="outline">ELK Stack</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cloud className="h-6 w-6 text-purple-600 mr-2" />
                  Infrastructure Cloud
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les services cloud pour déployer et gérer vos
                  solutions ML à grande échelle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• AWS SageMaker et services ML</li>
                  <li>• Azure Machine Learning Studio</li>
                  <li>• Google Cloud AI Platform</li>
                  <li>• Serverless ML (Lambda, Cloud Functions)</li>
                  <li>• Auto-scaling et load balancing</li>
                  <li>• Data pipelines avec Apache Kafka</li>
                  <li>• Feature stores et data lakes</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AWS SageMaker</Badge>
                  <Badge variant="outline">Azure ML</Badge>
                  <Badge variant="outline">GCP AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Sécurité et Gouvernance
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des pratiques de sécurité et de gouvernance
                  pour vos modèles ML en production.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Model governance et audit trails</li>
                  <li>• Sécurité des API ML</li>
                  <li>• Gestion des accès et permissions</li>
                  <li>• Compliance et réglementation GDPR</li>
                  <li>• Backup et disaster recovery</li>
                  <li>• Chiffrement des données et modèles</li>
                  <li>• Privacy-preserving ML techniques</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Security</Badge>
                  <Badge variant="outline">Governance</Badge>
                  <Badge variant="outline">Compliance</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Stack MLOps Moderne</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-bold mb-4 text-blue-700">Versioning & Tracking</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Git</Badge>
                  <Badge>MLflow</Badge>
                  <Badge>DVC</Badge>
                  <Badge>Weights & Biases</Badge>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 text-blue-700">Orchestration</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Airflow</Badge>
                  <Badge>Kubeflow</Badge>
                  <Badge>Prefect</Badge>
                  <Badge>Argo Workflows</Badge>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 text-blue-700">Déploiement</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Docker</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>Helm</Badge>
                  <Badge>Istio</Badge>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 text-blue-700">Monitoring</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Prometheus</Badge>
                  <Badge>Grafana</Badge>
                  <Badge>Jaeger</Badge>
                  <Badge>DataDog</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Excellence Opérationnelle ML</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              MLOps révolutionne le déploiement ML en apportant fiabilité, 
              scalabilité et gouvernance aux modèles d'intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <GitBranch className="mr-2 h-5 w-5" />
                Formation MLOps Pro
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                Projets Production
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationMLOpsPro;
