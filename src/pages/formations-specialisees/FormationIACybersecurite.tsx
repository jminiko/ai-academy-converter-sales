
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, AlertTriangle, Zap, Users, Target, TrendingUp, Brain, Cpu, Monitor, Database, Network, Fingerprint, Key, Radar } from "lucide-react";

const FormationIACybersecurite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Cybersécurité</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intelligence artificielle pour la cybersécurité moderne.
            Détection de menaces, réponse automatisée et protection proactive.
          </p>
          <Badge variant="secondary" className="bg-orange-500/30 text-white px-4 py-2 text-lg mb-6">
            🔒 CyberSec AI Master
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection de Menaces</h3>
              <p className="text-sm text-gray-600">IA pour surveillance proactive</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Réponse Automatisée</h3>
              <p className="text-sm text-gray-600">Mitigation intelligente des risques</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Comportementale</h3>
              <p className="text-sm text-gray-600">Détection d'anomalies avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Fingerprint className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Protection Adaptative</h3>
              <p className="text-sm text-gray-600">Défense évolutive par IA</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation CyberSec IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Détection de Menaces par IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes de détection intelligents utilisant
                  le machine learning pour identifier les cybermenaces en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Machine Learning pour la cybersécurité</li>
                  <li>• Détection d'anomalies réseau</li>
                  <li>• Analyse comportementale utilisateurs</li>
                  <li>• SIEM intelligent et automatisé</li>
                  <li>• Threat hunting assisté par IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Anomaly Detection</Badge>
                  <Badge variant="outline">SIEM ML</Badge>
                  <Badge variant="outline">Behavioral Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-green-600 mr-2" />
                  Réponse Automatisée aux Incidents
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes de réponse automatique qui peuvent
                  contenir et mitiger les menaces sans intervention humaine.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• SOAR (Security Orchestration)</li>
                  <li>• Playbooks de réponse intelligents</li>
                  <li>• Containment automatique des menaces</li>
                  <li>• Forensics assistée par IA</li>
                  <li>• Décision making algorithmique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SOAR</Badge>
                  <Badge variant="outline">Auto-Response</Badge>
                  <Badge variant="outline">Orchestration</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Network className="h-6 w-6 text-purple-600 mr-2" />
                  Sécurité Réseau Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Protégez vos infrastructures réseau avec des solutions
                  IA capables d'adapter leur défense aux nouvelles menaces.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Firewall intelligent adaptatif</li>
                  <li>• DDoS protection par ML</li>
                  <li>• Network traffic analysis</li>
                  <li>• Zero Trust architecture IA</li>
                  <li>• Micro-segmentation dynamique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Adaptive Firewall</Badge>
                  <Badge variant="outline">Zero Trust</Badge>
                  <Badge variant="outline">Network AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Radar className="h-6 w-6 text-orange-600 mr-2" />
                  Threat Intelligence IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Collectez et analysez la threat intelligence avec l'IA
                  pour anticiper et prévenir les cyberattaques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• CTI (Cyber Threat Intelligence)</li>
                  <li>• Attribution d'attaquants par IA</li>
                  <li>• Prédiction de campagnes malveillantes</li>
                  <li>• Dark web monitoring automatisé</li>
                  <li>• IOC generation et correlation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Threat Intel</Badge>
                  <Badge variant="outline">Predictive Security</Badge>
                  <Badge variant="outline">IOC Analysis</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies CyberSec IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Splunk ML</h3>
                <p className="text-sm text-gray-600">SIEM avec ML intégré</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Elastic Security</h3>
                <p className="text-sm text-gray-600">Détection basée sur l'IA</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Phantom SOAR</h3>
                <p className="text-sm text-gray-600">Orchestration automatisée</p>
              </Card>
              <Card className="p-6 text-center">
                <Key className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">CrowdStrike Falcon</h3>
                <p className="text-sm text-gray-600">EDR alimenté par IA</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Sécurisez avec l'IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies IA de cybersécurité les plus avancées
              pour protéger efficacement vos organisations contre les cybermenaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Shield className="mr-2 h-5 w-5" />
                Commencer la Formation
              </Button>
              <Button size="lg" variant="outline">
                <Eye className="mr-2 h-5 w-5" />
                Démo Sécurité IA
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIACybersecurite;
