
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, Heart, Brain, Zap, Target, Users, TrendingUp, Shield, Database, Activity, Beaker, Atom, FlaskConical } from "lucide-react";

const IABiotechnologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Dna className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Biotechnologie</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la recherche biomédicale avec l'intelligence artificielle.
            Drug discovery, génomique et thérapies personnalisées.
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            🧬 BioTech AI Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <FlaskConical className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Drug Discovery</h3>
              <p className="text-sm text-gray-600">Découverte de médicaments IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Dna className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génomique</h3>
              <p className="text-sm text-gray-600">Analyse génétique avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Microscope className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Biologie Computationnelle</h3>
              <p className="text-sm text-gray-600">Modélisation moléculaire IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Médecine Personnalisée</h3>
              <p className="text-sm text-gray-600">Thérapies sur mesure</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications IA en Biotechnologie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FlaskConical className="h-6 w-6 text-blue-600 mr-2" />
                  Drug Discovery & Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Accélération du développement de médicaments grâce à l'IA :
                  prédiction d'efficacité, optimisation moléculaire et tests virtuels.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction d'activité biologique</li>
                  <li>• Optimisation de lead compounds</li>
                  <li>• Prédiction de toxicité ADMET</li>
                  <li>• Virtual screening haute performance</li>
                  <li>• Design rationnel de médicaments</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">QSAR</Badge>
                  <Badge variant="outline">Molecular ML</Badge>
                  <Badge variant="outline">ADMET</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Dna className="h-6 w-6 text-green-600 mr-2" />
                  Génomique & Bioinformatique
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse des données génomiques massives pour identifier
                  biomarqueurs, variants pathogènes et cibles thérapeutiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Séquençage NGS et analyse variants</li>
                  <li>• GWAS et génétique des populations</li>
                  <li>• Prédiction d'expression génique</li>
                  <li>• Analyse multi-omique intégrée</li>
                  <li>• Pharmacogénomique personnalisée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NGS</Badge>
                  <Badge variant="outline">GWAS</Badge>
                  <Badge variant="outline">Multi-omics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Atom className="h-6 w-6 text-purple-600 mr-2" />
                  Structural Biology IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Prédiction de structures protéiques et interactions
                  moléculaires avec AlphaFold et méthodes deep learning.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Protein folding prediction</li>
                  <li>• Protein-protein interactions</li>
                  <li>• Binding site identification</li>
                  <li>• Allosteric site prediction</li>
                  <li>• Molecular dynamics simulation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AlphaFold</Badge>
                  <Badge variant="outline">Structural ML</Badge>
                  <Badge variant="outline">MD Simulation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Beaker className="h-6 w-6 text-orange-600 mr-2" />
                  Bioprocessing & Manufacturing
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisation des processus de production biologique
                  et contrôle qualité par intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Optimisation de fermentation</li>
                  <li>• Contrôle qualité automatisé</li>
                  <li>• Prédiction de rendement</li>
                  <li>• Monitoring temps réel</li>
                  <li>• Maintenance prédictive</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Process Control</Badge>
                  <Badge variant="outline">Quality Control</Badge>
                  <Badge variant="outline">Bioprocessing</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies IA Biotechnologie</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Deep Learning</h3>
                <p className="text-sm text-gray-600">CNN, RNN, Transformers pour bio-séquences</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Big Data Bio</h3>
                <p className="text-sm text-gray-600">Analyse de datasets massifs omiques</p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Graph Neural Networks</h3>
                <p className="text-sm text-gray-600">Modélisation de réseaux biologiques</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez la Biotechnologie</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies IA de pointe pour accélérer la recherche
              biomédicale et développer les thérapies de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Dna className="mr-2 h-5 w-5" />
                Formation BioTech IA
              </Button>
              <Button size="lg" variant="outline">
                <Microscope className="mr-2 h-5 w-5" />
                Workshop Pratique
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
