
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Cog, TrendingUp, Clock, CheckCircle, ArrowRight, Brain, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Automatisation = () => {
  const automationTypes = [
    {
      icon: Brain,
      title: "Automatisation Cognitive",
      description: "IA pour analyser, comprendre et prendre des décisions complexes",
      examples: ["Analyse de documents", "Classification automatique", "Prise de décision intelligente"],
      roi: "200-400%"
    },
    {
      icon: Cog,
      title: "RPA (Robotic Process Automation)",
      description: "Automatisation des tâches répétitives et des processus métier",
      examples: ["Saisie de données", "Rapports automatiques", "Traitement de factures"],
      roi: "150-300%"
    },
    {
      icon: Zap,
      title: "Automatisation Workflow",
      description: "Orchestration intelligente des processus et des équipes",
      examples: ["Gestion des validations", "Notifications automatiques", "Routage intelligent"],
      roi: "100-250%"
    }
  ];

  const useCases = [
    {
      sector: "Finance & Comptabilité",
      processes: [
        "Traitement automatique des factures",
        "Réconciliation bancaire",
        "Reporting financier automatisé",
        "Détection de fraude par IA"
      ],
      savings: "60% de temps économisé"
    },
    {
      sector: "Ressources Humaines",
      processes: [
        "Tri automatique des CV",
        "Planification des entretiens",
        "Onboarding automatisé",
        "Évaluation des performances"
      ],
      savings: "70% de réduction des tâches admin"
    },
    {
      sector: "Service Client",
      processes: [
        "Chatbots intelligents",
        "Routage automatique des tickets",
        "Réponses automatisées",
        "Analyse de sentiment"
      ],
      savings: "80% de requêtes traitées automatiquement"
    },
    {
      sector: "Marketing & Ventes",
      processes: [
        "Lead scoring automatique",
        "Personnalisation de contenu",
        "Campagnes automatisées",
        "Analyse prédictive"
      ],
      savings: "50% d'augmentation des conversions"
    }
  ];

  const tools = [
    {
      category: "Outils No-Code",
      tools: ["Zapier", "Make.com", "Microsoft Power Automate", "Integromat"],
      level: "Accessible à tous"
    },
    {
      category: "Plateformes IA",
      tools: ["OpenAI API", "Azure Cognitive Services", "Google Cloud AI", "AWS AI Services"],
      level: "Niveau intermédiaire"
    },
    {
      category: "Solutions RPA",
      tools: ["UiPath", "Blue Prism", "Automation Anywhere", "Power Platform"],
      level: "Niveau avancé"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            ⚡ Solutions d'Automatisation IA
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Automatisation Intelligente pour Entreprises Modernes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Libérez le potentiel de vos équipes en automatisant les tâches répétitives 
            avec l'intelligence artificielle. Gagnez jusqu'à 70% de productivité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/contact">Audit gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/formations">Formations automatisation</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">70%</div>
              <p className="text-gray-600">Gain de productivité</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6 mois</div>
              <p className="text-gray-600">ROI atteint en moyenne</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <p className="text-gray-600">Fonctionnement continu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'automatisation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types d'Automatisation
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les différentes approches pour automatiser vos processus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <type.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Exemples d'usage :</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-700">
                      ROI moyen : {type.roi}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage par secteur */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cas d'Usage par Secteur
            </h2>
            <p className="text-xl text-gray-600">
              Solutions d'automatisation adaptées à votre métier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{useCase.sector}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {useCase.processes.map((process, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {process}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-700">
                      📈 Impact : {useCase.savings}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outils et technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Outils et Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Nous maîtrisons tous les outils d'automatisation du marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                  <Badge variant="outline">{category.level}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.tools.map((tool, idx) => (
                      <div key={idx} className="bg-gray-50 p-2 rounded text-sm">
                        {tool}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Méthodologie d'Automatisation
            </h2>
            <p className="text-xl text-gray-600">
              Approche structurée pour maximiser les bénéfices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Audit des Processus</h3>
              <p className="text-sm text-gray-600">Identification des tâches automatisables et calcul du ROI potentiel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Conception Solution</h3>
              <p className="text-sm text-gray-600">Design de l'architecture d'automatisation optimale</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Implémentation</h3>
              <p className="text-sm text-gray-600">Développement et déploiement des automatisations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Optimisation</h3>
              <p className="text-sm text-gray-600">Monitoring et amélioration continue des performances</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Automatiser Votre Entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Audit gratuit de vos processus et estimation du ROI sous 48h
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Audit gratuit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/formations">Formations automatisation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automatisation;
