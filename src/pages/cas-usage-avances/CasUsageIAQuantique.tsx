
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Atom, Zap, Brain, Globe, Lock, TrendingUp, Code, Target } from "lucide-react";

const CasUsageIAQuantique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Cas d'Usage IA Quantique</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            L'intersection révolutionnaire entre intelligence artificielle et informatique quantique.
            Découvrez les applications transformatrices de cette convergence technologique.
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            ⚛️ Quantum AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Accélération Calculs</h3>
              <p className="text-sm text-gray-600">Vitesse quantique exponentielle</p>
            </Card>
            <Card className="text-center p-6">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">ML Quantique</h3>
              <p className="text-sm text-gray-600">Algorithmes hybrides avancés</p>
            </Card>
            <Card className="text-center p-6">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Cryptographie</h3>
              <p className="text-sm text-gray-600">Sécurité quantique</p>
            </Card>
            <Card className="text-center p-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Optimisation</h3>
              <p className="text-sm text-gray-600">Problèmes complexes résolus</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications Révolutionnaires</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Quantum Machine Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Algorithmes d'apprentissage automatique exploitant les propriétés
                  quantiques pour résoudre des problèmes impossibles classiquement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Quantum Neural Networks (QNN)</li>
                  <li>• Variational Quantum Eigensolver</li>
                  <li>• Quantum Support Vector Machine</li>
                  <li>• Quantum Principal Component Analysis</li>
                  <li>• Quantum Boltzmann Machine</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">QNN</Badge>
                  <Badge variant="outline">VQE</Badge>
                  <Badge variant="outline">QSVM</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-blue-600 mr-2" />
                  Optimisation Quantique
                </h3>
                <p className="text-gray-600 mb-4">
                  Résolution de problèmes d'optimisation combinatoire complexes
                  avec des avantages quantiques exponentiels.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Quantum Approximate Optimization (QAOA)</li>
                  <li>• Portfolio optimization quantique</li>
                  <li>• Supply chain optimization</li>
                  <li>• Traffic flow optimization</li>
                  <li>• Resource allocation problems</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">QAOA</Badge>
                  <Badge variant="outline">Portfolio</Badge>
                  <Badge variant="outline">Supply Chain</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-green-600 mr-2" />
                  Sécurité Quantique
                </h3>
                <p className="text-gray-600 mb-4">
                  Applications de cryptographie quantique et détection
                  d'intrusions avec algorithmes quantiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Quantum Key Distribution (QKD)</li>
                  <li>• Post-quantum cryptography</li>
                  <li>• Quantum random number generation</li>
                  <li>• Quantum authentication protocols</li>
                  <li>• Quantum-safe ML algorithms</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">QKD</Badge>
                  <Badge variant="outline">Post-Quantum</Badge>
                  <Badge variant="outline">Authentication</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-orange-600 mr-2" />
                  Simulation Quantique
                </h3>
                <p className="text-gray-600 mb-4">
                  Simulation de systèmes quantiques complexes pour
                  la recherche scientifique et l'innovation technologique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Molecular dynamics simulation</li>
                  <li>• Materials science modeling</li>
                  <li>• Quantum chemistry calculations</li>
                  <li>• Drug discovery acceleration</li>
                  <li>• Financial risk modeling</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Molecular</Badge>
                  <Badge variant="outline">Materials</Badge>
                  <Badge variant="outline">Chemistry</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Secteurs d'Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Finance</h3>
                <p className="text-sm text-gray-600">Trading & Risk Management</p>
              </Card>
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Tech</h3>
                <p className="text-sm text-gray-600">Quantum Computing as a Service</p>
              </Card>
              <Card className="p-6 text-center">
                <Atom className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Recherche</h3>
                <p className="text-sm text-gray-600">Découvertes scientifiques</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Énergie</h3>
                <p className="text-sm text-gray-600">Optimisation énergétique</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Préparez-vous à l'Ère Quantique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explorez les applications concrètes de l'IA quantique et positionnez-vous
              à l'avant-garde de cette révolution technologique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Atom className="mr-2 h-5 w-5" />
                Formation Quantum AI
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
                Guide Pratique
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasUsageIAQuantique;
