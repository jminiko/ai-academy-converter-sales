
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Filter, Table, Search, Zap, TrendingUp, FileSpreadsheet } from "lucide-react";

const Pandas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Pandas</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez Pandas pour l'analyse et la manipulation de données en Python
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            📊 Data Analysis Library
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Table className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">DataFrames</h3>
              <p className="text-sm text-gray-600">Structures tabulaires</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Filter className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Filtrage Avancé</h3>
              <p className="text-sm text-gray-600">Sélection intelligente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Agrégations</h3>
              <p className="text-sm text-gray-600">Calculs statistiques</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <FileSpreadsheet className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Import/Export</h3>
              <p className="text-sm text-gray-600">Formats multiples</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Pandas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-green-600 mr-2" />
                  Manipulation de Données
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez les techniques essentielles pour manipuler, nettoyer
                  et transformer vos données avec Pandas efficacement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Création et indexation de DataFrames</li>
                  <li>• Sélection et filtrage de données</li>
                  <li>• Gestion des valeurs manquantes</li>
                  <li>• Opérations sur les chaînes</li>
                  <li>• Conversion de types de données</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">DataFrames</Badge>
                  <Badge variant="outline">Indexing</Badge>
                  <Badge variant="outline">Cleaning</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-6 w-6 text-emerald-600 mr-2" />
                  Analyse Statistique
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les fonctionnalités avancées d'analyse statistique
                  et d'agrégation pour extraire des insights de vos données.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Statistiques descriptives</li>
                  <li>• GroupBy et agrégations</li>
                  <li>• Pivot tables et crosstabs</li>
                  <li>• Corrélations et covariances</li>
                  <li>• Time series analysis</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Statistics</Badge>
                  <Badge variant="outline">GroupBy</Badge>
                  <Badge variant="outline">Time Series</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Search className="h-6 w-6 text-blue-600 mr-2" />
                  Fusion et Jointures
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques de fusion, jointure et combinaison
                  de datasets pour créer des analyses complexes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Merge et join operations</li>
                  <li>• Concatenation de DataFrames</li>
                  <li>• Reshaping avec pivot/melt</li>
                  <li>• Duplicate detection et removal</li>
                  <li>• Multi-index operations</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Merging</Badge>
                  <Badge variant="outline">Joining</Badge>
                  <Badge variant="outline">Reshaping</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-purple-600 mr-2" />
                  Performance et Optimisation
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez vos opérations Pandas pour traiter efficacement
                  de gros volumes de données et améliorer les performances.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Vectorisation et broadcasting</li>
                  <li>• Memory usage optimization</li>
                  <li>• Chunking pour big data</li>
                  <li>• Categorical data types</li>
                  <li>• Parallel processing avec Dask</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Performance</Badge>
                  <Badge variant="outline">Memory</Badge>
                  <Badge variant="outline">Big Data</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Outil Incontournable</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Pandas est la bibliothèque de référence pour l'analyse de données en Python,
              utilisée par des millions de data scientists dans le monde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Database className="mr-2 h-5 w-5" />
                Formation Pandas
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                Projets Données
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
