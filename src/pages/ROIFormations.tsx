
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Target, Award, Calculator, CheckCircle, ArrowRight, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const ROIFormations = () => {
  const roiPhases = [
    {
      phase: "Phase Initiale",
      duration: "0-6 mois",
      description: "Formation et implémentation",
      roi: "ROI négatif",
      color: "bg-red-100 text-red-800"
    },
    {
      phase: "Phase de Décollage", 
      duration: "6-12 mois",
      description: "Seuil de rentabilité",
      roi: "ROI équilibré",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      phase: "Phase d'Accélération",
      duration: "12-24 mois",
      description: "Croissance rapide du ROI",
      roi: "ROI 150-200%",
      color: "bg-green-100 text-green-800"
    },
    {
      phase: "Phase de Maturité",
      duration: "24-36 mois",
      description: "ROI optimal atteint",
      roi: "ROI jusqu'à 300%",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const benefices = [
    {
      titre: "Économies de Temps",
      pourcentage: "95%",
      description: "Les processus automatisés s'exécutent en 5% du temps manuel",
      icon: Clock,
      exemple: "30 min → 2 min"
    },
    {
      titre: "Réduction d'Erreurs", 
      pourcentage: "85%",
      description: "Diminution drastique des erreurs humaines",
      icon: Target,
      exemple: "Conformité améliorée"
    },
    {
      titre: "Optimisation Processus",
      pourcentage: "40%",
      description: "Efficacité supplémentaire par réorganisation",
      icon: TrendingUp,
      exemple: "Workflows repensés"
    },
    {
      titre: "Satisfaction Client",
      pourcentage: "35%",
      description: "Amélioration de l'expérience utilisateur",
      icon: Award,
      exemple: "Service plus rapide"
    }
  ];

  const facteursCles = [
    "Sélection stratégique des processus à automatiser",
    "Adaptation de la formation aux besoins spécifiques", 
    "Culture d'apprentissage continu",
    "Mesure et suivi rigoureux des résultats",
    "Focus sur les tâches répétitives à forte valeur",
    "Intégration de cas d'usage réels de l'entreprise"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">
            📈 ROI Démontrable
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ROI des Formations IA pour l'Automatisation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Investissement stratégique avec un retour sur investissement mesurable et significatif. 
            Nos formations IA visent à former vos équipes pour concevoir et déployer des automatisations performantes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-emerald-600">300%</div>
              <p className="text-gray-600">ROI maximal à 36 mois</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-emerald-600">95%</div>
              <p className="text-gray-600">Économie de temps</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-emerald-600">85%</div>
              <p className="text-gray-600">Réduction d'erreurs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link to="/formations">Voir nos formations</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Calculer mon ROI</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calcul ROI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment Calculer le ROI ?</h2>
            <p className="text-lg text-gray-600">Approche multidimensionnelle pour évaluer l'investissement</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="text-center mb-6">
                <Calculator className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Formule ROI Enrichie</h3>
                <div className="text-xl font-mono bg-gray-100 p-4 rounded-lg">
                  ROI = [(Bénéfices - Coûts) / Coûts] × 100%
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Coûts à Considérer :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Frais de formation directs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Temps des employés</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Infrastructure et logiciels</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Adaptation des processus</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Bénéfices Mesurables :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Économies de temps</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Réduction des erreurs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Optimisation des processus</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Amélioration satisfaction client</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bénéfices Principaux */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bénéfices Principaux des Formations IA</h2>
            <p className="text-lg text-gray-600">Impact mesurable sur votre organisation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefices.map((benefice, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefice.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{benefice.titre}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600">{benefice.pourcentage}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{benefice.description}</p>
                  <Badge variant="outline">{benefice.exemple}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chronologie ROI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Chronologie du ROI</h2>
            <p className="text-lg text-gray-600">Évolution du retour sur investissement dans le temps</p>
          </div>

          <div class="max-w-4xl mx-auto">
            <div className="space-y-6">
              {roiPhases.map((phase, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{phase.phase}</CardTitle>
                          <p className="text-gray-600">{phase.duration}</p>
                        </div>
                      </div>
                      <Badge className={phase.color}>{phase.roi}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facteurs Clés */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Facteurs Clés pour Maximiser le ROI</h2>
            <p className="text-lg text-gray-600">Stratégies pour optimiser votre retour sur investissement</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facteursCles.map((facteur, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{facteur}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Maximiser Votre ROI ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Nos formations IA générent un ROI moyen de 280% en 24 mois. 
            Rejoignez les entreprises qui transforment leur efficacité opérationnelle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
              <Link to="/formations">
                Voir nos formations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600" asChild>
              <Link to="/roi-etudes-cas">Études de cas ROI</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ROIFormations;
