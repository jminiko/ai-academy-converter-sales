
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, PieChart, LineChart, Palette, Eye, Settings, Target } from "lucide-react";

const Seaborn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Seaborn</h1>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
            Créez des visualisations statistiques élégantes avec Seaborn
          </p>
          <Badge variant="secondary" className="bg-pink-500/30 text-white px-4 py-2 text-lg mb-6">
            📊 Statistical Visualization
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Graphiques Statistiques</h3>
              <p className="text-sm text-gray-600">Analyses avancées</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Palette className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Palettes de Couleurs</h3>
              <p className="text-sm text-gray-600">Design professionnel</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse de Tendances</h3>
              <p className="text-sm text-gray-600">Patterns et corrélations</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Exploration Interactive</h3>
              <p className="text-sm text-gray-600">Découverte de données</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Seaborn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-6 w-6 text-rose-600 mr-2" />
                  Graphiques Statistiques Avancés
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les graphiques statistiques spécialisés de Seaborn
                  pour une analyse de données approfondie et professionnelle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Box plots et violin plots</li>
                  <li>• Heatmaps et cluster maps</li>
                  <li>• Distribution plots et kde</li>
                  <li>• Regression plots et trends</li>
                  <li>• Pair plots pour corrélations</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Statistical Plots</Badge>
                  <Badge variant="outline">Distributions</Badge>
                  <Badge variant="outline">Correlations</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Palette className="h-6 w-6 text-pink-600 mr-2" />
                  Design et Esthétique
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez l'art de créer des visualisations esthétiquement
                  plaisantes avec les palettes et thèmes de Seaborn.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Palettes de couleurs intégrées</li>
                  <li>• Thèmes et styles prédéfinis</li>
                  <li>• Personnalisation avancée</li>
                  <li>• Cohérence visuelle</li>
                  <li>• Publication-ready plots</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Color Palettes</Badge>
                  <Badge variant="outline">Themes</Badge>
                  <Badge variant="outline">Styling</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                  Analyse Exploratoire
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez Seaborn pour l'analyse exploratoire de données
                  et la découverte de patterns cachés dans vos datasets.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Matrices de corrélation</li>
                  <li>• Analyse multivariée</li>
                  <li>• Détection d'outliers</li>
                  <li>• Grouping et faceting</li>
                  <li>• Statistical summaries</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">EDA</Badge>
                  <Badge variant="outline">Multivariate</Badge>
                  <Badge variant="outline">Pattern Discovery</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-blue-600 mr-2" />
                  Intégration et Workflow
                </h3>
                <p className="text-gray-600 mb-4">
                  Intégrez Seaborn dans vos workflows de data science
                  avec Pandas, Jupyter et les outils modernes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Integration avec Pandas</li>
                  <li>• Jupyter notebooks optimization</li>
                  <li>• Matplotlib compatibility</li>
                  <li>• Export et sauvegarde</li>
                  <li>• Workflow automation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Pandas Integration</Badge>
                  <Badge variant="outline">Jupyter</Badge>
                  <Badge variant="outline">Workflow</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Visualisation Élégante</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Seaborn transforme vos analyses statistiques en visualisations
              élégantes et professionnelles pour impressionner vos audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                <BarChart3 className="mr-2 h-5 w-5" />
                Formation Seaborn
              </Button>
              <Button size="lg" variant="outline">
                <Palette className="mr-2 h-5 w-5" />
                Galerie Visualisations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Seaborn;
