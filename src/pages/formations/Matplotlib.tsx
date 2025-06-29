
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, LineChart, PieChart, Scatter, TrendingUp, Palette, Eye, Image } from "lucide-react";

const Matplotlib = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Matplotlib</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Créez des visualisations de données professionnelles avec Matplotlib
          </p>
          <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2 text-lg mb-6">
            📊 Data Visualization
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <LineChart className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Graphiques Linéaires</h3>
              <p className="text-sm text-gray-600">Tendances et évolutions</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Histogrammes</h3>
              <p className="text-sm text-gray-600">Distribution des données</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Scatter className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Scatter Plots</h3>
              <p className="text-sm text-gray-600">Corrélations et relations</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <PieChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Graphiques Circulaires</h3>
              <p className="text-sm text-gray-600">Proportions et parts</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Matplotlib</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-6 w-6 text-cyan-600 mr-2" />
                  Graphiques Fondamentaux
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à créer tous les types de graphiques essentiels
                  pour visualiser efficacement vos données analytiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Line plots et time series</li>
                  <li>• Bar charts et histogrammes</li>
                  <li>• Scatter plots et bubble charts</li>
                  <li>• Box plots et violin plots</li>
                  <li>• Pie charts et donut charts</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Basic Plots</Badge>
                  <Badge variant="outline">Chart Types</Badge>
                  <Badge variant="outline">Visualization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Palette className="h-6 w-6 text-purple-600 mr-2" />
                  Personnalisation et Style
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez la personnalisation avancée pour créer des
                  visualisations professionnelles et esthétiquement plaisantes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Couleurs, styles et thèmes</li>
                  <li>• Polices et annotations</li>
                  <li>• Légendes et axes personnalisés</li>
                  <li>• Grilles et arrière-plans</li>
                  <li>• Styles matplotlib et seaborn</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Styling</Badge>
                  <Badge variant="outline">Customization</Badge>
                  <Badge variant="outline">Themes</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-green-600 mr-2" />
                  Graphiques Avancés et Subplots
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des visualisations complexes avec plusieurs graphiques,
                  animations et interactions pour des analyses approfondies.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Subplots et layouts complexes</li>
                  <li>• Graphiques 3D et surfaces</li>
                  <li>• Cartes de chaleur (heatmaps)</li>
                  <li>• Animations et graphiques interactifs</li>
                  <li>• Widgets et interfaces</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Advanced Plots</Badge>
                  <Badge variant="outline">3D Visualization</Badge>
                  <Badge variant="outline">Animation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Image className="h-6 w-6 text-orange-600 mr-2" />
                  Export et Intégration
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à exporter vos visualisations dans différents formats
                  et les intégrer dans vos applications et rapports.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Export PNG, SVG, PDF</li>
                  <li>• Résolution et qualité d'image</li>
                  <li>• Intégration Jupyter notebooks</li>
                  <li>• Applications web (Flask, Django)</li>
                  <li>• Rapports automatisés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Export</Badge>
                  <Badge variant="outline">Integration</Badge>
                  <Badge variant="outline">Web Apps</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Visualisez vos Données</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez Matplotlib pour créer des visualisations impactantes
              qui racontent l'histoire de vos données.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <BarChart3 className="mr-2 h-5 w-5" />
                Formation Matplotlib
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                Projets Visuels
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Matplotlib;
