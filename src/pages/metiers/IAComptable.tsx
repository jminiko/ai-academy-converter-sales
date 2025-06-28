
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, TrendingUp, FileText, BarChart3, CheckCircle, AlertTriangle, Clock, Shield, DollarSign } from "lucide-react";

const IAComptable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Comptables</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre pratique comptable avec l'IA : automatisation des tâches, 
            détection de fraudes et analyse prédictive pour une comptabilité moderne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Automatiser ma comptabilité
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
              Voir les gains
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Comptabilité</h2>
          
          <Tabs defaultValue="automatisation" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="automatisation">Automatisation</TabsTrigger>
              <TabsTrigger value="analyse">Analyse</TabsTrigger>
              <TabsTrigger value="conformite">Conformité</TabsTrigger>
              <TabsTrigger value="reporting">Reporting</TabsTrigger>
            </TabsList>

            <TabsContent value="automatisation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-emerald-600" />
                    Saisie Automatique
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA reconnaît et saisit automatiquement vos factures, reçus et documents comptables, 
                    réduisant les erreurs de saisie de 95%.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mb-2">OCR Avancé</Badge>
                      <p className="text-sm text-gray-600">Reconnaissance optique de caractères intelligente</p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mb-2">Classification Auto</Badge>
                      <p className="text-sm text-gray-600">Catégorisation automatique des écritures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analyse" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-emerald-600" />
                    Analyse Prédictive
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Anticipez les tendances financières et identifiez les risques grâce à l'analyse prédictive avancée.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Prévision de trésorerie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Détection d'anomalies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Analyse des tendances</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conformite" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-emerald-600" />
                    Conformité Réglementaire
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Assurez-vous de la conformité avec les réglementations comptables grâce à un suivi automatisé.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Contrôles automatiques :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vérification des soldes</li>
                      <li>• Contrôle des écritures</li>
                      <li>• Validation des déclarations</li>
                      <li>• Alertes de non-conformité</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reporting" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                    Reporting Intelligent
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Générez automatiquement des rapports financiers personnalisés et des tableaux de bord en temps réel.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Bilans Auto</h4>
                      <p className="text-sm text-gray-600">Génération automatique</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Temps Réel</h4>
                      <p className="text-sm text-gray-600">Données actualisées</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <AlertTriangle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Alertes</h4>
                      <p className="text-sm text-gray-600">Notifications automatiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAComptable;
