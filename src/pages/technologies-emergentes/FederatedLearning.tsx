
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Shield, Users, Globe, Lock, Zap, Brain, Database } from "lucide-react";

const FederatedLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Federated Learning</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Apprentissage fédéré : Entraînez des modèles IA collaboratifs
            sans centraliser les données sensibles.
          </p>
          <Badge variant="secondary" className="bg-cyan-500/30 text-white px-4 py-2 text-lg mb-6">
            🌐 Distributed ML
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Privacy-First</h3>
              <p className="text-sm text-gray-600">Données privées locales</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600">Apprentissage collaboratif</p>
            </Card>
            <Card className="text-center p-6">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Décentralisé</h3>
              <p className="text-sm text-gray-600">Architecture distribuée</p>
            </Card>
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Efficacité</h3>
              <p className="text-sm text-gray-600">Optimisation réseau</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Architecture Federated Learning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Network className="h-6 w-6 text-teal-600 mr-2" />
                  FedAvg Protocol
                </h3>
                <p className="text-gray-600 mb-4">
                  Protocole d'agrégation fédérée pour combiner les mises à jour
                  des modèles locaux sans partager les données.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Client selection stratégique</li>
                  <li>• Local model training</li>
                  <li>• Gradient aggregation</li>
                  <li>• Model broadcasting</li>
                  <li>• Convergence optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FedAvg</Badge>
                  <Badge variant="outline">Aggregation</Badge>
                  <Badge variant="outline">Protocol</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-green-600 mr-2" />
                  Privacy Techniques
                </h3>
                <p className="text-gray-600 mb-4">
                  Techniques avancées de préservation de la confidentialité
                  pour protéger les données sensibles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Differential privacy</li>
                  <li>• Homomorphic encryption</li>
                  <li>• Secure multiparty computation</li>
                  <li>• Local differential privacy</li>
                  <li>• Secure aggregation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Differential Privacy</Badge>
                  <Badge variant="outline">Encryption</Badge>
                  <Badge variant="outline">SMPC</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Non-IID Challenges
                </h3>
                <p className="text-gray-600 mb-4">
                  Gestion de l'hétérogénéité des données et des systèmes
                  dans les environnements fédérés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Statistical heterogeneity</li>
                  <li>• System heterogeneity</li>
                  <li>• Personalization techniques</li>
                  <li>• Multi-task learning</li>
                  <li>• Adaptive algorithms</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Non-IID</Badge>
                  <Badge variant="outline">Heterogeneity</Badge>
                  <Badge variant="outline">Personalization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-2" />
                  Communication Efficiency
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisation des communications pour réduire les coûts
                  et améliorer l'efficacité du système fédéré.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Gradient compression</li>
                  <li>• Sparsification techniques</li>
                  <li>• Local updates scheduling</li>
                  <li>• Bandwidth optimization</li>
                  <li>• Asynchronous aggregation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Compression</Badge>
                  <Badge variant="outline">Sparsification</Badge>
                  <Badge variant="outline">Async</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Implémentez le Federated Learning</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les techniques d'apprentissage fédéré pour créer
              des systèmes IA collaboratifs et respectueux de la vie privée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Network className="mr-2 h-5 w-5" />
                Formation Federated Learning
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="mr-2 h-5 w-5" />
                Guide Implementation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FederatedLearning;
