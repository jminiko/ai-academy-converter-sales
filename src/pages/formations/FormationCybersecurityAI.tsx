
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, Zap, Bug, Network, Database } from "lucide-react";

const FormationCybersecurityAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Cybersécurité & IA</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Protégez vos systèmes avec l'intelligence artificielle de sécurité
          </p>
          <Badge variant="secondary" className="bg-rose-500/30 text-white px-4 py-2 text-lg mb-6">
            🔒 AI Security
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Menaces</h3>
              <p className="text-sm text-gray-600">IA comportementale</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Anomalies</h3>
              <p className="text-sm text-gray-600">Patterns suspects</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bug className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Hunting Automatique</h3>
              <p className="text-sm text-gray-600">Chasse aux vulnérabilités</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Réponse Adaptative</h3>
              <p className="text-sm text-gray-600">Défense intelligente</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Cybersécurité & IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  Détection Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes de détection d'intrusion basés sur l'IA
                  pour identifier les menaces en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Machine learning pour SIEM</li>
                  <li>• Behavioral analytics avancée</li>
                  <li>• Network traffic analysis avec IA</li>
                  <li>• User behavior monitoring</li>
                  <li>• Threat intelligence automation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SIEM</Badge>
                  <Badge variant="outline">Behavioral Analytics</Badge>
                  <Badge variant="outline">Threat Intelligence</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-orange-600 mr-2" />
                  Analyse Prédictive
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'IA pour prédire et anticiper les cyberattaques
                  avant qu'elles ne se produisent.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Predictive threat modeling</li>
                  <li>• Risk assessment automatisé</li>
                  <li>• Vulnerability prediction</li>
                  <li>• Attack path analysis</li>
                  <li>• Early warning systems</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Analysis</Badge>
                  <Badge variant="outline">Risk Assessment</Badge>
                  <Badge variant="outline">Early Warning</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bug className="h-6 w-6 text-yellow-600 mr-2" />
                  Réponse Automatisée
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes de réponse automatique aux incidents
                  pour une défense proactive.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• SOAR (Security Orchestration)</li>
                  <li>• Incident response automation</li>
                  <li>• Automated forensics</li>
                  <li>• Self-healing systems</li>
                  <li>• Dynamic security policies</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SOAR</Badge>
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Self-healing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Network className="h-6 w-6 text-green-600 mr-2" />
                  Sécurité AI/ML
                </h3>
                <p className="text-gray-600 mb-4">
                  Protégez vos modèles d'IA contre les attaques adversariales
                  et garantissez leur robustesse.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Adversarial attacks defense</li>
                  <li>• Model poisoning prevention</li>
                  <li>• Privacy-preserving ML</li>
                  <li>• Differential privacy</li>
                  <li>• Secure multi-party computation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Adversarial Defense</Badge>
                  <Badge variant="outline">Privacy-preserving</Badge>
                  <Badge variant="outline">Differential Privacy</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Défense Intelligente</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme la cybersécurité en créant des défenses adaptatives
              capables d'apprendre et d'évoluer face aux menaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Shield className="mr-2 h-5 w-5" />
                Formation Cybersécurité IA
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Sécurité
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationCybersecurityAI;
