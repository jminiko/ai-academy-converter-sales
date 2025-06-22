
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, ArrowRight, CheckCircle, Brain, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const GuideDebutantIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide Débutant IA 2024
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Votre guide complet pour comprendre et utiliser l'IA dans votre entreprise
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Télécharger le guide gratuit
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi ce guide ?</h2>
              <p className="text-lg text-gray-600 mb-6">
                L'intelligence artificielle transforme le monde des affaires. Ce guide vous donne 
                toutes les clés pour comprendre, adopter et réussir votre transformation IA.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Concepts fondamentaux</h3>
                    <p className="text-gray-600">Comprenez l'IA sans jargon technique</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Cas d'usage concrets</h3>
                    <p className="text-gray-600">Applications pratiques par secteur</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Feuille de route</h3>
                    <p className="text-gray-600">Plan d'action étape par étape</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-yellow-100 text-yellow-800">Guide Gratuit</Badge>
                <h3 className="text-2xl font-bold mb-2">120 pages d'expertise</h3>
                <div className="flex justify-center items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">4.8/5 (1,247 téléchargements)</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Lecture 2-3h</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Dirigeants & équipes</span>
                </div>
                <div className="flex items-center">
                  <Brain className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Niveau débutant</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-yellow-600">Gratuit</p>
                <p className="text-gray-500">Aucune carte requise</p>
              </div>
              
              <Button className="w-full" size="lg" asChild>
                <Link to="/contact">Télécharger maintenant</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contenu du guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Partie 1: Comprendre l'IA</CardTitle>
                <CardDescription>Les fondamentaux expliqués simplement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Qu'est-ce que l'IA vraiment ?</li>
                  <li>• Machine Learning vs Deep Learning</li>
                  <li>• IA générative et ChatGPT</li>
                  <li>• Mythes et réalités</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Partie 2: Applications métier</CardTitle>
                <CardDescription>Cas d'usage par département</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Marketing et ventes</li>
                  <li>• Ressources humaines</li>
                  <li>• Comptabilité et finance</li>
                  <li>• Service client</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ArrowRight className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Partie 3: Mise en œuvre</CardTitle>
                <CardDescription>Votre plan d'action</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Audit de maturité IA</li>
                  <li>• Choix des outils</li>
                  <li>• Formation des équipes</li>
                  <li>• Mesure du ROI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideDebutantIA2024;
