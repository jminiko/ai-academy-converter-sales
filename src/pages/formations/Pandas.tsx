
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, FileSpreadsheet, BarChart3, Filter, TrendingUp, Zap, Settings, Eye } from "lucide-react";

const Pandas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Pandas</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez Pandas pour l'analyse et la manipulation de données en Python
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🐼 Data Analysis
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <FileSpreadsheet className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">DataFrames</h3>
              <p className="text-sm text-gray-600">Structures de données</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Filter className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Filtrage</h3>
              <p className="text-sm text-gray-600">Sélection avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Agrégation</h3>
              <p className="text-sm text-gray-600">GroupBy et statistiques</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse</h3>
              <p className="text-sm text-gray-600">Insights de données</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Pandas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileSpreadsheet className="h-6 w-6 text-blue-600 mr-2" />
                  Structures de Données Pandas
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à manipuler les Series et DataFrames, les structures
                  de données fondamentales de Pandas pour l'analyse.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Series et DataFrames</li>
                  <li>• Indexation et sélection</li>
                  <li>• Création et modification</li>
                  <li>• Types de données et conversion</li>
                  <li>• Inspection des données</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">DataFrame</Badge>
                  <Badge variant="outline">Series</Badge>
                  <Badge variant="outline">Indexing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Filter className="h-6 w-6 text-green-600 mr-2" />
                  Nettoyage et Préparation
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques de nettoyage de données pour
                  préparer vos datasets pour l'analyse et le machine learning.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Gestion des valeurs manquantes</li>
                  <li>• Détection et traitement des outliers</li>
                  <li>• Transformation et normalisation</li>
                  <li>• Fusion et jointures de DataFrames</li>
                  <li>• Reshape et pivot tables</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Data Cleaning</Badge>
                  <Badge variant="outline">Missing Values</Badge>
                  <Badge variant="outline">Data Preparation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-6 w-6 text-purple-600 mr-2" />
                  Analyse et Agrégation
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les fonctions d'agrégation et de groupement
                  pour extraire des insights significatifs de vos données.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• GroupBy et agrégations</li>
                  <li>• Statistiques descriptives</li>
                  <li>• Fonctions de fenêtre (rolling)</li>
                  <li>• Crosstabs et pivot tables</li>
                  <li>• Calculs vectorisés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GroupBy</Badge>
                  <Badge variant="outline">Aggregation</Badge>
                  <Badge variant="outline">Statistics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-orange-600 mr-2" />
                  Visualisation et I/O
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à importer/exporter des données et créer
                  des visualisations directement avec Pandas.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Import CSV, Excel, JSON, SQL</li>
                  <li>• Export vers différents formats</li>
                  <li>• Plotting intégré avec Matplotlib</li>
                  <li>• Optimisation des performances</li>
                  <li>• Gestion de gros datasets</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">I/O Operations</Badge>
                  <Badge variant="outline">Visualization</Badge>
                  <Badge variant="outline">Performance</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Devenez Expert Pandas</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez Pandas pour l'analyse de données et préparez-vous
              à exceller dans tous vos projets de data science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Database className="mr-2 h-5 w-5" />
                Formation Pandas
              </Button>
              <Button size="lg" variant="outline">
                <BarChart3 className="mr-2 h-5 w-5" />
                Exercices Pratiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pandas;
