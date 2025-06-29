
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Activity, Shield, Brain, Target, Users, TrendingUp, BookOpen, Award, Zap, Eye, Microscope, MonitorSpeaker, FileText, Clock, AlertTriangle, Camera, Scan, Database } from "lucide-react";
import { Link } from "react-router-dom";

const IAMedecin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Médecins</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre pratique médicale avec l'intelligence artificielle.
            Diagnostic assisté, médecine prédictive et soins personnalisés.
          </p>
          <Badge variant="secondary" className="bg-cyan-500/30 text-white px-4 py-2 text-lg mb-6">
            🏥 MedTech AI Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnostic Assisté</h3>
              <p className="text-gray-600">IA pour aide à la décision clinique</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring Patient</h3>
              <p className="text-gray-600">Surveillance continue intelligente</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Médecine Prédictive</h3>
              <p className="text-gray-600">Prévention des risques de santé</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thérapie Personnalisée</h3>
              <p className="text-gray-600">Traitement sur mesure par IA</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications IA en Médecine</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Imagerie Médicale IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse automatisée des images médicales avec précision surhumaine
                  pour détecter précocement les pathologies.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection automatique des cancers</li>
                  <li>• Analyse radiologique avancée</li>
                  <li>• Scanner et IRM intelligents</li>
                  <li>• Ophtalmologie prédictive</li>
                  <li>• Dermatologie automatisée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">Radiologie</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Diagnostic Différentiel
                </h3>
                <p className="text-gray-600 mb-4">
                  Système d'aide au diagnostic basé sur l'analyse des symptômes
                  et l'historique médical du patient.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse des symptômes complexes</li>
                  <li>• Recommandations diagnostiques</li>
                  <li>• Scores de risque personnalisés</li>
                  <li>• Interactions médicamenteuses</li>
                  <li>• Guidelines médicales intégrées</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NLP Médical</Badge>
                  <Badge variant="outline">Expert System</Badge>
                  <Badge variant="outline">Clinical AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-green-600 mr-2" />
                  Dossier Patient Intelligent
                </h3>
                <p className="text-gray-600 mb-4">
                  Gestion intelligente des dossiers médicaux avec extraction
                  automatique d'informations et alertes prédictives.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Extraction NLP des rapports</li>
                  <li>• Historique médical structuré</li>
                  <li>• Alertes de sécurité automatiques</li>
                  <li>• Suivi longitudinal des patients</li>
                  <li>• Interopérabilité des systèmes</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">EMR</Badge>
                  <Badge variant="outline">Data Mining</Badge>
                  <Badge variant="outline">Healthcare Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Microscope className="h-6 w-6 text-orange-600 mr-2" />
                  Recherche Médicale IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Accélération de la recherche médicale par l'analyse
                  de grandes données et la découverte de nouveaux traitements.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Drug discovery automatisée</li>
                  <li>• Analyse de littérature médicale</li>
                  <li>• Essais cliniques optimisés</li>
                  <li>• Biomarqueurs prédictifs</li>
                  <li>• Médecine génomique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Pharmacologie</Badge>
                  <Badge variant="outline">Génomique</Badge>
                  <Badge variant="outline">Clinical Trials</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Bénéfices de l'IA Médicale</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Précision Diagnostique</h3>
                <p className="text-sm text-gray-600">+95% de précision dans certains diagnostics</p>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Gain de Temps</h3>
                <p className="text-sm text-gray-600">-60% de temps d'analyse des examens</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Soins Personnalisés</h3>
                <p className="text-sm text-gray-600">Traitement adapté à chaque patient</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez votre Pratique Médicale</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de médecins qui utilisent déjà l'IA pour améliorer
              leurs diagnostics, optimiser leurs traitements et sauver plus de vies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/formation-ia-chirurgie">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Heart className="mr-2 h-5 w-5" />
                  Formation IA Médicale
                </Button>
              </Link>
              <Link to="/demo-interactive">
                <Button size="lg" variant="outline">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Démonstration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAMedecin;
