
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Cog, Robot, TrendingUp, Shield, Zap, Settings, Target } from "lucide-react";

const Industrie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour l'Industrie</h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Transformez votre industrie avec l'Intelligence Artificielle 4.0
          </p>
          <Badge variant="secondary" className="bg-slate-500/30 text-white px-4 py-2 text-lg mb-6">
            🏭 Industry 4.0
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Robot className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Robotique Avancée</h3>
              <p className="text-sm text-gray-600">Automatisation intelligente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Maintenance Prédictive</h3>
              <p className="text-sm text-gray-600">Prévention des pannes</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Optimisation Production</h3>
              <p className="text-sm text-gray-600">Efficacité maximale</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Cog className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Contrôle Qualité</h3>
              <p className="text-sm text-gray-600">Détection automatisée</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Industrielles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Robot className="h-6 w-6 text-gray-600 mr-2" />
                  Automatisation Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Révolutionnez vos processus de production avec des robots
                  intelligents capables d'adaptation et d'apprentissage continu.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Robots collaboratifs (cobots)</li>
                  <li>• Vision artificielle pour contrôle</li>
                  <li>• Planification de trajectoires optimales</li>
                  <li>• Adaptation temps réel aux variations</li>
                  <li>• Integration IoT et capteurs</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Robotics</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">IoT Integration</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  Maintenance Prédictive
                </h3>
                <p className="text-gray-600 mb-4">
                  Anticipez les pannes et optimisez la maintenance avec l'IA
                  pour réduire les arrêts de production et les coûts.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse vibratoire et acoustique</li>
                  <li>• Prédiction de durée de vie</li>
                  <li>• Optimisation des plannings</li>
                  <li>• Détection d'anomalies en temps réel</li>
                  <li>• Analytics prédictives avancées</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">Anomaly Detection</Badge>
                  <Badge variant="outline">Condition Monitoring</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                  Optimisation Énergétique
                </h3>
                <p className="text-gray-600 mb-4">
                  Réduisez votre consommation énergétique et votre empreinte carbone
                  avec des systèmes IA d'optimisation énergétique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Smart grid et gestion énergétique</li>
                  <li>• Prédiction de consommation</li>
                  <li>• Optimisation des cycles de production</li>
                  <li>• Integration énergies renouvelables</li>
                  <li>• Monitoring carbone en temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Energy Management</Badge>
                  <Badge variant="outline">Smart Grid</Badge>
                  <Badge variant="outline">Carbon Tracking</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-orange-600 mr-2" />
                  Supply Chain Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez toute votre chaîne d'approvisionnement avec l'IA
                  pour une gestion intelligente et réactive.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prévision de demande avancée</li>
                  <li>• Optimisation logistique</li>
                  <li>• Gestion automatisée des stocks</li>
                  <li>• Détection de risques fournisseurs</li>
                  <li>• Traçabilité blockchain</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Supply Chain</Badge>
                  <Badge variant="outline">Demand Forecasting</Badge>
                  <Badge variant="outline">Logistics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Industrie 4.0</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme l'industrie avec des solutions intelligentes pour
              l'efficacité, la qualité et la durabilité de vos opérations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-600 hover:bg-gray-700">
                <Factory className="mr-2 h-5 w-5" />
                Solutions Industrielles
              </Button>
              <Button size="lg" variant="outline">
                <Target className="mr-2 h-5 w-5" />
                Consulting 4.0
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industrie;
