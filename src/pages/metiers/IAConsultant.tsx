
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Brain, BarChart, Shield, Globe, Zap, Target, Settings, Monitor, Database, Eye } from "lucide-react";

const IAConsultant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Consultant</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Devenez consultant expert en intelligence artificielle.
            Stratégie, implémentation et transformation digitale pour les entreprises.
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            🎯 AI Strategy Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Stratégie IA</h3>
              <p className="text-sm text-gray-600">Vision et roadmap</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Transformation Digitale</h3>
              <p className="text-sm text-gray-600">Accompagnement changement</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">ROI & Métriques</h3>
              <p className="text-sm text-gray-600">Mesure performance</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gouvernance IA</h3>
              <p className="text-sm text-gray-600">Éthique et conformité</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Missions Consultant IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  Stratégie IA Enterprise
                </h3>
                <p className="text-gray-600 mb-4">
                  Définissez et implémentez des stratégies IA alignées sur les
                  objectifs métier et la vision long terme de l'entreprise.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• AI readiness assessment</li>
                  <li>• Use cases identification</li>
                  <li>• Roadmap stratégique IA</li>
                  <li>• Business case development</li>
                  <li>• Change management planning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AI Strategy</Badge>
                  <Badge variant="outline">Business Case</Badge>
                  <Badge variant="outline">Roadmap</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Transformation Organisationnelle
                </h3>
                <p className="text-gray-600 mb-4">
                  Accompagnez les organisations dans leur transformation
                  digitale et l'adoption de l'intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Diagnostic organisationnel</li>
                  <li>• Formation équipes métier</li>
                  <li>• Conduite du changement</li>
                  <li>• Processus optimization</li>
                  <li>• Culture data-driven</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Change Management</Badge>
                  <Badge variant="outline">Training</Badge>
                  <Badge variant="outline">Process Optimization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-purple-600 mr-2" />
                  Performance & ROI IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Mesurez et optimisez les performances des initiatives IA
                  pour maximiser le retour sur investissement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• KPIs et métriques IA</li>
                  <li>• ROI calculation methods</li>
                  <li>• Performance monitoring</li>
                  <li>• Value realization tracking</li>
                  <li>• Continuous improvement</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ROI Measurement</Badge>
                  <Badge variant="outline">KPIs</Badge>
                  <Badge variant="outline">Performance</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-orange-600 mr-2" />
                  Gouvernance & Éthique IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Établissez des frameworks de gouvernance IA pour assurer
                  l'éthique, la conformité et la gestion des risques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• AI governance frameworks</li>
                  <li>• Ethical AI principles</li>
                  <li>• Risk management IA</li>
                  <li>• Regulatory compliance</li>
                  <li>• Model explainability</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AI Governance</Badge>
                  <Badge variant="outline">Ethics</Badge>
                  <Badge variant="outline">Risk Management</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Compétences Consultant IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Data Strategy</h3>
                <p className="text-sm text-gray-600">Architecture données</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Technology Stack</h3>
                <p className="text-sm text-gray-600">Solutions techniques</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Industry Knowledge</h3>
                <p className="text-sm text-gray-600">Expertise sectorielle</p>
              </Card>
              <Card className="p-6 text-center">
                <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Stakeholder Management</h3>
                <p className="text-sm text-gray-600">Communication executive</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Devenez Expert Consultant IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Développez votre expertise en conseil IA pour accompagner les entreprises
              dans leur transformation digitale et l'adoption de l'intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Users className="mr-2 h-5 w-5" />
                Formation Consultant IA
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                Certification Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAConsultant;
