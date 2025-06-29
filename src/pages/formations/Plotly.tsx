
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Zap, Globe, Monitor, TrendingUp, Settings, Eye, Database } from "lucide-react";

const Plotly = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Plotly</h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Créez des visualisations interactives et des dashboards web avec Plotly
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            📊 Interactive Visualization
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Interactivité</h3>
              <p className="text-sm text-gray-600">Graphiques dynamiques</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Web Integration</h3>
              <p className="text-sm text-gray-600">Dashboards en ligne</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Dash Framework</h3>
              <p className="text-sm text-gray-600">Applications web</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">Business intelligence</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Plotly</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-violet-600 mr-2" />
                  Graphiques Interactifs
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez la création de graphiques interactifs avec Plotly
                  pour engager vos audiences et explorer vos données.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Graphiques 2D et 3D interactifs</li>
                  <li>• Zoom, pan et sélection</li>
                  <li>• Hover effects et tooltips</li>
                  <li>• Animation et transitions</li>
                  <li>• Crossfilter interactions</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Interactive</Badge>
                  <Badge variant="outline">3D Graphics</Badge>
                  <Badge variant="outline">Animation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 text-purple-600 mr-2" />
                  Dash Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des applications web analytiques complètes
                  avec Dash, le framework web de Plotly.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Layout et composants Dash</li>
                  <li>• Callbacks et interactivité</li>
                  <li>• Multi-page applications</li>
                  <li>• Authentification et sécurité</li>
                  <li>• Déploiement cloud</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Dash</Badge>
                  <Badge variant="outline">Web Apps</Badge>
                  <Badge variant="outline">Callbacks</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-2" />
                  Business Intelligence
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des dashboards de business intelligence
                  connectés à vos sources de données d'entreprise.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Connexion bases de données</li>
                  <li>• KPIs et métriques métier</li>
                  <li>• Tableaux de bord exécutifs</li>
                  <li>• Rapports automatisés</li>
                  <li>• Real-time updates</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">BI Dashboards</Badge>
                  <Badge variant="outline">KPIs</Badge>
                  <Badge variant="outline">Real-time</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-2" />
                  Customisation Avancée
                </h3>
                <p className="text-gray-600 mb-4">
                  Personnalisez entièrement vos visualisations avec
                  les options avancées et le styling de Plotly.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Thèmes et templates personnalisés</li>
                  <li>• CSS et styling avancé</li>
                  <li>• Annotations et formes</li>
                  <li>• Subplots complexes</li>
                  <li>• Export haute qualité</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Customization</Badge>
                  <Badge variant="outline">Theming</Badge>
                  <Badge variant="outline">Export</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Visualisation Interactive</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Plotly révolutionne la visualisation de données avec ses graphiques
              interactifs et ses applications web analytiques puissantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                <BarChart3 className="mr-2 h-5 w-5" />
                Formation Plotly
              </Button>
              <Button size="lg" variant="outline">
                <Globe className="mr-2 h-5 w-5" />
                Créer Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plotly;
