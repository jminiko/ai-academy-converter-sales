
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Atom, Zap, Globe, Lock, Brain, Lightbulb, Settings, Target } from "lucide-react";

const FormationQuantumAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Quantum AI</h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Explorez le futur de l'IA avec l'informatique quantique
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            ⚛️ Quantum Computing + AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Atom className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Algorithmes Quantiques</h3>
              <p className="text-sm text-gray-600">Grover, Shor, QAOA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Quantum ML</h3>
              <p className="text-sm text-gray-600">Apprentissage quantique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Lock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Cryptographie Quantique</h3>
              <p className="text-sm text-gray-600">Sécurité post-quantique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Lightbulb className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Optimisation</h3>
              <p className="text-sm text-gray-600">Quantum annealing</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Quantum AI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Atom className="h-6 w-6 text-violet-600 mr-2" />
                  Fondamentaux Quantiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les principes de base de l'informatique quantique
                  et son application à l'intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Mécanique quantique pour l'informatique</li>
                  <li>• Qubits, superposition et intrication</li>
                  <li>• Portes quantiques et circuits</li>
                  <li>• Algorithmes quantiques classiques</li>
                  <li>• Simulateurs quantiques (Qiskit, Cirq)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Qubits</Badge>
                  <Badge variant="outline">Qiskit</Badge>
                  <Badge variant="outline">Quantum Gates</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Machine Learning Quantique
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les algorithmes d'apprentissage automatique
                  optimisés pour les systèmes quantiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Quantum Support Vector Machines</li>
                  <li>• Variational Quantum Eigensolvers</li>
                  <li>• Quantum Neural Networks</li>
                  <li>• Quantum Feature Maps</li>
                  <li>• Hybrid classical-quantum algorithms</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">QSVM</Badge>
                  <Badge variant="outline">VQE</Badge>
                  <Badge variant="outline">QNN</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-indigo-600 mr-2" />
                  Sécurité Quantique
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes de sécurité résistants aux
                  attaques quantiques futures.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Cryptographie post-quantique</li>
                  <li>• Distribution quantique de clés (QKD)</li>
                  <li>• Authentification quantique</li>
                  <li>• Protection contre l'algorithme de Shor</li>
                  <li>• Implémentation de protocoles sécurisés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Post-Quantum Crypto</Badge>
                  <Badge variant="outline">QKD</Badge>
                  <Badge variant="outline">Quantum Security</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-pink-600 mr-2" />
                  Applications Pratiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des solutions quantiques pour résoudre
                  des problèmes complexes du monde réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Optimisation de portefeuilles financiers</li>
                  <li>• Découverte de médicaments quantique</li>
                  <li>• Logistique et routage optimal</li>
                  <li>• Simulation moléculaire quantique</li>
                  <li>• Intelligence artificielle quantique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Finance Quantique</Badge>
                  <Badge variant="outline">Drug Discovery</Badge>
                  <Badge variant="outline">Quantum Simulation</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Avenir Quantique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'informatique quantique révolutionne l'IA en offrant des capacités
              de calcul exponentiellement supérieures pour résoudre des problèmes impossibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                <Atom className="mr-2 h-5 w-5" />
                Formation Quantum AI
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Quantiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationQuantumAI;
