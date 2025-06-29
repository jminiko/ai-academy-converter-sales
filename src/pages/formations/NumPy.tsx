
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Zap, Grid3X3, LineChart, Settings, Target, Code, Database } from "lucide-react";

const NumPy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation NumPy</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez NumPy pour le calcul scientifique et numérique en Python
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🔢 Scientific Computing
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Grid3X3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Arrays N-dimensionnels</h3>
              <p className="text-sm text-gray-600">Structures optimisées</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Calcul Vectorisé</h3>
              <p className="text-sm text-gray-600">Performance maximale</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <LineChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Algèbre Linéaire</h3>
              <p className="text-sm text-gray-600">Opérations matricielles</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Broadcasting</h3>
              <p className="text-sm text-gray-600">Opérations flexibles</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation NumPy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Grid3X3 className="h-6 w-6 text-blue-600 mr-2" />
                  Arrays et Indexation
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les structures de données fondamentales de NumPy
                  et apprenez à manipuler efficacement les arrays multidimensionnels.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Création d'arrays et initialisation</li>
                  <li>• Indexation et slicing avancés</li>
                  <li>• Boolean indexing et fancy indexing</li>
                  <li>• Reshaping et transposition</li>
                  <li>• Copying vs viewing</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Arrays</Badge>
                  <Badge variant="outline">Indexing</Badge>
                  <Badge variant="outline">Slicing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-indigo-600 mr-2" />
                  Opérations Universelles
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les ufuncs (universal functions) pour effectuer
                  des calculs vectorisés ultra-rapides sur vos données.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Ufuncs arithmétiques et trigonométriques</li>
                  <li>• Broadcasting et règles de diffusion</li>
                  <li>• Aggregation functions (sum, mean, std)</li>
                  <li>• Conditional logic avec where</li>
                  <li>• Custom ufuncs et vectorisation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ufuncs</Badge>
                  <Badge variant="outline">Broadcasting</Badge>
                  <Badge variant="outline">Vectorization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <LineChart className="h-6 w-6 text-purple-600 mr-2" />
                  Algèbre Linéaire et FFT
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploitez les capacités avancées de NumPy pour l'algèbre linéaire,
                  les transformées de Fourier et le calcul scientifique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Produits matriciels et décompositions</li>
                  <li>• Eigenvalues et eigenvectors</li>
                  <li>• Solving linear systems</li>
                  <li>• FFT et traitement du signal</li>
                  <li>• Random number generation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Linear Algebra</Badge>
                  <Badge variant="outline">FFT</Badge>
                  <Badge variant="outline">Random</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Performance et Mémoire
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez vos calculs NumPy pour obtenir les meilleures
                  performances et gérer efficacement la mémoire.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Memory layout et contiguity</li>
                  <li>• Data types et precision control</li>
                  <li>• Out-of-core computing</li>
                  <li>• Profiling et bottleneck detection</li>
                  <li>• Integration avec C/Fortran</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Performance</Badge>
                  <Badge variant="outline">Memory</Badge>
                  <Badge variant="outline">Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Base du Calcul Scientifique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              NumPy est la fondation de l'écosystème scientifique Python,
              offrant des performances optimales pour le calcul numérique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calculator className="mr-2 h-5 w-5" />
                Formation NumPy
              </Button>
              <Button size="lg" variant="outline">
                <Code className="mr-2 h-5 w-5" />
                Exercices Pratiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NumPy;
