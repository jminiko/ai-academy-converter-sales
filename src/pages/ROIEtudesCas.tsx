
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Heart, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  Euro,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const ROIEtudesCas = () => {
  const etudesCas = [
    {
      secteur: "Secteur Financier",
      entreprise: "Banque Régionale Premium",
      icon: Building2,
      couleur: "blue",
      participants: 15,
      investissement: "100 000€",
      duree: "24 mois",
      roi: "280%",
      economiesRealisees: "380 000€",
      benefices: [
        {
          metric: "Temps de traitement",
          avant: "100%",
          apres: "30%", 
          reduction: "70%",
          description: "Processus de vérification conformité"
        },
        {
          metric: "Taux d'erreurs",
          avant: "12%",
          apres: "1.8%",
          reduction: "85%",
          description: "Erreurs dans les contrôles"
        },
        {
          metric: "Coût opérationnel",
          avant: "45 000€/mois",
          apres: "18 000€/mois",
          reduction: "60%",
          description: "Économies mensuelles moyennes"
        }
      ],
      processusAutomatises: [
        "Vérification automatique de conformité KYC",
        "Traitement intelligent des demandes de crédit",
        "Génération automatisée de rapports réglementaires",
        "Détection de fraudes en temps réel"
      ],
      resultatsQualitatifs: [
        "Amélioration de la satisfaction client (+40%)",
        "Réduction du temps de traitement des dossiers",
        "Conformité réglementaire renforcée",
        "Libération des équipes pour conseil client"
      ]
    },
    {
      secteur: "Secteur Santé",
      entreprise: "Groupe Hospitalier Saint-Martin",
      icon: Heart,
      couleur: "green",
      participants: 22,
      investissement: "105 000€",
      duree: "18 mois",
      roi: "200%",
      economiesRealisees: "315 000€",
      benefices: [
        {
          metric: "Capacité de traitement",
          avant: "100%",
          apres: "140%",
          reduction: "+40%",
          description: "Augmentation du nombre de patients traités"
        },
        {
          metric: "Erreurs de planification",
          avant: "8%",
          apres: "3.2%",
          reduction: "60%",
          description: "Erreurs dans la gestion des RDV"
        },
        {
          metric: "Satisfaction patient",
          avant: "72%",
          apres: "97%",
          reduction: "+35%",
          description: "Score de satisfaction global"
        }
      ],
      processusAutomatises: [
        "Planification intelligente des rendez-vous",
        "Traitement automatisé des dossiers patients",
        "Gestion optimisée des ressources médicales",
        "Rappels automatiques et suivi patient"
      ],
      resultatsQualitatifs: [
        "Réduction significative des temps d'attente",
        "Optimisation de l'utilisation des salles",
        "Amélioration du suivi médical",
        "Personnel soignant recentré sur les soins"
      ]
    }
  ];

  const comparatifROI = [
    { periode: "6 mois", banque: "-50%", hopital: "-30%", description: "Phase d'investissement" },
    { periode: "12 mois", banque: "0%", hopital: "20%", description: "Seuil de rentabilité" },
    { periode: "18 mois", banque: "150%", hopital: "200%", description: "Croissance rapide" },
    { periode: "24 mois", banque: "280%", hopital: "300%", description: "ROI optimal" }
  ];

  const facteursClesSucces = [
    {
      facteur: "Formation Adaptée",
      description: "Programme personnalisé selon les besoins métier spécifiques",
      impact: "Essentiel pour l'adoption"
    },
    {
      facteur: "Choix des Processus",
      description: "Sélection stratégique des tâches répétitives à forte valeur",
      impact: "Maximise le ROI initial"
    },
    {
      facteur: "Accompagnement Post-Formation",
      description: "Support technique et méthodologique continu",
      impact: "Garantit la pérennité"
    },
    {
      facteur: "Change Management",
      description: "Gestion de la conduite du changement et adoption",
      impact: "Assure le succès projet"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800">
            📊 Études de Cas Réelles
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ROI Réel : Études de Cas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez les résultats concrets obtenus par nos clients après avoir suivi nos formations IA 
            et implémenté des automatisations. ROI démontrable et bénéfices mesurables.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600">280%</div>
              <p className="text-gray-600">ROI moyen secteur financier</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600">200%</div>
              <p className="text-gray-600">ROI moyen secteur santé</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600">695K€</div>
              <p className="text-gray-600">Économies totales générées</p>
            </div>
          </div>

          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link to="/formations">Reproduire ces résultats</Link>
          </Button>
        </div>
      </section>

      {/* Études de Cas Détaillées */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Études de Cas Détaillées</h2>
            <p className="text-lg text-gray-600">Analyse complète des résultats obtenus</p>
          </div>

          <div className="space-y-16">
            {etudesCas.map((etude, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                {/* En-tête de l'étude */}
                <Card className={`border-2 border-${etude.couleur}-200 mb-8`}>
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <etude.icon className={`h-16 w-16 text-${etude.couleur}-600`} />
                      <div>
                        <CardTitle className="text-2xl">{etude.secteur}</CardTitle>
                        <p className="text-lg text-gray-600">{etude.entreprise}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="text-center">
                        <Users className={`h-8 w-8 text-${etude.couleur}-600 mx-auto mb-2`} />
                        <div className="font-bold">{etude.participants}</div>
                        <p className="text-sm text-gray-600">Participants formés</p>
                      </div>
                      <div className="text-center">
                        <Euro className={`h-8 w-8 text-${etude.couleur}-600 mx-auto mb-2`} />
                        <div className="font-bold">{etude.investissement}</div>
                        <p className="text-sm text-gray-600">Investissement total</p>
                      </div>
                      <div className="text-center">
                        <Clock className={`h-8 w-8 text-${etude.couleur}-600 mx-auto mb-2`} />
                        <div className="font-bold">{etude.duree}</div>
                        <p className="text-sm text-gray-600">Période de mesure</p>
                      </div>
                      <div className="text-center">
                        <TrendingUp className={`h-8 w-8 text-${etude.couleur}-600 mx-auto mb-2`} />
                        <div className="font-bold text-2xl text-green-600">{etude.roi}</div>
                        <p className="text-sm text-gray-600">ROI final</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Métriques détaillées */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {etude.benefices.map((benefice, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle className="text-lg">{benefice.metric}</CardTitle>
                        <p className="text-sm text-gray-600">{benefice.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-red-600">Avant :</span>
                            <span className="font-medium">{benefice.avant}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-600">Après :</span>
                            <span className="font-medium">{benefice.apres}</span>
                          </div>
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between">
                              <span className="font-semibold">Amélioration :</span>
                              <Badge className={`bg-${etude.couleur}-100 text-${etude.couleur}-800`}>
                                {benefice.reduction}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Processus automatisés et résultats qualitatifs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className={`h-6 w-6 text-${etude.couleur}-600 mr-3`} />
                        Processus Automatisés
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {etude.processusAutomatises.map((processus, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className={`h-5 w-5 text-${etude.couleur}-500 mr-3 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{processus}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className={`h-6 w-6 text-${etude.couleur}-600 mr-3`} />
                        Bénéfices Qualitatifs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {etude.resultatsQualitatifs.map((resultat, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className={`h-5 w-5 text-${etude.couleur}-500 mr-3 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{resultat}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {index < etudesCas.length - 1 && <hr className="my-16 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif ROI dans le temps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Évolution du ROI dans le Temps</h2>
            <p className="text-lg text-gray-600">Comparaison de la progression du ROI entre les deux secteurs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">ROI Comparé : Banque vs Hôpital</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Période</th>
                        <th className="text-center py-3">Secteur Financier</th>
                        <th className="text-center py-3">Secteur Santé</th>
                        <th className="text-left py-3">Phase</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparatifROI.map((ligne, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 font-medium">{ligne.periode}</td>
                          <td className="text-center py-3">
                            <Badge className={ligne.banque.includes('-') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                              {ligne.banque}
                            </Badge>
                          </td>
                          <td className="text-center py-3">
                            <Badge className={ligne.hopital.includes('-') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                              {ligne.hopital}
                            </Badge>
                          </td>
                          <td className="py-3 text-gray-600">{ligne.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facteurs clés du succès */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Facteurs Clés du Succès</h2>
            <p className="text-lg text-gray-600">Les éléments déterminants pour reproduire ces résultats</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facteursClesSucces.map((facteur, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{facteur.facteur}</CardTitle>
                  <Badge variant="outline">{facteur.impact}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{facteur.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Reproduisez Ces Résultats dans Votre Entreprise
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            ROI moyen de 240% démontré sur nos 2 dernières études de cas. 
            Commencez par nos formations IA pour développer les compétences d'automatisation de vos équipes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link to="/formations">
                Découvrir nos formations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/contact">Étude personnalisée</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ROIEtudesCas;
