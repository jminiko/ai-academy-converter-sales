
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, Heart, Zap, Target, TrendingUp, Database, Shield } from "lucide-react";

const IABiotechnologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Microscope className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Biotechnologie</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            L'intelligence artificielle révolutionne la biotechnologie moderne.
            Découverte de médicaments, analyse génétique et médecine personnalisée.
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            🧬 BioTech Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Dna className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Analyse Génomique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Séquençage et interprétation de l'ADN par IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Drug Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accélération de la découverte de médicaments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Médecine Personnalisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Traitements adaptés au profil génétique</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Microscope className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Imagerie Médicale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Diagnostic automatisé par vision IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Biobanques Intelligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Gestion optimisée des données biologiques</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Épidémiologie Prédictive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Modélisation des épidémies et pandémies</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications Révolutionnaires</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  Découverte de Médicaments IA
                </h3>
                <p className="text-gray-600 mb-4">
                  L'IA accélère la découverte de nouveaux médicaments en analysant 
                  millions de molécules et prédisant leur efficacité thérapeutique.
                  Réduction des délais de développement de 10-15 ans à 3-5 ans.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Screening virtuel de millions de composés</li>
                  <li>• Prédiction de toxicité et effets secondaires</li>
                  <li>• Optimisation des propriétés pharmacologiques</li>
                  <li>• Repositionnement de médicaments existants</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Drug Design</Badge>
                  <Badge variant="outline">Molecular Modeling</Badge>
                  <Badge variant="outline">QSAR</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Dna className="h-6 w-6 text-green-600 mr-2" />
                  Génomique et IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse intelligente du génome humain pour identifier les variants 
                  pathogènes, prédire les maladies génétiques et développer 
                  des thérapies géniques personnalisées.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Annotation automatique des variants</li>
                  <li>• Prédiction de pathogénicité</li>
                  <li>• Analyse d'expression génique</li>
                  <li>• Édition génomique assistée par IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Genomics</Badge>
                  <Badge variant="outline">CRISPR</Badge>
                  <Badge variant="outline">Variant Analysis</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-red-600 mr-2" />
                  Médecine de Précision
                </h3>
                <p className="text-gray-600 mb-4">
                  Traitements personnalisés basés sur le profil génétique, 
                  métabolique et environnemental du patient. L'IA optimise 
                  le choix thérapeutique et les dosages.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Stratification de patients</li>
                  <li>• Biomarqueurs prédictifs</li>
                  <li>• Pharmacogénomique</li>
                  <li>• Oncologie personnalisée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Precision Medicine</Badge>
                  <Badge variant="outline">Biomarkers</Badge>
                  <Badge variant="outline">Personalized Therapy</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Microscope className="h-6 w-6 text-purple-600 mr-2" />
                  Diagnostic IA Avancé
                </h3>
                <p className="text-gray-600 mb-4">
                  Systèmes de diagnostic automatisé utilisant l'imagerie médicale, 
                  l'analyse de biomarqueurs et les données cliniques pour 
                  détecter précocement les pathologies.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Radiologie assistée par IA</li>
                  <li>• Pathologie numérique</li>
                  <li>• Analyse de biomarqueurs liquides</li>
                  <li>• Diagnostic différentiel automatisé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Medical Imaging</Badge>
                  <Badge variant="outline">Digital Pathology</Badge>
                  <Badge variant="outline">Biomarker Analysis</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Impact sur l'Innovation BioTech</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <div className="text-gray-600">Réduction temps R&D</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5x</div>
                <div className="text-gray-600">Vitesse de découverte</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                <div className="text-gray-600">Précision diagnostique</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">$100B+</div>
                <div className="text-gray-600">Économies potentielles</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Rejoignez la Révolution BioTech</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explorez comment l'IA transforme la biotechnologie et découvrez 
              les opportunités d'innovation dans votre domaine de recherche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Microscope className="mr-2 h-5 w-5" />
                Explorer les Solutions
              </Button>
              <Button size="lg" variant="outline">
                <Dna className="mr-2 h-5 w-5" />
                Recherche Partenaires
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
