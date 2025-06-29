
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, FlaskConical, Activity, Target, Zap, Heart, Brain } from "lucide-react";

const IABiotechnologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Dna className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Biotechnologie</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la recherche biotechnologique avec l'intelligence artificielle.
            Drug discovery, génomique et médecine personnalisée de nouvelle génération.
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            🧬 BioTech AI Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <FlaskConical className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Drug Discovery IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accélération de la découverte de médicaments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Dna className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Génomique Computationnelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Analyse des séquences génétiques par IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Médecine Personnalisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Traitements sur mesure basés sur l'IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Microscope className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Imagerie Biomédicale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Analyse d'images microscopiques par deep learning</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Biomarqueurs IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Identification de biomarqueurs prédictifs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Thérapies Ciblées</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Développement de thérapies précises</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications Révolutionnaires</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FlaskConical className="h-6 w-6 text-green-600 mr-2" />
                  Drug Discovery & Development
                </h3>
                <p className="text-gray-600 mb-4">
                  L'IA transforme la découverte de médicaments en prédisant les interactions
                  moléculaires, optimisant les composés et accélérant les essais cliniques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction d'activité biologique</li>
                  <li>• Optimisation de lead compounds</li>
                  <li>• Simulation d'essais cliniques</li>
                  <li>• Repositionnement de médicaments</li>
                  <li>• Prédiction de toxicité</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Molecular Modeling</Badge>
                  <Badge variant="outline">QSAR</Badge>
                  <Badge variant="outline">Virtual Screening</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Dna className="h-6 w-6 text-blue-600 mr-2" />
                  Génomique & Proteomique
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse massive des données omiques avec deep learning pour
                  comprendre les mécanismes biologiques fondamentaux.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Séquençage génomique haute débit</li>
                  <li>• Annotation fonctionnelle automatique</li>
                  <li>• Prédiction de structure protéique</li>
                  <li>• Analyse d'expression génique</li>
                  <li>• Génomique comparative</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NGS Analysis</Badge>
                  <Badge variant="outline">Protein Folding</Badge>
                  <Badge variant="outline">Gene Expression</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-red-600 mr-2" />
                  Médecine de Précision
                </h3>
                <p className="text-gray-600 mb-4">
                  Personnalisation des traitements basée sur le profil génétique,
                  l'historique médical et les données environnementales du patient.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Pharmacogénomique personnalisée</li>
                  <li>• Prédiction de réponse thérapeutique</li>
                  <li>• Stratification de patients</li>
                  <li>• Biomarqueurs compagnons</li>
                  <li>• Thérapies cellulaires sur mesure</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Pharmacogenomics</Badge>
                  <Badge variant="outline">Companion Diagnostics</Badge>
                  <Badge variant="outline">Patient Stratification</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Bioinformatique Avancée
                </h3>
                <p className="text-gray-600 mb-4">
                  Intégration et analyse de données biologiques complexes
                  avec algorithmes d'IA pour découvertes scientifiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Réseaux biologiques complexes</li>
                  <li>• Modélisation systémique</li>
                  <li>• Prédiction d'interactions</li>
                  <li>• Analyse pathway enrichment</li>
                  <li>• Multi-omics integration</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Systems Biology</Badge>
                  <Badge variant="outline">Network Analysis</Badge>
                  <Badge variant="outline">Multi-omics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Impact Révolutionnaire</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-gray-600">Réduction temps développement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
                <div className="text-gray-600">Accélération découvertes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-gray-600">Amélioration précision</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">$2B</div>
                <div className="text-gray-600">Économies R&D annuelles</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez la Biotechnologie</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment l'IA transforme la recherche biotechnologique
              et accélère les découvertes médicales de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Dna className="mr-2 h-5 w-5" />
                Découvrir nos Solutions
              </Button>
              <Button size="lg" variant="outline">
                <Microscope className="mr-2 h-5 w-5" />
                Études de Cas
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IABiotechnologie;
