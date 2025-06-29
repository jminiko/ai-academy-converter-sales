
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, AlertTriangle, Zap, Target, Users, TrendingUp, Database, Monitor, Bot, Skull } from "lucide-react";

const FormationIACybersecurite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Cybersécurité</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Protégez les systèmes avec l'intelligence artificielle.
            Détection d'intrusions, analyse de menaces et défense automatisée.
          </p>
          <Badge variant="secondary" className="bg-orange-500/30 text-white px-4 py-2 text-lg mb-6">
            🛡️ AI Security Defense
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Intrusions</h3>
              <p className="text-sm text-gray-600">IA de surveillance</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Menaces</h3>
              <p className="text-sm text-gray-600">Threat Intelligence IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bot className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Réponse Automatisée</h3>
              <p className="text-sm text-gray-600">SOAR avec IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Authentification IA</h3>
              <p className="text-sm text-gray-600">Biométrie avancée</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules IA Cybersécurité</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-red-600 mr-2" />
                  Détection d'Intrusions IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes de détection d'intrusions basés sur
                  l'IA pour identifier les menaces en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Machine Learning pour NIDS/HIDS</li>
                  <li>• Détection d'anomalies réseau</li>
                  <li>• Analyse comportementale IA</li>
                  <li>• Corrélation d'événements automatique</li>
                  <li>• Réduction des faux positifs</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Intrusion Detection</Badge>
                  <Badge variant="outline">Anomaly Detection</Badge>
                  <Badge variant="outline">Network Security</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
                  Threat Intelligence IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploitez l'IA pour analyser et anticiper les menaces
                  cybernétiques émergentes et les attaques sophistiquées.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse automatique de malwares</li>
                  <li>• Prédiction d'attaques</li>
                  <li>• Intelligence Open Source (OSINT)</li>
                  <li>• Classification de menaces</li>
                  <li>• Attribution automatique d'attaquants</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Threat Analysis</Badge>
                  <Badge variant="outline">Malware Detection</Badge>
                  <Badge variant="outline">OSINT</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-blue-600 mr-2" />
                  Orchestration et Réponse Automatisée
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes SOAR utilisant l'IA pour
                  automatiser la réponse aux incidents de sécurité.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Playbooks automatisés IA</li>
                  <li>• Réponse incident intelligente</li>
                  <li>• Orchestration multi-outils</li>
                  <li>• Triage automatique d'alertes</li>
                  <li>• Containment et remediation IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SOAR</Badge>
                  <Badge variant="outline">Incident Response</Badge>
                  <Badge variant="outline">Automation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-green-600 mr-2" />
                  IA pour l'Authentification
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des solutions d'authentification avancées
                  utilisant la biométrie et l'analyse comportementale IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reconnaissance faciale et vocale</li>
                  <li>• Analyse comportementale continue</li>
                  <li>• Authentification adaptive</li>
                  <li>• Détection de fraude identitaire</li>
                  <li>• Zero Trust avec IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Biometric Auth</Badge>
                  <Badge variant="outline">Behavioral Analysis</Badge>
                  <Badge variant="outline">Zero Trust</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Outils IA Cybersécurité</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">SIEM avec IA</h3>
                <p className="text-sm text-gray-600">Corrélation intelligente</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">EDR/XDR IA</h3>
                <p className="text-sm text-gray-600">Détection endpoints</p>
              </Card>
              <Card className="p-6 text-center">
                <Skull className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Sandboxing IA</h3>
                <p className="text-sm text-gray-600">Analyse malwares</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">UEBA</h3>
                <p className="text-sm text-gray-600">Analyse comportement utilisateur</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Sécurisez avec l'IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez l'intelligence artificielle appliquée à la cybersécurité
              et devenez expert en défense automatisée contre les cybermenaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Shield className="mr-2 h-5 w-5" />
                Formation Cybersécurité IA
              </Button>
              <Button size="lg" variant="outline">
                <Bot className="mr-2 h-5 w-5" />
                Labs Sécurité
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
