
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Target, Award, Calculator, CheckCircle, ArrowRight, BarChart3, Euro, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const ROIFormations = () => {
  const roiParDepartement = [
    {
      departement: "Ressources Humaines",
      automatisations: ["Screening CV automatique", "Onboarding digital", "Évaluation performance IA"],
      economieTemps: "85%",
      economieAnnuelle: "45 000€",
      roiMois: 6
    },
    {
      departement: "Finance & Comptabilité", 
      automatisations: ["Rapprochement bancaire", "Factures intelligentes", "Reporting automatisé"],
      economieTemps: "90%",
      economieAnnuelle: "78 000€",
      roiMois: 4
    },
    {
      departement: "Ventes & Marketing",
      automatisations: ["Lead scoring IA", "Campagnes personnalisées", "Chatbots clients"],
      economieTemps: "70%", 
      economieAnnuelle: "95 000€",
      roiMois: 3
    },
    {
      departement: "Support Client",
      automatisations: ["Tickets automatiques", "Réponses intelligentes", "Escalade prédictive"],
      economieTemps: "80%",
      economieAnnuelle: "65 000€",
      roiMois: 5
    },
    {
      departement: "IT & Tech",
      automatisations: ["Monitoring intelligent", "Déploiements auto", "Tests automatisés"],
      economieTemps: "95%",
      economieAnnuelle: "120 000€",
      roiMois: 2
    },
    {
      departement: "Juridique",
      automatisations: ["Analyse contrats", "Veille réglementaire", "Documentation auto"],
      economieTemps: "75%",
      economieAnnuelle: "55 000€",
      roiMois: 7
    }
  ];

  const roiParSecteur = [
    {
      secteur: "Banque & Finance",
      entreprises: ["BNP Paribas", "Société Générale", "Crédit Agricole"],
      roi: "320%",
      duree: "18 mois",
      economie: "2.5M€",
      processus: 45
    },
    {
      secteur: "Santé & Pharmacie",
      entreprises: ["Sanofi", "AP-HP", "Korian"],
      roi: "280%", 
      duree: "24 mois",
      economie: "1.8M€",
      processus: 38
    },
    {
      secteur: "Industrie & Manufacturing",
      entreprises: ["Airbus", "Renault", "Schneider Electric"],
      roi: "350%",
      duree: "20 mois", 
      economie: "3.2M€",
      processus: 52
    },
    {
      secteur: "Retail & E-commerce",
      entreprises: ["Carrefour", "LVMH", "Fnac Darty"],
      roi: "290%",
      duree: "16 mois",
      economie: "2.1M€",
      processus: 41
    }
  ];

  const calculROI = {
    investissement: 15000,
    economiesAnnuelles: 85000,
    roiPremierAnnee: "467%",
    retourInvestissement: "2.1 mois"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      {/* Hero Section - Plus agressif sur le ROI */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
            💰 ROI GARANTI 300%+ en 24 mois
          </Badge>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">467% de ROI</span> dès la 1ère année
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Nos formations IA génèrent en moyenne <strong>85 000€ d'économies annuelles</strong> pour seulement 
            <strong> 15 000€ d'investissement</strong>. Retour sur investissement en moins de 3 mois.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">15 000€</div>
              <p className="text-gray-600">Investissement formation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">85 000€</div>
              <p className="text-gray-600">Économies année 1</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">467%</div>
              <p className="text-gray-600">ROI première année</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">2.1 mois</div>
              <p className="text-gray-600">Retour investissement</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-xl px-8 py-4" asChild>
              <Link to="/formations">INVESTIR MAINTENANT - ROI GARANTI</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-8 py-4" asChild>
              <Link to="/contact">Calculer MON ROI personnalisé</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI par Département */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ROI Prouvé dans TOUS les Départements</h2>
            <p className="text-xl text-gray-600">Chaque département peut économiser des dizaines de milliers d'euros annuellement</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roiParDepartement.map((dept, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl">{dept.departement}</CardTitle>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">{dept.economieAnnuelle}</div>
                      <p className="text-sm text-gray-600">économies/an</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{dept.economieTemps}</div>
                      <p className="text-sm text-gray-600">Temps économisé</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{dept.roiMois} mois</div>
                      <p className="text-sm text-gray-600">Retour investissement</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Automatisations clés :</h4>
                  <ul className="space-y-2">
                    {dept.automatisations.map((auto, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {auto}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">TOTAL : 458 000€ d'économies annuelles</h3>
              <p className="text-xl mb-6">En automatisant seulement 6 départements avec nos formations IA</p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
                <Link to="/formations">Commencer mon automatisation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI par Secteur d'Activité */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ROI Exceptionnel dans TOUS les Secteurs</h2>
            <p className="text-xl text-gray-600">Nos clients leaders génèrent des millions d'économies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roiParSecteur.map((secteur, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                    {secteur.secteur}
                  </CardTitle>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{secteur.roi}</div>
                      <p className="text-sm text-gray-600">ROI moyen</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{secteur.economie}</div>
                      <p className="text-sm text-gray-600">Économies totales</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">{secteur.processus}</div>
                      <p className="text-sm text-gray-600">Processus automatisés</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Entreprises clientes :</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {secteur.entreprises.map((entreprise, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {entreprise}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                    <p className="text-lg font-semibold">ROI atteint en {secteur.duree}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculateur ROI Interactif */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Votre ROI Personnel</h2>
            
            <Card className="p-8 border-4 border-green-500">
              <CardHeader>
                <Calculator className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl">Simulation ROI - Entreprise Type (50 employés)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-red-50 rounded-lg">
                      <h3 className="text-xl font-bold text-red-600 mb-4">COÛTS (Une seule fois)</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Formation 10 personnes</span>
                          <span className="font-bold">15 000€</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-bold">TOTAL INVESTISSEMENT</span>
                          <span className="font-bold text-2xl text-red-600">15 000€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <h3 className="text-xl font-bold text-green-600 mb-4">GAINS (Chaque année)</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Économies temps (5h/jour/personne)</span>
                          <span className="font-bold">65 000€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Réduction erreurs (90%)</span>
                          <span className="font-bold">15 000€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Nouveaux revenus</span>
                          <span className="font-bold">25 000€</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-bold">TOTAL ANNUEL</span>
                          <span className="font-bold text-2xl text-green-600">105 000€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl">
                  <h3 className="text-4xl font-bold mb-4">ROI : 600% dès la première année</h3>
                  <p className="text-2xl mb-4">Retour sur investissement en 1.7 mois</p>
                  <p className="text-xl">Gain net : 90 000€ la première année, puis 105 000€/an</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final Ultra-Incitative */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            🚀 INVESTISSEZ 15 000€ AUJOURD'HUI
          </h2>
          <h3 className="text-4xl font-bold text-yellow-300 mb-8">
            ÉCONOMISEZ 105 000€ DÈS LA 1ÈRE ANNÉE
          </h3>
          <p className="text-2xl text-white mb-8 max-w-4xl mx-auto">
            ⏰ <strong>OFFRE LIMITÉE :</strong> Garantie ROI 300% minimum ou remboursement intégral. 
            Prochaine session dans 15 jours - Plus que 3 places disponibles !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-2xl px-12 py-6 animate-pulse" asChild>
              <Link to="/formations">
                💰 RÉSERVER MA PLACE - ROI GARANTI <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-xl px-8 py-6" asChild>
              <Link to="/contact">Simulation ROI personnalisée GRATUITE</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-300 mr-3" />
              <span className="text-lg">Formation certifiante incluse</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-300 mr-3" />
              <span className="text-lg">Support 6 mois offert</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-300 mr-3" />
              <span className="text-lg">ROI garanti ou remboursé</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ROIFormations;
