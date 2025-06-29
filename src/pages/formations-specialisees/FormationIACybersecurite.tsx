
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertTriangle, Eye, Brain, Zap, Target, Activity } from "lucide-react";

const FormationIACybersecurite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-700 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Cybersécurité</h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Protégez vos systèmes avec l'intelligence artificielle avancée.
            Détection de menaces, réponse automatique et sécurité prédictive.
          </p>
          <Badge variant="secondary" className="bg-slate-600/30 text-white px-4 py-2 text-lg mb-6">
            🛡️ CyberSec AI Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Menaces</h3>
              <p className="text-sm text-gray-600">IA pour détection temps réel</p>
            </Card>
            <Card className="text-center p-6">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Comportementale</h3>
              <p className="text-sm text-gray-600">Détection d'anomalies avancées</p>
            </Card>
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Réponse Automatique</h3>
              <p className="text-sm text-gray-600">Mitigation automatisée</p>
            </Card>
            <Card className="text-center p-6">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Threat Intelligence</h3>
              <p className="text-sm text-gray-600">Intelligence des menaces IA</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Programme de Formation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  Module 1: Détection de Menaces IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Systèmes de détection avancés utilisant machine learning
                  pour identifier malwares, intrusions et comportements suspects.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• SIEM avec ML intégré</li>
                  <li>• Détection malware par deep learning</li>
                  <li>• Analyse réseau comportementale</li>
                  <li>• Honeypots intelligents</li>
                  <li>• Zero-day detection</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SIEM</Badge>
                  <Badge variant="outline">Malware Detection</Badge>
                  <Badge variant="outline">Zero-day</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Module 2: Analyse Comportementale
                </h3>
                <p className="text-gray-600 mb-4">
                  Surveillance des utilisateurs et entités avec algorithms
                  d'apprentissage pour détecter les comportements anormaux.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• User and Entity Behavior Analytics</li>
                  <li>• Détection d'insider threats</li>
                  <li>• Analyse de patterns d'accès</li>
                  <li>• Scoring de risque utilisateur</li>
                  <li>• Détection de compromission de comptes</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">UEBA</Badge>
                  <Badge variant="outline">Insider Threat</Badge>
                  <Badge variant="outline">Risk Scoring</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-600 mr-2" />
                  Module 3: Réponse Automatisée
                </h3>
                <p className="text-gray-600 mb-4">
                  Orchestration de sécurité automatisée (SOAR) avec
                  playbooks intelligents et réponse en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Security Orchestration (SOAR)</li>
                  <li>• Playbooks automatisés</li>
                  <li>• Incident response automation</li>
                  <li>• Threat hunting automatisé</li>
                  <li>• Remediation intelligente</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SOAR</Badge>
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Incident Response</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Module 4: Threat Intelligence IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Intelligence des menaces augmentée par IA pour prédiction
                  et prévention proactive des cyberattaques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• CTI (Cyber Threat Intelligence)</li>
                  <li>• Threat prediction modeling</li>
                  <li>• IOC generation automatique</li>
                  <li>• Attribution d'attaquants par IA</li>
                  <li>• Predictive security analytics</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">CTI</Badge>
                  <Badge variant="outline">Threat Prediction</Badge>
                  <Badge variant="outline">IOC</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Certifications Sectorielles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">SOC Analyst AI</h3>
                <p className="text-sm text-gray-600">Analyste SOC avec IA</p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Threat Hunter AI</h3>
                <p className="text-sm text-gray-600">Chasseur de menaces IA</p>
              </Card>
              <Card className="p-6 text-center">
                <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">CISO AI-Ready</h3>
                <p className="text-sm text-gray-600">Dirigeant sécurité IA</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Sécurisez l'Avenir</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies de cybersécurité IA les plus avancées
              pour protéger les organisations contre les menaces de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-700 hover:bg-gray-800">
                <Shield className="mr-2 h-5 w-5" />
                S'inscrire à la Formation
              </Button>
              <Button size="lg" variant="outline">
                <Lock className="mr-2 h-5 w-5" />
                Programme Détaillé
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
