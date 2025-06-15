
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileCheck, Shield, Users, CheckCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CertificationISO = () => {
  const certifications = [
    {
      norme: "ISO 9001:2015",
      titre: "Management de la Qualité",
      statut: "Certifié",
      dateObtention: "Mars 2023",
      validiteJusqu: "Mars 2026",
      organisme: "AFNOR Certification",
      description: "Certification du système de management de la qualité pour la formation professionnelle IA",
      avantages: [
        "Processus qualité documentés et maîtrisés",
        "Amélioration continue systématique", 
        "Satisfaction client garantie",
        "Conformité réglementaire assurée"
      ]
    },
    {
      norme: "ISO 27001:2013",
      titre: "Sécurité de l'Information",
      statut: "En cours",
      dateObtention: "Décembre 2024",
      validiteJusqu: "Décembre 2027",
      organisme: "Bureau Veritas",
      description: "Certification de la sécurité des systèmes d'information et protection des données",
      avantages: [
        "Protection optimale des données client",
        "Conformité RGPD renforcée",
        "Sécurité infrastructure garantie",
        "Confiance accrue des partenaires"
      ]
    },
    {
      norme: "ISO 14001:2015",
      titre: "Management Environnemental",
      statut: "Planifié",
      dateObtention: "Juin 2025",
      validiteJusqu: "Juin 2028",
      organisme: "SGS",
      description: "Engagement environnemental pour des formations IA responsables et durables",
      avantages: [
        "Réduction empreinte carbone",
        "Formation 100% digitale",
        "Sensibilisation IA verte",
        "Responsabilité sociétale"
      ]
    }
  ];

  const processus = [
    {
      phase: "Préparation",
      duree: "6 mois",
      description: "Mise en place du système qualité et formation des équipes",
      etapes: [
        "Audit interne initial",
        "Formation des collaborateurs",
        "Documentation des processus",
        "Mise en place des indicateurs"
      ]
    },
    {
      phase: "Audit Initial",
      duree: "2 semaines",
      description: "Évaluation complète par l'organisme certificateur",
      etapes: [
        "Audit documentaire",
        "Audit sur site",
        "Entretiens équipes",
        "Vérification conformité"
      ]
    },
    {
      phase: "Certification",
      duree: "1 mois",
      description: "Délivrance du certificat et communication",
      etapes: [
        "Analyse des résultats",
        "Comité de certification",
        "Délivrance certificat",
        "Communication externe"
      ]
    },
    {
      phase: "Surveillance",
      duree: "3 ans",
      description: "Audits de surveillance et amélioration continue",
      etapes: [
        "Audits semestriels",
        "Actions correctives",
        "Amélioration continue",
        "Renouvellement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certifications ISO
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre engagement pour l'excellence opérationnelle à travers les standards 
            internationaux les plus exigeants. Qualité, sécurité et durabilité certifiées.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Télécharger nos certificats
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Certifications ISO</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un parcours d'excellence qui garantit la qualité de nos formations 
              et la sécurité de vos données.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Shield className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{cert.norme}</CardTitle>
                        <p className="text-lg text-gray-600">{cert.titre}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={
                          cert.statut === "Certifié" ? "bg-green-100 text-green-800" :
                          cert.statut === "En cours" ? "bg-orange-100 text-orange-800" :
                          "bg-blue-100 text-blue-800"
                        }
                      >
                        {cert.statut}
                      </Badge>
                      {cert.statut === "Certifié" && (
                        <p className="text-sm text-gray-500 mt-1">
                          Valide jusqu'en {cert.validiteJusqu}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 mb-4">{cert.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-semibold">Date d'obtention :</span>
                          <span>{cert.dateObtention}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Organisme :</span>
                          <span>{cert.organisme}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Périmètre :</span>
                          <span>Formation professionnelle IA</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Bénéfices de cette certification :</h4>
                      <ul className="space-y-2">
                        {cert.avantages.map((avantage, avIndex) => (
                          <li key={avIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {avantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Processus de Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processus.map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{phase.phase}</h3>
                    <Badge variant="outline" className="mb-3">{phase.duree}</Badge>
                    <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {phase.etapes.map((etape, etapeIndex) => (
                        <li key={etapeIndex} className="flex items-center justify-center">
                          <Target className="h-3 w-3 text-blue-500 mr-1" />
                          {etape}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileCheck className="h-5 w-5 mr-2 text-blue-600" />
                  Documents Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Certificat ISO 9001:2015</span>
                  <Button size="sm" variant="outline">Télécharger</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Manuel Qualité</span>
                  <Button size="sm" variant="outline">Télécharger</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Politique Qualité</span>
                  <Button size="sm" variant="outline">Télécharger</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Rapport d'audit 2024</span>
                  <Button size="sm" variant="outline">Télécharger</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Impact sur nos Clients
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <p className="text-sm text-green-700">Satisfaction client</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <p className="text-sm text-blue-700">Conformité processus</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">0</div>
                  <p className="text-sm text-purple-700">Non-conformité majeure</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Engagement d'Excellence</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos certifications ISO témoignent de notre engagement constant pour 
            l'excellence et la satisfaction de nos clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-semibold mb-2">Qualité Garantie</h3>
              <p className="text-gray-600 text-sm">Processus certifiés pour une formation de haute qualité</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🔒
              </div>
              <h3 className="font-semibold mb-2">Sécurité Renforcée</h3>
              <p className="text-gray-600 text-sm">Protection maximale de vos données et informations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🌱
              </div>
              <h3 className="font-semibold mb-2">Démarche Durable</h3>
              <p className="text-gray-600 text-sm">Engagement environnemental et social responsable</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/contact">
              En savoir plus sur nos certifications
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationISO;
