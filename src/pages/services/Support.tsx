
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Phone, Monitor, ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const plans = [
    {
      name: "Essential",
      price: "890€",
      period: "/mois",
      description: "Support de base pour petites équipes",
      features: [
        "Support email 48h",
        "Documentation complète",
        "Mises à jour sécurité",
        "1 session formation/trimestre",
        "Monitoring basique"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "1 890€",
      period: "/mois",
      description: "Solution complète pour entreprises",
      features: [
        "Support 24/7 prioritaire",
        "Hotline téléphonique",
        "Interventions à distance",
        "Formations mensuelles",
        "Monitoring avancé",
        "Optimisations trimestrielles",
        "Conseiller dédié"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      description: "Support premium sur-mesure",
      features: [
        "Support dédié 24/7",
        "Ingénieur sur site",
        "SLA personnalisé",
        "Formations illimitées",
        "Monitoring temps réel",
        "R&D partagée",
        "Roadmap produit partagée"
      ],
      popular: false
    }
  ];

  const services = [
    {
      icon: Phone,
      title: "Support Technique",
      description: "Assistance technique réactive pour résoudre tous vos problèmes"
    },
    {
      icon: Monitor,
      title: "Monitoring 24/7",
      description: "Surveillance continue des performances et alertes proactives"
    },
    {
      icon: Zap,
      title: "Maintenance",
      description: "Mises à jour, corrections et optimisations régulières"
    },
    {
      icon: Users,
      title: "Formation Continue",
      description: "Sessions de formation pour maintenir l'expertise de vos équipes"
    }
  ];

  const metrics = [
    { label: "Temps de réponse moyen", value: "< 2h", icon: Clock },
    { label: "Disponibilité garantie", value: "99.9%", icon: Shield },
    { label: "Satisfaction client", value: "98%", icon: Users },
    { label: "Problèmes résolus", value: "94%", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">
            🛡️ Support & Maintenance
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Support & Maintenance IA : Sérénité Garantie
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Bénéficiez d'un support expert 24/7 pour vos solutions IA. Maintenance proactive, 
            formations continues et optimisations pour maximiser vos performances.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link to="/contact">Choisir mon plan</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Audit gratuit</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-600">{metric.value}</div>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services de Support</h2>
            <p className="text-xl text-gray-600">Accompagnement complet pour la réussite de vos projets IA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans de support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plans de Support</h2>
            <p className="text-xl text-gray-600">Choisissez le niveau de support adapté à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-emerald-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-emerald-600">Populaire</Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-emerald-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/contact">
                      {plan.name === 'Enterprise' ? 'Nous contacter' : 'Choisir ce plan'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process de support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment Ça Marche</h2>
            <p className="text-xl text-gray-600">Processus de support optimisé pour une résolution rapide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Signalement</h3>
              <p className="text-sm text-gray-600">Contactez-nous par email, téléphone ou chat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Analyse</h3>
              <p className="text-sm text-gray-600">Diagnostic rapide et priorisation du ticket</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Résolution</h3>
              <p className="text-sm text-gray-600">Intervention d'experts et correction du problème</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Suivi</h3>
              <p className="text-sm text-gray-600">Validation de la résolution et prévention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages support */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Que Disent Nos Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4 italic">
                  "Support exceptionnel ! Problème résolu en moins de 30 minutes un dimanche soir. 
                  L'équipe est vraiment réactive et compétente."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">Thomas Moreau</p>
                    <p className="text-sm text-gray-600">CTO - TechStart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4 italic">
                  "Le monitoring proactif nous a évité plusieurs pannes. 
                  Nous sommes alertés avant même que les utilisateurs ne s'en aperçoivent."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">Julie Dubois</p>
                    <p className="text-sm text-gray-600">DSI - FinanceCorpo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sécurisez Vos Solutions IA
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Support expert, monitoring 24/7 et maintenance proactive
          </p>
          
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Choisir mon plan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
