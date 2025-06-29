
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Stethoscope, Brain, Pill, Users, Shield, Microscope } from "lucide-react";

const Sante = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour la Santé</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez les soins de santé avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-cyan-500/30 text-white px-4 py-2 text-lg mb-6">
            🏥 Healthcare Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Diagnostic Assisté</h3>
              <p className="text-sm text-gray-600">Précision médicale</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Imagerie Médicale</h3>
              <p className="text-sm text-gray-600">Analyse automatisée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Pill className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Drug Discovery</h3>
              <p className="text-sm text-gray-600">Développement accéléré</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Monitoring Patient</h3>
              <p className="text-sm text-gray-600">Suivi continu</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Santé</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Stethoscope className="h-6 w-6 text-blue-600 mr-2" />
                  Diagnostic Intelligence
                </h3>
                <p className="text-gray-600 mb-4">
                  Assistez les médecins avec des outils de diagnostic alimentés par l'IA
                  pour améliorer la précision et la rapidité des diagnostics.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse d'images médicales (radiologie)</li>
                  <li>• Détection précoce de pathologies</li>
                  <li>• Classification automatique</li>
                  <li>• Aide à la décision clinique</li>
                  <li>• Prédiction de risques</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Medical Imaging</Badge>
                  <Badge variant="outline">Diagnosis</Badge>
                  <Badge variant="outline">Risk Prediction</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-cyan-600 mr-2" />
                  Neurologie et Psychiatrie
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des solutions IA pour les troubles neurologiques
                  et psychiatriques, améliorant le diagnostic et le traitement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse EEG et signaux neurologiques</li>
                  <li>• Détection de troubles cognitifs</li>
                  <li>• Thérapies digitales personnalisées</li>
                  <li>• Prédiction de crises épileptiques</li>
                  <li>• Assistance aux patients Alzheimer</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Neurology</Badge>
                  <Badge variant="outline">Digital Therapy</Badge>
                  <Badge variant="outline">Cognitive Health</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Pill className="h-6 w-6 text-purple-600 mr-2" />
                  Recherche Pharmaceutique
                </h3>
                <p className="text-gray-600 mb-4">
                  Accélérez la découverte de médicaments avec l'IA pour réduire
                  les coûts et délais de développement pharmaceutique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Découverte de molécules candidates</li>
                  <li>• Prédiction d'efficacité et toxicité</li>
                  <li>• Optimisation d'essais cliniques</li>
                  <li>• Repositionnement de médicaments</li>
                  <li>• Médecine personnalisée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Drug Discovery</Badge>
                  <Badge variant="outline">Clinical Trials</Badge>
                  <Badge variant="outline">Personalized Medicine</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-green-600 mr-2" />
                  Santé Publique et Épidémiologie
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'IA pour la surveillance épidémiologique, la prévention
                  et l'amélioration des politiques de santé publique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Surveillance épidémiologique</li>
                  <li>• Prédiction d'épidémies</li>
                  <li>• Allocation de ressources</li>
                  <li>• Analyse de données populationnelles</li>
                  <li>• Optimisation des interventions</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Epidemiology</Badge>
                  <Badge variant="outline">Public Health</Badge>
                  <Badge variant="outline">Population Analytics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Santé du Futur</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme la médecine avec des solutions innovantes pour
              améliorer les soins, accélérer la recherche et sauver des vies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Heart className="mr-2 h-5 w-5" />
                Solutions Santé IA
              </Button>
              <Button size="lg" variant="outline">
                <Microscope className="mr-2 h-5 w-5" />
                Recherche Médicale
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sante;
