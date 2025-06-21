
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Clock, 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Cog,
  Lightbulb,
  Award,
  Euro,
  Building2,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";

const AvantagesAutomatisation = () => {
  const beneficesQuantifies = [
    {
      titre: "Économies Temps",
      icon: Clock,
      valeur: "95%",
      economieEuros: "75 000€/an",
      exemple: "Rapport mensuel : 8h → 24min",
      couleur: "emerald",
      processus: ["Reporting automatisé", "Saisie données", "Calculs complexes", "Validation qualité"]
    },
    {
      titre: "Réduction Erreurs",
      icon: Target, 
      valeur: "90%",
      economieEuros: "45 000€/an",
      exemple: "Erreurs factures : 15% → 1.5%",
      couleur: "blue",
      processus: ["Contrôles automatisés", "Validation règles", "Détection anomalies", "Correction auto"]
    },
    {
      titre: "Augmentation CA",
      icon: TrendingUp,
      valeur: "35%", 
      economieEuros: "150 000€/an",
      exemple: "Lead conversion : 15% → 52%",
      couleur: "purple",
      processus: ["Lead scoring IA", "Relances auto", "Personnalisation", "Upselling intelligent"]
    },
    {
      titre: "Satisfaction Client",
      icon: Award,
      valeur: "+40%",
      economieEuros: "85 000€/an",
      exemple: "Temps réponse : 2j → 15min",
      couleur: "orange",
      processus: ["Support 24/7", "Réponses instantanées", "Résolution prédictive", "Escalade intelligente"]
    }
  ];

  const casUsageParSecteur = [
    {
      secteur: "BANQUE & FINANCE",
      icon: Building2,
      couleur: "blue",
      roiMoyen: "320%",
      economieAnnuelle: "2.5M€",
      processusAutomatises: [
        "Analyse crédit automatisée → 85% temps économisé",
        "Détection fraude IA → 90% précision",  
        "KYC intelligent → 70% plus rapide",
        "Trading algorithmique → +25% performance",
        "Reporting réglementaire → 95% automatisé",
        "Gestion risques → Temps réel"
      ]
    },
    {
      secteur: "SANTÉ & PHARMACIE", 
      icon: Shield,
      couleur: "green",
      roiMoyen: "280%",
      economieAnnuelle: "1.8M€",
      processusAutomatises: [
        "Planification RDV → +40% capacité",
        "Dossiers patients → 80% temps économisé",
        "Diagnostics assistés → 95% précision",
        "Gestion stocks médicaments → Zéro rupture",
        "Facturation automatique → 90% plus rapide",
        "Suivi patients → Personnalisé 24/7"
      ]
    },
    {
      secteur: "INDUSTRIE & MANUFACTURING",
      icon: Factory,
      couleur: "purple", 
      roiMoyen: "350%",
      economieAnnuelle: "3.2M€",
      processusAutomatises: [
        "Maintenance prédictive → -75% pannes",
        "Contrôle qualité IA → 99.8% précision",
        "Optimisation production → +30% rendement",
        "Gestion supply chain → -50% stocks",
        "Planification automatique → Temps réel",
        "Sécurité intelligente → Zéro accident"
      ]
    },
    {
      secteur: "RETAIL & E-COMMERCE",
      icon: Users,
      couleur: "orange",
      roiMoyen: "290%", 
      economieAnnuelle: "2.1M€",
      processusAutomatises: [
        "Recommandations IA → +45% ventes",
        "Gestion inventaire → -60% surstock",
        "Pricing dynamique → +25% marge",
        "Service client → 24/7 disponible",
        "Marketing personnalisé → +85% engagement",
        "Logistique optimisée → -40% coûts"
      ]
    }
  ];

  const departements = [
    {
      nom: "RESSOURCES HUMAINES",
      processus: [
        "Screening CV → 90% temps économisé",
        "Onboarding automatisé → 75% plus rapide", 
        "Évaluation performance → 100% objectif",
        "Planification congés → Zéro conflit",
        "Formation personnalisée → +60% efficacité"
      ],
      economie: "45 000€/an"
    },
    {
      nom: "FINANCE & COMPTABILITÉ",
      processus: [
        "Rapprochement bancaire → 95% automatisé",
        "Factures fournisseurs → 85% sans intervention",
        "Reporting financier → Temps réel",
        "Contrôle budgétaire → Alertes automatiques",
        "Audit interne → 70% plus efficace"
      ],
      economie: "78 000€/an"
    },
    {
      nom: "VENTES & MARKETING", 
      processus: [
        "Lead qualification → 80% précision",
        "Campagnes personnalisées → +120% ROI",
        "Prévisions ventes → 95% fiabilité",
        "Content marketing → 10x plus rapide",
        "Social media → 24/7 engagement"
      ],
      economie: "95 000€/an"
    },
    {
      nom: "SUPPORT CLIENT",
      processus: [
        "Chatbot intelligent → 80% résolution",
        "Tickets automatiques → Tri instantané",
        "Réponses contextuelles → 90% satisfaction",
        "Escalade prédictive → -60% temps résolution",
        "Feedback analysis → Amélioration continue"
      ],
      economie: "65 000€/an"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section - Focus ROI */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800 text-lg px-6 py-3">
            💡 AUTOMATISATION = RENTABILITÉ IMMÉDIATE
          </Badge>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Automatisez <span className="text-blue-600">TOUT</span>
          </h1>
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Économisez 270 000€/an dès la 1ère année
          </h2>
          <p className="text-2xl text-gray-600 mb-12">
            Nos formations IA permettent d'automatiser <strong>95% des tâches répétitives</strong> dans 
            TOUS les départements. ROI moyen de <strong>350%</strong> prouvé chez 500+ entreprises.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <div className="text-center">
              <div className="text-4xl font-bold">95%</div>
              <p>Tâches automatisables</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">270K€</div>
              <p>Économies annuelles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">350%</div>
              <p>ROI moyen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">2.3M</div>
              <p>Heures économisées</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-xl px-8 py-4" asChild>
              <Link to="/formations">AUTOMATISER MAINTENANT</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-8 py-4" asChild>
              <Link to="/roi-formations">Voir mon ROI personnalisé</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bénéfices Quantifiés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bénéfices Mesurés et Garantis</h2>
            <p className="text-2xl text-gray-600">Chaque automatisation génère des économies immédiates</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beneficesQuantifies.map((benefice, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <benefice.icon className={`h-12 w-12 text-${benefice.couleur}-600 mr-4`} />
                      <div>
                        <CardTitle className="text-2xl">{benefice.titre}</Car
                        <div className="text-4xl font-bold text-green-600">{benefice.economieEuros}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-5xl font-bold text-${benefice.couleur}-600`}>{benefice.valeur}</div>
                      <p className="text-gray-600">amélioration</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-lg font-semibold text-center">{benefice.exemple}</p>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Processus automatisables :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {benefice.processus.map((processus, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className={`h-4 w-4 text-${benefice.couleur}-500 mr-2 flex-shrink-0`} />
                        <span>{processus}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
              <h3 className="text-4xl font-bold mb-4">TOTAL : 355 000€ d'économies annuelles</h3>
              <p className="text-2xl mb-6">En automatisant seulement ces 4 domaines clés</p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-xl px-8 py-4" asChild>
                <Link to="/formations">Commencer mon automatisation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automatisation par Secteur */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Succès Prouvés dans TOUS les Secteurs</h2>
            <p className="text-2xl text-gray-600">Nos clients leaders économisent des millions chaque année</p>
          </div>

          <div className="space-y-12">
            {casUsageParSecteur.map((secteur, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <secteur.icon className={`h-16 w-16 text-${secteur.couleur}-600 mr-6`} />
                      <div>
                        <CardTitle className="text-3xl">{secteur.secteur}</CardTitle>
                        <p className="text-lg text-gray-600 mt-2">Économies annuelles : {secteur.economieAnnuelle}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-5xl font-bold text-${secteur.couleur}-600`}>{secteur.roiMoyen}</div>
                      <p className="text-gray-600">ROI moyen</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {secteur.processusAutomatises.map((processus, idx) => (
                      <div key={idx} className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                        <CheckCircle className={`h-5 w-5 text-${secteur.couleur}-500 mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-sm font-medium">{processus}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automatisation par Département */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chaque Département Économise des Milliers</h2>
            <p className="text-2xl text-gray-600">Automatisation transversale = ROI maximisé</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departements.map((dept, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-green-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{dept.nom}</CardTitle>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{dept.economie}</div>
                      <p className="text-sm text-gray-600">économies</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dept.processus.map((processus, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{processus}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
              <h3 className="text-4xl font-bold mb-4">283 000€ d'économies annuelles</h3>
              <p className="text-2xl mb-6">Juste en automatisant ces 4 départements clés</p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-8 py-4" asChild>
                <Link to="/formations">Former mes équipes maintenant</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Ultra-Motivant */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            🎯 VOTRE CONCURRENCE AUTOMATISE DÉJÀ
          </h2>
          <h3 className="text-4xl font-bold text-yellow-300 mb-8">
            Prenez 2 ans d'avance MAINTENANT
          </h3>
          <p className="text-2xl text-white mb-8 max-w-4xl mx-auto">
            Pendant que vous réfléchissez, vos concurrents économisent <strong>300 000€/an</strong> 
            et gagnent <strong>35%</strong> de parts de marché grâce à l'automatisation IA.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-white">
            <div className="bg-white/20 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-300">24h</div>
              <p className="text-xl">pour prendre votre décision</p>
            </div>
            <div className="bg-white/20 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-300">90 jours</div>
              <p className="text-xl">pour voir les premiers résultats</p>
            </div>
            <div className="bg-white/20 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-300">2 ans</div>
              <p className="text-xl">d'avance sur la concurrence</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-2xl px-12 py-6 animate-pulse" asChild>
              <Link to="/formations">
                🚀 COMMENCER L'AUTOMATISATION <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-6" asChild>
              <Link to="/contact">Audit gratuit de mes processus</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AvantagesAutomatisation;
