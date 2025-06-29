
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Zap, Grid3X3, TrendingUp, Binary, Cpu, Settings, Brain } from "lucide-react";

const NumPy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation NumPy</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez NumPy pour le calcul scientifique et les fondations du machine learning
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
              <Grid3X3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Arrays N-D</h3>
              <p className="text-sm text-gray-600">Tableaux multidimensionnels</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Performance</h3>
              <p className="text-sm text-gray-600">Calculs vectorisés rapides</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Algèbre Linéaire</h3>
              <p className="text-sm text-gray-600">Opérations matricielles</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Binary className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Broadcasting</h3>
              <p className="text-sm text-gray-600">Opérations flexibles</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation NumPy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Grid3X3 className="h-6 w-6 text-purple-600 mr-2" />
                  Arrays et Structures de Données
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les arrays NumPy, la structure de données fondamentale
                  pour le calcul scientifique et l'analyse numérique en Python.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Création d'arrays multidimensionnels</li>
                  <li>• Types de données et dtypes</li>
                  <li>• Indexation et slicing avancés</li>
                  <li>• Reshaping et manipulation de forme</li>
                  <li>• Copie vs vue des données</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">N-D Arrays</Badge>
                  <Badge variant="outline">Indexing</Badge>
                  <Badge variant="outline">Data Types</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-600 mr-2" />
                  Opérations Vectorisées
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les opérations vectorisées de NumPy pour des calculs
                  ultra-rapides sans boucles Python explicites.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Universal functions (ufuncs)</li>
                  <li>• Opérations élément par élément</li>
                  <li>• Broadcasting automatique</li>
                  <li>• Agrégations et réductions</li>
                  <li>• Optimisation des performances</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vectorization</Badge>
                  <Badge variant="outline">Broadcasting</Badge>
                  <Badge variant="outline">Performance</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calculator className="h-6 w-6 text-green-600 mr-2" />
                  Algèbre Linéaire et Mathématiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les fonctions mathématiques avancées de NumPy
                  pour l'algèbre linéaire et le calcul scientifique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Produits matriciels et dot products</li>
                  <li>• Décompositions (SVD, eigenvalues)</li>
                  <li>• Résolution de systèmes linéaires</li>
                  <li>• Transformées de Fourier (FFT)</li>
                  <li>• Fonctions trigonométriques et log</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Linear Algebra</Badge>
                  <Badge variant="outline">Matrix Operations</Badge>
                  <Badge variant="outline">Scientific Computing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  NumPy pour Machine Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez comment NumPy constitue la base de tous les frameworks
                  de machine learning et data science en Python.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Préparation de données pour ML</li>
                  <li>• Génération de nombres aléatoires</li>
                  <li>• Statistiques et distributions</li>
                  <li>• Interface avec scikit-learn</li>
                  <li>• Optimisation mémoire et calcul</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ML Foundations</Badge>
                  <Badge variant="outline">Random Generation</Badge>
                  <Badge variant="outline">Statistics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Fondations Solides en NumPy</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez NumPy pour exceller en data science, machine learning
              et calcul scientifique avec Python.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Calculator className="mr-2 h-5 w-5" />
                Formation NumPy
              </Button>
              <Button size="lg" variant="outline">
                <Cpu className="mr-2 h-5 w-5" />
                Labs Pratiques
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
