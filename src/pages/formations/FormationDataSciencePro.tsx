
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart, Brain, Target, Code, Zap, Users, TrendingUp } from "lucide-react";

const FormationDataSciencePro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-700 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Data Science Pro</h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Devenez expert en science des données avec une formation complète et pratique
          </p>
          <Badge variant="secondary" className="bg-gray-600/30 text-white px-4 py-2 text-lg mb-6">
            📊 Data Science & Analytics
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Avancées</h3>
              <p className="text-sm text-gray-600">Analyse prédictive</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Machine Learning</h3>
              <p className="text-sm text-gray-600">Modèles prédictifs</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Python & R</h3>
              <p className="text-sm text-gray-600">Programmation avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Business Intelligence</h3>
              <p className="text-sm text-gray-600">Insights stratégiques</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Parcours Data Science Professionnel</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-slate-600 mr-2" />
                  Fondamentaux Data Science
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les concepts fondamentaux de la science des données,
                  de l'acquisition à l'analyse des données complexes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Statistiques descriptives et inférentielles</li>
                  <li>• Probabilités et distributions</li>
                  <li>• Tests d'hypothèses et significativité</li>
                  <li>• Corrélation et régression</li>
                  <li>• Analyse de séries temporelles</li>
                  <li>• Méthodes d'échantillonnage</li>
                  <li>• Visualisation de données avancée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Statistics</Badge>
                  <Badge variant="outline">Probability</Badge>
                  <Badge variant="outline">Data Visualization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-blue-600 mr-2" />
                  Programmation & Outils
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez vos compétences en programmation avec les outils
                  et langages essentiels de la data science moderne.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Python avancé pour data science</li>
                  <li>• R et écosystème tidyverse</li>
                  <li>• SQL et bases de données NoSQL</li>
                  <li>• Pandas, NumPy, SciPy</li>
                  <li>• Jupyter Notebooks et Google Colab</li>
                  <li>• Git et versioning de code</li>
                  <li>• APIs et web scraping</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">R</Badge>
                  <Badge variant="outline">SQL</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-green-600 mr-2" />
                  Machine Learning Appliqué
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des algorithmes de machine learning pour résoudre
                  des problèmes business complexes et créer de la valeur.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Apprentissage supervisé et non-supervisé</li>
                  <li>• Régression linéaire et logistique</li>
                  <li>• Arbres de décision et Random Forest</li>
                  <li>• SVM et méthodes ensemblistes</li>
                  <li>• Clustering et segmentation</li>
                  <li>• Réduction de dimensionnalité (PCA)</li>
                  <li>• Évaluation et optimisation de modèles</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Supervised Learning</Badge>
                  <Badge variant="outline">Unsupervised Learning</Badge>
                  <Badge variant="outline">Model Optimization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                  Projets Professionnels
                </h3>
                <p className="text-gray-600 mb-4">
                  Réalisez des projets end-to-end qui simulent des défis
                  réels d'entreprise pour enrichir votre portfolio.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse de churn clients e-commerce</li>
                  <li>• Prédiction de prix immobiliers</li>
                  <li>• Détection de fraudes financières</li>
                  <li>• Recommandation de contenus</li>
                  <li>• Analyse de sentiment réseaux sociaux</li>
                  <li>• Optimisation de pricing dynamique</li>
                  <li>• Dashboard business intelligence</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Real Projects</Badge>
                  <Badge variant="outline">Portfolio</Badge>
                  <Badge variant="outline">Business Cases</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Stack Technologique Complète</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold mb-4 text-slate-700">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Python</Badge>
                  <Badge>R</Badge>
                  <Badge>SQL</Badge>
                  <Badge>Scala</Badge>
                  <Badge>Julia</Badge>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 text-slate-700">Libraries & Tools</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Pandas</Badge>
                  <Badge>NumPy</Badge>
                  <Badge>Scikit-learn</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>PyTorch</Badge>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 text-slate-700">Visualization & BI</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Matplotlib</Badge>
                  <Badge>Seaborn</Badge>
                  <Badge>Plotly</Badge>
                  <Badge>Tableau</Badge>
                  <Badge>Power BI</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Votre Carrière Data Science</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformez votre passion pour les données en expertise professionnelle 
              recherchée sur le marché du travail avec un accompagnement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-700 hover:bg-slate-800">
                <Database className="mr-2 h-5 w-5" />
                Formation Data Science Pro
              </Button>
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                Communauté Data Scientists
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationDataSciencePro;
