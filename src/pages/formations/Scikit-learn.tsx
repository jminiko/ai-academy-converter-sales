
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Target, Zap, Settings, TrendingUp, Database, Brain, Users } from "lucide-react";

const ScikitLearn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Scikit-learn</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez scikit-learn pour l'apprentissage automatique classique et l'analyse de données
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            🔬 ML Classique
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Classification</h3>
              <p className="text-sm text-gray-600">Algorithmes supervisés</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Régression</h3>
              <p className="text-sm text-gray-600">Prédiction continue</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Clustering</h3>
              <p className="text-sm text-gray-600">Apprentissage non supervisé</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Préprocessing</h3>
              <p className="text-sm text-gray-600">Préparation des données</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Scikit-learn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Algorithmes de Classification
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez les algorithmes de classification les plus utilisés
                  pour résoudre des problèmes de catégorisation de données.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Random Forest et Decision Trees</li>
                  <li>• Support Vector Machines (SVM)</li>
                  <li>• Logistic Regression</li>
                  <li>• Naive Bayes</li>
                  <li>• k-Nearest Neighbors (k-NN)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Random Forest</Badge>
                  <Badge variant="outline">SVM</Badge>
                  <Badge variant="outline">Classification</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  Modèles de Régression
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques de régression pour prédire
                  des valeurs continues et analyser les relations entre variables.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Linear et Polynomial Regression</li>
                  <li>• Ridge et Lasso Regression</li>
                  <li>• Elastic Net</li>
                  <li>• Support Vector Regression</li>
                  <li>• Gaussian Process Regression</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Linear Regression</Badge>
                  <Badge variant="outline">Regularization</Badge>
                  <Badge variant="outline">Prediction</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-2" />
                  Clustering et Réduction de Dimensionnalité
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez l'apprentissage non supervisé avec les techniques
                  de clustering et de réduction de dimensionnalité.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• K-Means et Hierarchical Clustering</li>
                  <li>• DBSCAN et Mean Shift</li>
                  <li>• PCA et t-SNE</li>
                  <li>• Feature Selection</li>
                  <li>• Manifold Learning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">K-Means</Badge>
                  <Badge variant="outline">PCA</Badge>
                  <Badge variant="outline">Clustering</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-orange-600 mr-2" />
                  Preprocessing et Pipeline
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques de préparation des données
                  et créez des pipelines ML robustes et reproductibles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Scaling et Normalization</li>
                  <li>• Encoding des variables catégorielles</li>
                  <li>• Gestion des valeurs manquantes</li>
                  <li>• Pipeline et Column Transformer</li>
                  <li>• Cross-validation et Grid Search</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Preprocessing</Badge>
                  <Badge variant="outline">Pipeline</Badge>
                  <Badge variant="outline">Cross-validation</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Excellez en ML Classique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Devenez expert en scikit-learn et maîtrisez l'ensemble des algorithmes
              d'apprentissage automatique pour vos projets data science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <BarChart className="mr-2 h-5 w-5" />
                Formation Scikit-learn
              </Button>
              <Button size="lg" variant="outline">
                <Database className="mr-2 h-5 w-5" />
                Projets ML
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScikitLearn;
