
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityAudit = () => {
  const auditServices = [
    {
      icon: Shield,
      title: "Audit Sécurité Complet",
      description: "Évaluation approfondie de votre infrastructure IA",
      features: [
        "Analyse des vulnérabilités",
        "Tests de pénétration",
        "Évaluation des accès",
        "Conformité réglementaire"
      ]
    },
    {
      icon: Lock,
      title: "Sécurisation des Données",
      description: "Protection renforcée de vos données sensibles",
      features: [
        "Chiffrement bout en bout",
        "Anonymisation",
        "Contrôle d'accès",
        "Audit trails"
      ]
    },
    {
      icon: Eye,
      title: "Monitoring Sécurité",
      description: "Surveillance continue des menaces",
      features: [
        "Détection d'anomalies",
        "Alertes temps réel",
        "Analyse comportementale",
        "Reporting automatique"
      ]
    }
  ];

  const securityStats = [
    { label: "Vulnérabilités détectées", value: "99.7%", icon: Eye },
    { label: "Temps de réponse aux incidents", value: "< 15min", icon: Clock },
    { label: "Conformité RGPD", value: "100%", icon: Shield },
    { label: "Clients protégés", value: "500+", icon: Users }
  ];

  const threatTypes = [
    "Attaques par empoisonnement de données",
    "Extraction de modèles IA",
    "Biais algorithmiques malveillants",
    "Fuites de données d'entraînement",
    "Adversarial attacks",
    "Model inversion attacks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Audit Sécurité IA : Protection Maximale
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Sécurisez vos solutions IA contre les cybermenaces. Audit complet, 
            détection des vulnérabilités et protection proactive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {securityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-red-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Audit gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
              <Link to="/contact">Consultation sécurité</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services d'audit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services d'Audit Sécurité</h2>
            <p className="text-xl text-gray-600">Protection complète de vos systèmes IA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menaces spécifiques IA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Menaces Spécifiques à l'IA</h2>
            <p className="text-xl text-gray-600">Protection contre les attaques ciblant les systèmes IA</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                  Types d'Attaques Détectées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {threatTypes.map((threat, index) => (
                    <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{threat}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus d'audit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Processus d'Audit</h2>
            <p className="text-xl text-gray-600">Méthodologie rigoureuse pour une sécurité optimale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Pré-audit</h3>
              <p className="text-sm text-gray-600">Collecte d'informations et préparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Scan Automatisé</h3>
              <p className="text-sm text-gray-600">Détection automatique des vulnérabilités</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Tests Manuels</h3>
              <p className="text-sm text-gray-600">Validation par nos experts sécurité</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Rapport</h3>
              <p className="text-sm text-gray-600">Analyse détaillée et recommandations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-semibold mb-2">Suivi</h3>
              <p className="text-sm text-gray-600">Accompagnement dans la correction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sécurisez Vos Solutions IA Dès Maintenant
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Ne laissez pas les cybermenaces compromettre vos investissements IA
          </p>
          
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Démarrer l'audit sécurité <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityAudit;
