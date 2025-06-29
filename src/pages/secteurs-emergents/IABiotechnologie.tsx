
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, FlaskConical, Brain, Target, Atom, Activity, Zap } from "lucide-react";

const IABiotechnologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Dna className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Biotechnologie</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            L'intelligence artificielle révolutionne la biotechnologie.
            Drug discovery, génomique et thérapies personnalisées.
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            🧬 BioTech AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <FlaskConical className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Drug Discovery</h3>
              <p className="text-sm text-gray-600">Découverte de médicaments</p>
            </Card>
            <Card className="text-center p-6">
              <Dna className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génomique</h3>
              <p className="text-sm text-gray-600">Analyse génétique avancée</p>
            </Card>
            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Thérapies Ciblées</h3>
              <p className="text-sm text-gray-600">Médecine personnalisée</p>
            </Card>
            <Card className="text-center p-6">
              <Atom className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Biologie Moléculaire</h3>
              <p className="text-sm text-gray-600">Modélisation moléculaire</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications IA Biotech</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FlaskConical className="h-6 w-6 text-green-600 mr-2" />
                  Drug Discovery & Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Accélération de la découverte de médicaments avec IA :
                  identification de cibles, conception moléculaire et optimisation.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Target identification & validation</li>
                  <li>• Molecular design & optimization</li>
                  <li>• ADMET prediction</li>
                  <li>• Clinical trial optimization</li>
                  <li>• Drug repurposing</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Drug Discovery</Badge>
                  <Badge variant="outline">ADMET</Badge>
                  <Badge variant="outline">Clinical Trials</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Dna className="h-6 w-6 text-blue-600 mr-2" />
                  Génomique & Génétique
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse de données génomiques massives pour comprendre
                  les maladies et développer des thérapies géniques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Séquençage génome complet</li>
                  <li>• Variant calling & annotation</li>
                  <li>• GWAS (Genome-Wide Association)</li>
                  <li>• Pharmacogénomique</li>
                  <li>• CRISPR design optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Genomics</Badge>
                  <Badge variant="outline">GWAS</Badge>
                  <Badge variant="outline">CRISPR</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-purple-600 mr-2" />
                  Médecine Personnalisée
                </h3>
                <p className="text-gray-600 mb-4">
                  Développement de thérapies personnalisées basées sur
                  le profil génétique et phénotypique des patients.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Biomarker discovery</li>
                  <li>• Patient stratification</li>
                  <li>• Precision dosing</li>
                  <li>• Companion diagnostics</li>
                  <li>• Treatment response prediction</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Biomarkers</Badge>
                  <Badge variant="outline">Precision Medicine</Badge>
                  <Badge variant="outline">Diagnostics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-emerald-600 mr-2" />
                  Bioinformatique Avancée
                </h3>
                <p className="text-gray-600 mb-4">
                  Outils d'analyse bioinformatique alimentés par IA
                  pour traiter et interpréter les données biologiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Multi-omics integration</li>
                  <li>• Pathway analysis</li>
                  <li>• Protein structure prediction</li>
                  <li>• Systems biology modeling</li>
                  <li>• Evolutionary analysis</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Multi-omics</Badge>
                  <Badge variant="outline">Protein Structure</Badge>
                  <Badge variant="outline">Systems Biology</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez la Biotechnologie</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les applications IA en biotechnologie pour accélérer
              l'innovation et développer les thérapies de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Dna className="mr-2 h-5 w-5" />
                Formation BioTech AI
              </Button>
              <Button size="lg" variant="outline">
                <Microscope className="mr-2 h-5 w-5" />
                Cas d'Usage
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
