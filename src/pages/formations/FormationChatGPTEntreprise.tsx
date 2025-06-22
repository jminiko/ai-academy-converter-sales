
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Users, Star, ArrowRight, CheckCircle, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FormationChatGPTEntreprise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation ChatGPT Entreprise
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez ChatGPT pour transformer la productivité de votre entreprise
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Réserver ma formation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi cette formation ?</h2>
              <p className="text-lg text-gray-600 mb-6">
                ChatGPT révolutionne le monde du travail. Cette formation vous permet de maîtriser 
                tous les aspects de l'outil pour multiplier votre productivité et celle de vos équipes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Maîtrise complète de ChatGPT et GPT-4</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Techniques de prompt engineering avancées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Intégration dans vos processus métier</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Cas d'usage concrets et pratiques</span>
                </li>
              </ul>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Formation Premium</Badge>
                <h3 className="text-2xl font-bold mb-2">3 jours intensifs</h3>
                <div className="flex justify-center items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">4.9/5 (247 avis)</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <span>21h de formation</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Max 8 participants</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Certification incluse</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-blue-600">1 890€</p>
                <p className="text-gray-500 line-through">2 490€</p>
                <p className="text-green-600 font-semibold">Économisez 600€</p>
              </div>
              
              <Button className="w-full" size="lg" asChild>
                <Link to="/contact">S'inscrire maintenant</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Programme détaillé</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Jour 1: Fondamentaux</CardTitle>
                <CardDescription>Maîtrisez les bases de ChatGPT</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Interface et fonctionnalités</li>
                  <li>• Premiers prompts efficaces</li>
                  <li>• GPT-3.5 vs GPT-4</li>
                  <li>• Limitations et bonnes pratiques</li>
                  <li>• Cas d'usage par département</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Jour 2: Techniques avancées</CardTitle>
                <CardDescription>Prompt engineering et optimisation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Architecture de prompts complexes</li>
                  <li>• Chain of thought</li>
                  <li>• Few-shot learning</li>
                  <li>• Personnalisation et contexte</li>
                  <li>• Intégrations API</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Jour 3: Applications métier</CardTitle>
                <CardDescription>Mise en pratique concrète</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Automatisation de tâches</li>
                  <li>• Création de contenu</li>
                  <li>• Analyse de données</li>
                  <li>• Support client</li>
                  <li>• Projet final et certification</li>
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

export default FormationChatGPTEntreprise;
