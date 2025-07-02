
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Shield, Eye, Users, Brain, Lock, AlertTriangle, CheckCircle } from "lucide-react";

const FormationIAEthique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Éthique et Responsable</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Développez une IA respectueuse des valeurs humaines et sociétales
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            ⚖️ Ethical AI & Responsible Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Transparence IA</h3>
              <p className="text-sm text-gray-600">Explainability & Trust</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Équité Algorithmique</h3>
              <p className="text-sm text-gray-600">Bias mitigation</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Vie Privée</h3>
              <p className="text-sm text-gray-600">Privacy by design</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Risques IA</h3>
              <p className="text-sm text-gray-600">Risk assessment</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Principes d'IA Responsable</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Scale className="h-6 w-6 text-emerald-600 mr-2" />
                  Fondements Éthiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les principes fondamentaux de l'éthique en IA et
                  apprenez à intégrer ces valeurs dans vos projets.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Cadres éthiques internationaux (IEEE, EU AI Act)</li>
                  <li>• Principes de fairness et non-discrimination</li>
                  <li>• Accountability et responsabilité développeurs</li>
                  <li>• Human-centered AI design</li>
                  <li>• Transparence et explicabilité</li>
                  <li>• Consentement éclairé et autonomie</li>
                  <li>• Impact sociétal et développement durable</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ethics Framework</Badge>
                  <Badge variant="outline">AI Governance</Badge>
                  <Badge variant="outline">Human Rights</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-teal-600 mr-2" />
                  IA Explicable (XAI)
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des modèles d'IA transparents et interprétables
                  pour renforcer la confiance des utilisateurs.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Techniques d'interprétabilité (LIME, SHAP)</li>
                  <li>• Model-agnostic explanation methods</li>
                  <li>• Visualisation des décisions IA</li>
                  <li>• Counterfactual explanations</li>
                  <li>• Local vs global interpretability</li>
                  <li>• Human-interpretable features</li>
                  <li>• Certification et audit de modèles</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">LIME</Badge>
                  <Badge variant="outline">SHAP</Badge>
                  <Badge variant="outline">Interpretability</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-green-600 mr-2" />
                  Lutte contre les Biais
                </h3>
                <p className="text-gray-600 mb-4">
                  Identifiez et corrigez les biais algorithmiques pour créer
                  des systèmes d'IA équitables pour tous.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection de biais dans les données</li>
                  <li>• Algorithmic bias testing et metrics</li>
                  <li>• Fairness-aware machine learning</li>
                  <li>• Adversarial debiasing techniques</li>
                  <li>• Représentativité des datasets</li>
                  <li>• Intersectional fairness analysis</li>
                  <li>• Continuous bias monitoring</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Bias Detection</Badge>
                  <Badge variant="outline">Fairness Metrics</Badge>
                  <Badge variant="outline">Inclusive AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-2" />
                  Gouvernance et Conformité
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des structures de gouvernance pour assurer
                  la conformité réglementaire de vos projets IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• RGPD et protection des données</li>
                  <li>• EU AI Act compliance framework</li>
                  <li>• Risk management et impact assessment</li>
                  <li>• Documentation et traçabilité</li>
                  <li>• Comités d'éthique IA</li>
                  <li>• Processus d'approbation éthique</li>
                  <li>• Audit et certification continue</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GDPR</Badge>
                  <Badge variant="outline">AI Act</Badge>
                  <Badge variant="outline">Compliance</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Framework IA Responsable</h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
                <h4 className="font-semibold text-sm">Évaluation</h4>
                <p className="text-xs text-gray-600">Impact assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
                <h4 className="font-semibold text-sm">Design</h4>
                <p className="text-xs text-gray-600">Ethical by design</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
                <h4 className="font-semibold text-sm">Test</h4>
                <p className="text-xs text-gray-600">Bias & fairness testing</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">4</div>
                <h4 className="font-semibold text-sm">Déploiement</h4>
                <p className="text-xs text-gray-600">Responsible deployment</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">5</div>
                <h4 className="font-semibold text-sm">Monitoring</h4>
                <p className="text-xs text-gray-600">Continuous oversight</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">IA au Service de l'Humanité</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Une IA éthique et responsable garantit que les technologies
              servent le bien commun tout en respectant la dignité humaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Scale className="mr-2 h-5 w-5" />
                Formation IA Éthique
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
                Cas d'Usage Responsables
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAEthique;
