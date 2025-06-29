
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Zap, Shield, Smartphone, Car, Home, Factory, Globe } from "lucide-react";

const EdgeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="container mx-auto px-4 text-center">
          <Cpu className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Edge AI</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle déployée localement : performances,
            sécurité et autonomie pour les applications critiques.
          </p>
          <Badge variant="secondary" className="bg-violet-500/30 text-white px-4 py-2 text-lg mb-6">
            ⚡ Edge Computing AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Faible Latence</h3>
              <p className="text-sm text-gray-600">Traitement temps réel local</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Confidentialité</h3>
              <p className="text-sm text-gray-600">Données sécurisées localement</p>
            </Card>
            <Card className="text-center p-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Autonomie</h3>
              <p className="text-sm text-gray-600">Fonctionnement hors ligne</p>
            </Card>
            <Card className="text-center p-6">
              <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Efficacité</h3>
              <p className="text-sm text-gray-600">Optimisation énergétique</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies Edge AI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cpu className="h-6 w-6 text-purple-600 mr-2" />
                  Hardware Spécialisé
                </h3>
                <p className="text-gray-600 mb-4">
                  Processeurs et accélérateurs optimisés pour l'inférence
                  IA locale avec contraintes énergétiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Neural Processing Units (NPU)</li>
                  <li>• Google Coral TPU</li>
                  <li>• Intel Movidius VPU</li>
                  <li>• NVIDIA Jetson series</li>
                  <li>• Qualcomm AI Engine</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NPU</Badge>
                  <Badge variant="outline">TPU</Badge>
                  <Badge variant="outline">Jetson</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-600 mr-2" />
                  Optimisation Modèles
                </h3>
                <p className="text-gray-600 mb-4">
                  Techniques d'optimisation pour déployer des modèles
                  performants sur hardware contrainte.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Quantization (INT8, FP16)</li>
                  <li>• Model pruning et sparsity</li>
                  <li>• Knowledge distillation</li>
                  <li>• Neural architecture search</li>
                  <li>• Dynamic inference</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Quantization</Badge>
                  <Badge variant="outline">Pruning</Badge>
                  <Badge variant="outline">Distillation</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Applications Edge AI</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Mobile AI</h3>
                <p className="text-sm text-gray-600">IA sur smartphones/tablettes</p>
              </Card>
              <Card className="p-6 text-center">
                <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Automotive</h3>
                <p className="text-sm text-gray-600">Véhicules autonomes</p>
              </Card>
              <Card className="p-6 text-center">
                <Home className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Smart Home</h3>
                <p className="text-sm text-gray-600">Domotique intelligente</p>
              </Card>
              <Card className="p-6 text-center">
                <Factory className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Industrial IoT</h3>
                <p className="text-sm text-gray-600">Industrie 4.0</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Maîtrisez l'Edge AI</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Développez des applications IA embarquées performantes
              pour les environnements contraints et critiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Cpu className="mr-2 h-5 w-5" />
                Formation Edge AI
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Guide Technique
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeAI;
