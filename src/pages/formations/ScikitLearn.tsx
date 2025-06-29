
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, BarChart3, Settings, Zap, TreePine, Users, Database } from "lucide-react";

const ScikitLearn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Scikit-Learn</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez Scikit-Learn pour le machine learning accessible et efficace
          </p>
          <Badge variant="secondary" className="bg-cyan-500/30 text-white px-4 py-2 text-lg mb-6">
            🤖 Machine Learning Library
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Classification</h3>
              <p className="text-sm text-gray-600">Algorithmes supervisés</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Régression</h3>
              <p className="text-sm text-gray-600">Prédiction numérique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Clustering</h3>
              <p className="text-sm text-gray-600">Groupement automatique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Preprocessing</h3>
              <p className="text-sm text-gray-600">Préparation données</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Scikit-Learn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-teal-600 mr-2" />
                  Apprentissage Supervisé
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les algorithmes de classification et régression
                  pour créer des modèles prédictifs précis et robustes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Linear et Logistic Regression</li>
                  <li>• Support Vector Machines (SVM)</li>
                  <li>• Decision Trees et Random Forest</li>
                  <li>• Gradient Boosting (XGBoost, LightGBM)</li>
                  <li>• Neural Networks (MLPClassifier)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Classification</Badge>
                  <Badge variant="outline">Regression</Badge>
                  <Badge variant="outline">Ensemble</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-cyan-600 mr-2" />
                  Apprentissage Non Supervisé
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les techniques de clustering, réduction de dimension
                  et détection d'anomalies pour découvrir des patterns cachés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• K-Means et clustering hiérarchique</li>
                  <li>• PCA et analyse en composantes</li>
                  <li>• t-SNE et UMAP pour visualisation</li>
                  <li>• Isolation Forest pour anomalies</li>
                  <li>• Association rules et market basket</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Clustering</Badge>
                  <Badge variant="outline">Dimensionality</Badge>
                  <Badge variant="outline">Anomaly Detection</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-blue-600 mr-2" />
                  Preprocessing et Pipeline
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques de préparation des données et
                  la création de pipelines ML robustes et reproductibles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Feature scaling et normalisation</li>
                  <li>• Encoding de variables catégorielles</li>
                  <li>• Feature selection et engineering</li>
                  <li>• Pipeline construction</li>
                  <li>• Cross-validation et grid search</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Preprocessing</Badge>
                  <Badge variant="outline">Pipelines</Badge>
                  <Badge variant="outline">Feature Engineering</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-6 w-6 text-green-600 mr-2" />
                  Évaluation et Optimisation
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à évaluer, valider et optimiser vos modèles
                  pour obtenir les meilleures performances possibles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Métriques d'évaluation complètes</li>
                  <li>• Cross-validation et bootstrap</li>
                  <li>• Hyperparameter tuning</li>
                  <li>• Model selection et comparison</li>
                  <li>• Bias-variance tradeoff</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Evaluation</Badge>
                  <Badge variant="outline">Validation</Badge>
                  <Badge variant="outline">Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">ML Accessible à Tous</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Scikit-Learn rend le machine learning accessible avec une API simple
              et des algorithmes optimisés pour tous les cas d'usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Brain className="mr-2 h-5 w-5" />
                Formation Scikit-Learn
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
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
