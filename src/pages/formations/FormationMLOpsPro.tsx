
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Cloud, Monitor, Zap, Shield, Code, GitBranch, Activity } from "lucide-react";

const FormationMLOpsPro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation MLOps Pro</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'industrialisation et le déploiement de modèles ML en production
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            ⚙️ Machine Learning Operations
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Cloud className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Cloud Native</h3>
              <p className="text-sm text-gray-600">Déploiement cloud</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Monitor className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Monitoring</h3>
              <p className="text-sm text-gray-600">Surveillance continue</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <GitBranch className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">CI/CD ML</h3>
              <p className="text-sm text-gray-600">Pipeline automatisé</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité</h3>
              <p className="text-sm text-gray-600">Production sécurisée</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Certification MLOps Professional</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-emerald-600 mr-2" />
                  Architecture MLOps
                </h3>
                <p className="text-gray-600 mb-4">
                  Concevez des architectures MLOps robustes et scalables
                  pour industrialiser vos modèles de machine learning.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Design patterns MLOps</li>
                  <li>• Architecture microservices ML</li>
                  <li>• Container orchestration (Kubernetes)</li>
                  <li>• Service mesh et API gateways</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                  <li>• Scalabilité et haute disponibilité</li>
                  <li>• Multi-cloud et hybrid cloud</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Terraform</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <GitBranch className="h-6 w-6 text-teal-600 mr-2" />
                  CI/CD pour ML
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisez le cycle de vie complet de vos modèles ML
                  avec des pipelines CI/CD spécialisés et robustes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Git workflows pour projets ML</li>
                  <li>• Automated testing pour modèles ML</li>
                  <li>• Model versioning et registries</li>
                  <li>• Continuous training pipelines</li>
                  <li>• Blue-green deployment ML</li>
                  <li>• Canary releases et A/B testing</li>
                  <li>• Rollback et disaster recovery</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GitHub Actions</Badge>
                  <Badge variant="outline">Jenkins</Badge>
                  <Badge variant="outline">GitLab CI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 text-blue-600 mr-2" />
                  Monitoring & Observabilité
                </h3>
                <p className="text-gray-600 mb-4">
                  Surveillez la performance et la santé de vos modèles ML
                  en production avec des outils de monitoring avancés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Model performance monitoring</li>
                  <li>• Data drift detection</li>
                  <li>• Concept drift et model decay</li>
                  <li>• Alerting et notifications</li>
                  <li>• Distributed tracing ML</li>
                  <li>• Metrics et logging centralisés</li>
                  <li>• Dashboards temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Prometheus</Badge>
                  <Badge variant="outline">Grafana</Badge>
                  <Badge variant="outline">ELK Stack</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cloud className="h-6 w-6 text-purple-600 mr-2" />
                  Cloud Platforms MLOps
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploitez les services cloud managés pour accélérer
                  vos déploiements MLOps sur AWS, GCP et Azure.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• AWS SageMaker et ML services</li>
                  <li>• Google Vertex AI platform</li>
                  <li>• Azure Machine Learning</li>
                  <li>• Databricks MLflow</li>
                  <li>• Kubeflow et ML pipelines</li>
                  <li>• Serverless ML inference</li>
                  <li>• Cost optimization strategies</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AWS SageMaker</Badge>
                  <Badge variant="outline">Vertex AI</Badge>
                  <Badge variant="outline">Azure ML</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-6">Pipeline MLOps End-to-End</h2>
            <div className="grid md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Code className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-sm">Développement</h4>
                <p className="text-xs text-gray-600">Code & Modèles</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <GitBranch className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-sm">Versioning</h4>
                <p className="text-xs text-gray-600">Git & MLflow</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-sm">Testing</h4>
                <p className="text-xs text-gray-600">Validation</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Cloud className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-sm">Déploiement</h4>
                <p className="text-xs text-gray-600">Production</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Monitor className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-sm">Monitoring</h4>
                <p className="text-xs text-gray-600">Surveillance</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Activity className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-sm">Feedback</h4>
                <p className="text-xs text-gray-600">Amélioration</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Excellence MLOps</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Devenez expert en MLOps et transformez la façon dont votre organisation
              déploie et maintient ses modèles de machine learning en production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Settings className="mr-2 h-5 w-5" />
                Certification MLOps Pro
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Pratiques
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
