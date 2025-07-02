
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Users, Shield, Stethoscope, MessageCircle, TrendingUp, Eye } from "lucide-react";

const FormationIASanteMentale = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Santé Mentale</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez les soins de santé mentale avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-rose-500/30 text-white px-4 py-2 text-lg mb-6">
            🧠 Mental Health AI & Digital Therapeutics
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <MessageCircle className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Thérapie Digitale</h3>
              <p className="text-sm text-gray-600">Chatbots thérapeutiques</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Précoce</h3>
              <p className="text-sm text-gray-600">Signaux comportementaux</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Suivi Continu</h3>
              <p className="text-sm text-gray-600">Monitoring émotionnel</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prévention Suicide</h3>
              <p className="text-sm text-gray-600">Intervention d'urgence</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">IA au Service du Bien-être Mental</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageCircle className="h-6 w-6 text-pink-600 mr-2" />
                  Thérapies Numériques
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des solutions d'accompagnement thérapeutique basées
                  sur l'IA pour soutenir les patients en santé mentale.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chatbots thérapeutiques empathiques</li>
                  <li>• Thérapie cognitive comportementale (TCC) digitale</li>
                  <li>• Interventions personnalisées adaptatives</li>
                  <li>• Exercices de mindfulness et méditation IA</li>
                  <li>• Techniques de gestion du stress automatisées</li>
                  <li>• Support 24/7 en cas de crise</li>
                  <li>• Thérapie d'exposition virtuelle (VR)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Digital CBT</Badge>
                  <Badge variant="outline">Therapeutic AI</Badge>
                  <Badge variant="outline">VR Therapy</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-rose-600 mr-2" />
                  Détection et Diagnostic
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'IA pour identifier précocement les signes de
                  troubles mentaux et améliorer le diagnostic différentiel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse comportementale multimodale</li>
                  <li>• Détection de la dépression par NLP</li>
                  <li>• Reconnaissance émotionnelle faciale</li>
                  <li>• Analyse des patterns de sommeil</li>
                  <li>• Biomarqueurs digitaux de stress</li>
                  <li>• Screening automatisé des troubles</li>
                  <li>• Prédiction des épisodes maniaques/dépressifs</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Emotion Recognition</Badge>
                  <Badge variant="outline">Behavioral Analysis</Badge>
                  <Badge variant="outline">Digital Biomarkers</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                  Monitoring et Suivi
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes de surveillance continue pour
                  traquer l'évolution de l'état mental des patients.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Wearables pour monitoring physiologique</li>
                  <li>• Analyse de l'activité smartphone</li>
                  <li>• Tracking des habitudes et routines</li>
                  <li>• Échelles d'évaluation automatisées</li>
                  <li>• Prédiction des rechutes</li>
                  <li>• Alertes pour les proches et thérapeutes</li>
                  <li>• Rapports de progression intelligents</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Continuous Monitoring</Badge>
                  <Badge variant="outline">Wearable Tech</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-indigo-600 mr-2" />
                  Prévention et Intervention
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des systèmes d'intervention d'urgence et de prévention
                  pour les situations de crise en santé mentale.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection du risque suicidaire</li>
                  <li>• Intervention de crise automatisée</li>
                  <li>• Réseaux de support social IA</li>
                  <li>• Programmes de prévention personnalisés</li>
                  <li>• Éducation thérapeutique interactive</li>
                  <li>• Accompagnement des aidants</li>
                  <li>• Plateformes communautaires de soutien</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Crisis Intervention</Badge>
                  <Badge variant="outline">Suicide Prevention</Badge>
                  <Badge variant="outline">Community Support</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Écosystème de Santé Mentale Numérique</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Diagnostic Assisté</h4>
                <p className="text-sm text-gray-600">IA pour l'aide au diagnostic</p>
              </div>
              <div className="text-center">
                <div className="bg-rose-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Neurofeedback</h4>
                <p className="text-sm text-gray-600">Entraînement cérébral personnalisé</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Thérapie de Groupe</h4>
                <p className="text-sm text-gray-600">Sessions virtuelles intelligentes</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Bien-être Holistique</h4>
                <p className="text-sm text-gray-600">Approche intégrée corps-esprit</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Technologie au Service de l'Humain</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA en santé mentale démocratise l'accès aux soins psychologiques
              tout en préservant l'empathie et la dimension humaine du soin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Heart className="mr-2 h-5 w-5" />
                Formation Santé Mentale IA
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
                Solutions Thérapeutiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIASanteMentale;
