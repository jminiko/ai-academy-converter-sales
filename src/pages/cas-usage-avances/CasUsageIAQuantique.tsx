
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, Zap, Brain, Cpu, Target, TrendingUp, Shield, Rocket } from "lucide-react";

const CasUsageIAQuantique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Quantique : Cas d'Usage</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Explorez les applications révolutionnaires de l'intelligence artificielle quantique.
            Optimisation complexe, cryptographie avancée et simulation moléculaire.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="bg-white/20 text-white">Computing Quantique</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Algorithmes Hybrides</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Suprematie Quantique</Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="optimization" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="optimization">Optimisation</TabsTrigger>
              <TabsTrigger value="cryptography">Cryptographie</TabsTrigger>
              <TabsTrigger value="simulation">Simulation</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
            </TabsList>

            <TabsContent value="optimization" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Optimisation Quantique</h2>
                <p className="text-lg text-gray-600">Résolution de problèmes d'optimisation complexes</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Cpu className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Logistics Quantique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Optimisation de chaînes d'approvisionnement avec des milliers de variables
                    </p>
                    <Progress value={89} className="mb-2" />
                    <span className="text-sm text-gray-500">89% d'amélioration vs classique</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Target className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Portfolio Quantique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Allocation d'actifs optimale avec corrélations quantiques
                    </p>
                    <Progress value={94} className="mb-2" />
                    <span className="text-sm text-gray-500">+15% rendement ajusté</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Trafic Urbain</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Gestion du trafic urbain en temps réel avec IA quantique
                    </p>
                    <Progress value={76} className="mb-2" />
                    <span className="text-sm text-gray-500">35% réduction congestion</span>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Algorithme d'Optimisation Quantique - QAOA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <div># Quantum Approximate Optimization Algorithm</div>
                    <div>def qaoa_circuit(params, graph):</div>
                    <div className="ml-4">qc = QuantumCircuit(n_qubits)</div>
                    <div className="ml-4">qc.h(range(n_qubits))  # Superposition</div>
                    <div className="ml-4">for gamma, beta in params:</div>
                    <div className="ml-8">apply_cost_operator(qc, gamma, graph)</div>
                    <div className="ml-8">apply_mixer_operator(qc, beta)</div>
                    <div className="ml-4">return qc</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cryptography" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Cryptographie Post-Quantique</h2>
                <p className="text-lg text-gray-600">Sécurité à l'ère quantique</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle>Chiffrement Quantique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Distribution de clés quantiques (QKD)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Cryptographie basée sur les réseaux
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Signatures quantiques sécurisées
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                    <CardTitle>Détection d'Intrusion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Analyse comportementale quantique
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Pattern matching quantique
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                        Réponse adaptative en temps réel
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="simulation" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simulation Moléculaire Quantique</h2>
                <p className="text-lg text-gray-600">Modélisation de systèmes quantiques complexes</p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-purple-600" />
                      Découverte de Médicaments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Simulation quantique de l'interaction médicament-protéine pour la découverte pharmaceutique
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">1000x</div>
                        <div className="text-sm text-gray-500">Plus rapide</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">92%</div>
                        <div className="text-sm text-gray-500">Précision</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">50M$</div>
                        <div className="text-sm text-gray-500">Économies R&D</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Atom className="h-6 w-6 text-blue-600" />
                      Matériaux Quantiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Design de nouveaux matériaux avec propriétés quantiques sur mesure
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Supraconducteurs haute température</span>
                        <Progress value={78} className="w-32" />
                      </div>
                      <div className="flex justify-between">
                        <span>Matériaux photovoltaïques</span>
                        <Progress value={85} className="w-32" />
                      </div>
                      <div className="flex justify-between">
                        <span>Catalyseurs quantiques</span>
                        <Progress value={91} className="w-32" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="finance" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Finance Quantique</h2>
                <p className="text-lg text-gray-600">Applications financières de l'IA quantique</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Rocket className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Trading Algorithmique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Stratégies de trading optimisées par algorithmes quantiques
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-lg font-semibold text-green-800">Performance</div>
                        <div className="text-2xl font-bold text-green-600">+247%</div>
                        <div className="text-sm text-green-600">Rendement annualisé</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Gestion des Risques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Évaluation des risques avec simulation Monte Carlo quantique
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-lg font-semibold text-blue-800">Réduction VaR</div>
                        <div className="text-2xl font-bold text-blue-600">-35%</div>
                        <div className="text-sm text-blue-600">Value at Risk</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasUsageIAQuantique;
