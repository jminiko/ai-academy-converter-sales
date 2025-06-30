
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, Shield, Coins, Zap, Lock, Database, Network, Globe } from "lucide-react";

const FormationBlockchainAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <Link className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Blockchain & IA</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Fusionnez blockchain et intelligence artificielle pour l'avenir décentralisé
          </p>
          <Badge variant="secondary" className="bg-yellow-500/30 text-white px-4 py-2 text-lg mb-6">
            ⛓️ Blockchain + AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité Décentralisée</h3>
              <p className="text-sm text-gray-600">Cryptographie avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Coins className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Smart Contracts IA</h3>
              <p className="text-sm text-gray-600">Automatisation intelligente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Database className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Données Décentralisées</h3>
              <p className="text-sm text-gray-600">Propriété des données</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Network className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">DAO Intelligentes</h3>
              <p className="text-sm text-gray-600">Gouvernance automatisée</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Blockchain & IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Link className="h-6 w-6 text-amber-600 mr-2" />
                  Fondamentaux Blockchain
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les concepts fondamentaux de la blockchain et
                  son intégration avec l'intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Architecture blockchain et consensus</li>
                  <li>• Cryptographie et hash functions</li>
                  <li>• Ethereum, Solidity et smart contracts</li>
                  <li>• Web3 et applications décentralisées (DApps)</li>
                  <li>• Tokens, NFTs et économie numérique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ethereum</Badge>
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">Smart Contracts</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-yellow-600 mr-2" />
                  IA Décentralisée
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les modèles d'IA décentralisés et les réseaux
                  d'intelligence artificielle distribués.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Federated learning et privacy</li>
                  <li>• Decentralized AI networks</li>
                  <li>• AI model tokenization</li>
                  <li>• Consensus for AI training</li>
                  <li>• Incentive mechanisms pour ML</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Federated Learning</Badge>
                  <Badge variant="outline">Decentralized AI</Badge>
                  <Badge variant="outline">Privacy</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Coins className="h-6 w-6 text-orange-600 mr-2" />
                  Smart Contracts Intelligents
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des smart contracts intégrant des capacités
                  d'IA pour l'automatisation avancée.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Oracles et données externes</li>
                  <li>• AI-powered smart contracts</li>
                  <li>• Prediction markets et betting</li>
                  <li>• Automated trading strategies</li>
                  <li>• Risk assessment automatisé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Oracles</Badge>
                  <Badge variant="outline">Prediction Markets</Badge>
                  <Badge variant="outline">Automated Trading</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-red-600 mr-2" />
                  Applications Révolutionnaires
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des applications innovantes combinant blockchain
                  et IA pour transformer les industries.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• DeFi avec IA prédictive</li>
                  <li>• NFTs génératifs et art IA</li>
                  <li>• Supply chain intelligente</li>
                  <li>• Identity verification décentralisée</li>
                  <li>• Carbon credits et sustainability</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">DeFi</Badge>
                  <Badge variant="outline">Generative NFTs</Badge>
                  <Badge variant="outline">Supply Chain</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Avenir Décentralisé</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              La convergence entre blockchain et IA ouvre la voie à un internet
              décentralisé, transparent et intelligemment autonome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link className="mr-2 h-5 w-5" />
                Formation Blockchain+IA
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Web3
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationBlockchainAI;
