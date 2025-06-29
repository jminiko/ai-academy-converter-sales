
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Search, Brain, FileText, Zap, Target, BookOpen, Users } from "lucide-react";

const MethodeRAG = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Méthode RAG</h1>
          <h2 className="text-2xl text-purple-100 mb-6">Retrieval-Augmented Generation</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Améliorez vos modèles de langage avec la récupération d'informations contextuelle.
            Combinez génération IA et recherche documentaire pour des résultats précis.
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🚀 Next-Gen AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Qu'est-ce que le RAG ?</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50">
                <p className="text-lg text-gray-700 mb-6">
                  Le <strong>Retrieval-Augmented Generation (RAG)</strong> est une technique qui combine
                  la puissance des modèles de langage génératifs avec la précision de la recherche documentaire.
                  Cette approche permet aux IA conversationnelles d'accéder à des connaissances externes
                  et à jour pour générer des réponses plus précises et contextuelles.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Search className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">1. Récupération</h3>
                    <p className="text-sm text-gray-600">Recherche d'informations pertinentes</p>
                  </div>
                  <div className="text-center">
                    <Brain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">2. Augmentation</h3>
                    <p className="text-sm text-gray-600">Enrichissement du contexte</p>
                  </div>
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">3. Génération</h3>
                    <p className="text-sm text-gray-600">Production de réponses contextuelles</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Précision Améliorée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Réponses basées sur des sources fiables et vérifiables</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Connaissances à Jour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accès aux informations les plus récentes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Sources Transparentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Traçabilité et vérification des informations</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Base de Connaissances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Intégration de documents d'entreprise</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Personnalisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Adaptation au contexte spécifique</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Recherche Sémantique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Compréhension du sens et du contexte</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications Pratiques du RAG</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  Support Client Intelligent
                </h3>
                <p className="text-gray-600 mb-4">
                  Chatbots capables de répondre précisément aux questions clients
                  en s'appuyant sur la documentation produit, les FAQ et les guides.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FAQ Automatisées</Badge>
                  <Badge variant="outline">Documentation Produit</Badge>
                  <Badge variant="outline">Résolution de Problèmes</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-green-600 mr-2" />
                  Assistant de Recherche
                </h3>
                <p className="text-gray-600 mb-4">
                  Outils d'aide à la recherche académique et professionnelle
                  avec synthèse automatique de sources multiples.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Recherche Académique</Badge>
                  <Badge variant="outline">Synthèse Documentaire</Badge>
                  <Badge variant="outline">Veille Technologique</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-purple-600 mr-2" />
                  Génération de Contenu
                </h3>
                <p className="text-gray-600 mb-4">
                  Création de contenu marketing, articles et rapports
                  basés sur des données et sources fiables.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Rédaction Automatique</Badge>
                  <Badge variant="outline">Content Marketing</Badge>
                  <Badge variant="outline">Rapports Analytiques</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-orange-600 mr-2" />
                  Analyse Documentaire
                </h3>
                <p className="text-gray-600 mb-4">
                  Traitement et analyse de grandes collections de documents
                  pour extraction d'insights et réponses ciblées.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Due Diligence</Badge>
                  <Badge variant="outline">Analyse Juridique</Badge>
                  <Badge variant="outline">Audit Documentaire</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Implémentez le RAG dans vos projets</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment intégrer la méthode RAG pour transformer vos applications IA
              et offrir une expérience utilisateur exceptionnelle.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Brain className="mr-2 h-5 w-5" />
              Commencer avec RAG
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MethodeRAG;
