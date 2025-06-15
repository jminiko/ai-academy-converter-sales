
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PolitiqueQualite = () => {
  const engagements = [
    {
      icon: Target,
      titre: "Excellence Pédagogique",
      description: "Formations conçues par des experts, mises à jour en permanence avec les dernières innovations IA",
      indicateurs: ["98% de satisfaction", "95% de certification", "Contenu mis à jour mensuellement"]
    },
    {
      icon: Users,
      titre: "Accompagnement Personnalisé",
      description: "Suivi individualisé de chaque apprenant avec mentoring dédié et support réactif",
      indicateurs: ["1 mentor par 15 apprenants", "Support < 2h", "Suivi post-formation 6 mois"]
    },
    {
      icon: TrendingUp,
      titre: "Amélioration Continue",
      description: "Processus d'amélioration basé sur les retours apprenants et l'évolution technologique",
      indicateurs: ["Feedback mensuel", "Évolution trimestrielle", "Veille technologique quotidienne"]
    },
    {
      icon: Award,
      titre: "Certification Reconnue",
      description: "Certifications officielles reconnues par l'industrie et les organismes de formation",
      indicateurs: ["Certifié Qualiopi", "Partenaire OpenAI", "ISO 9001:2015"]
    }
  ];

  const processus = [
    {
      etape: "1",
      titre: "Analyse des Besoins",
      description: "Évaluation précise des compétences et objectifs de l'apprenant",
      details: ["Test de positionnement", "Entretien personnalisé", "Définition du parcours"]
    },
    {
      etape: "2", 
      titre: "Formation Sur-Mesure",
      description: "Délivrance de contenus adaptés avec mise en pratique intensive",
      details: ["Modules interactifs", "Projets concrets", "Évaluation continue"]
    },
    {
      etape: "3",
      titre: "Certification",
      description: "Validation des compétences acquises par des experts reconnus",
      details: ["Examen pratique", "Projet de fin", "Certification officielle"]
    },
    {
      etape: "4",
      titre: "Suivi Post-Formation",
      description: "Accompagnement dans la mise en application en entreprise",
      details: ["Sessions de suivi", "Support technique", "Mise à jour des compétences"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Politique Qualité
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre engagement pour l'excellence dans la formation IA. Des standards 
            élevés, une amélioration continue et la satisfaction client au cœur de nos priorités.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Télécharger notre manuel qualité
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Engagements Qualité</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quatre piliers fondamentaux qui guident notre approche de la formation 
              et garantissent l'excellence de nos services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {engagements.map((engagement, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <engagement.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{engagement.titre}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{engagement.description}</p>
                  <h4 className="font-semibold mb-2">Indicateurs de performance :</h4>
                  <ul className="space-y-1">
                    {engagement.indicateurs.map((indicateur, indIndex) => (
                      <li key={indIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {indicateur}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Notre Processus Qualité</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processus.map((etape, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {etape.etape}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{etape.titre}</h3>
                    <p className="text-gray-600 text-sm mb-4">{etape.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {etape.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center">
                          <Star className="h-3 w-3 text-blue-500 mr-1" />
                          {detail}
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
                <CardTitle>Certifications & Agréments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-800">Certifié</Badge>
                  <span className="font-semibold">Qualiopi</span>
                  <span className="text-gray-600">- Certification nationale qualité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-blue-100 text-blue-800">Partenaire</Badge>
                  <span className="font-semibold">OpenAI</span>
                  <span className="text-gray-600">- Formation officielle GPT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-purple-100 text-purple-800">Certifié</Badge>
                  <span className="font-semibold">ISO 9001:2015</span>
                  <span className="text-gray-600">- Management de la qualité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-orange-100 text-orange-800">Membre</Badge>
                  <span className="font-semibold">CPNFP</span>
                  <span className="text-gray-600">- Commission Paritaire Formation</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Indicateurs de Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Taux de satisfaction</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                    <span className="font-semibold">98%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Taux de certification</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="font-semibold">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Retour à l'emploi</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                    <span className="font-semibold">87%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Temps de support</span>
                  <div className="flex items-center">
                    <span className="font-semibold text-green-600">< 2h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Amélioration Continue</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre démarche qualité s'appuie sur l'écoute permanente de nos clients et 
            l'évolution constante de nos pratiques pédagogiques.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📊
              </div>
              <h3 className="font-semibold mb-2">Mesure</h3>
              <p className="text-gray-600 text-sm">Collecte systématique des retours et métriques de performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🔍
              </div>
              <h3 className="font-semibold mb-2">Analyse</h3>
              <p className="text-gray-600 text-sm">Évaluation approfondie des données et identification des axes d'amélioration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🚀
              </div>
              <h3 className="font-semibold mb-2">Action</h3>
              <p className="text-gray-600 text-sm">Mise en œuvre des améliorations et suivi de leur efficacité</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/contact">
              Participer à notre démarche qualité
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PolitiqueQualite;
