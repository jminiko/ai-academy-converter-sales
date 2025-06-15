
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Target, CheckCircle, Star, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const PolitiqueQualite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Politique Qualité
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre engagement pour l'excellence dans la formation IA et l'accompagnement de nos clients
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Award className="h-4 w-4 mr-2" />
              ISO 9001:2015
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Star className="h-4 w-4 mr-2" />
              Excellence Service
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <CheckCircle className="h-4 w-4 mr-2" />
              Amélioration Continue
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Notre Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Démocratiser l'accès à l'intelligence artificielle par des formations 
                  de qualité et un accompagnement personnalisé.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Nos Valeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Excellence, innovation, transparence et respect de nos engagements 
                  envers chaque client et partenaire.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Notre Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Être le leader français de la formation IA en accompagnant 
                  la transformation digitale des entreprises.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Engagement Qualité
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Twenty One Talents s'engage à fournir des services de formation et de conseil 
                  en intelligence artificielle de la plus haute qualité. Cette politique qualité 
                  définit notre approche systématique pour garantir la satisfaction de nos clients 
                  et l'amélioration continue de nos prestations.
                </p>
                <h3 className="font-semibold mb-3">Nos Engagements :</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Respecter et dépasser les attentes de nos clients</li>
                  <li>Maintenir la conformité avec les standards ISO 9001:2015</li>
                  <li>Assurer la formation continue de nos équipes</li>
                  <li>Innover constamment dans nos méthodes pédagogiques</li>
                  <li>Mesurer et améliorer en permanence nos performances</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Objectifs Qualité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Satisfaction Client</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Taux de satisfaction ≥ 95%
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        NPS (Net Promoter Score) ≥ 70
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Taux de recommandation ≥ 90%
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Performance Opérationnelle</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Respect des délais à 100%
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Taux d'annulation &lt; 5%
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Résolution réclamations &lt; 48h
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processus Qualité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">1. Conception des Formations</h3>
                    <p className="text-gray-700 mb-2">
                      Analyse des besoins marché, validation par des experts, tests pilotes
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        Chaque nouvelle formation suit un processus de validation en 5 étapes : 
                        analyse, conception, révision experte, test pilote, et lancement.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">2. Sélection des Formateurs</h3>
                    <p className="text-gray-700 mb-2">
                      Critères stricts de sélection, certification interne, évaluation continue
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        Nos formateurs sont certifiés avec minimum 5 ans d'expérience et 
                        suivent 40h de formation continue annuelle.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">3. Délivrance des Services</h3>
                    <p className="text-gray-700 mb-2">
                      Supports actualisés, environnements techniques optimaux, suivi personnalisé
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-800">
                        Ratio formateur/apprenant de 1:12 maximum pour garantir 
                        un accompagnement individualisé optimal.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Amélioration Continue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Mesure et Analyse</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Évaluations à chaud et à froid</li>
                      <li>• Enquêtes de satisfaction trimestrielles</li>
                      <li>• Indicateurs de performance (KPI)</li>
                      <li>• Audits qualité internes et externes</li>
                      <li>• Revues de direction mensuelles</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Actions d'Amélioration</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Plans d'action correctifs</li>
                      <li>• Mise à jour des contenus</li>
                      <li>• Formation des équipes</li>
                      <li>• Investissements technologiques</li>
                      <li>• Certification des processus</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certifications et Conformité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">ISO 9001:2015</h4>
                    <p className="text-sm text-gray-600">Management Qualité</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Qualiopi</h4>
                    <p className="text-sm text-gray-600">Qualité Formation</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold">RGPD</h4>
                    <p className="text-sm text-gray-600">Protection Données</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Nos certifications sont auditées annuellement par des organismes 
                  indépendants pour garantir le maintien de nos standards de qualité.
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Notre Promesse Qualité</h3>
              <p className="text-lg mb-6">
                "Votre satisfaction est notre priorité absolue. Nous nous engageons 
                à vous accompagner vers l'excellence avec des formations IA de qualité mondiale."
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" asChild>
                  <Link to="/contact">
                    <FileText className="h-4 w-4 mr-2" />
                    Nous contacter
                  </Link>
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/certification-iso">
                    <Award className="h-4 w-4 mr-2" />
                    Voir nos certifications
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PolitiqueQualite;
