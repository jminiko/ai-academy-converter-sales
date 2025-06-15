
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GuidePrompts = () => {
  const promptExamples = [
    {
      type: "Rédaction",
      prompt: "Écris un email professionnel pour relancer un client, ton=courtois, contexte=facture impayée depuis 30 jours, objectif=obtenir le paiement",
      resultat: "Email structuré et diplomatique"
    },
    {
      type: "Analyse",
      prompt: "Analyse ces données de ventes [données] et identifie 3 tendances principales avec recommandations d'actions",
      resultat: "Insights actionnables et stratégiques"
    },
    {
      type: "Créativité",
      prompt: "Génère 5 concepts de campagne marketing pour [produit], cible=[audience], budget=[montant], contraintes=[liste]",
      resultat: "Idées créatives adaptées aux contraintes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-purple-100 text-purple-800">
            🎯 Guide Pratique
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guide Complet du Prompt Engineering
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              10 Juin 2024
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Expert Prompt Engineering
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              15 min de lecture
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop" 
            alt="Guide prompt engineering" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Maîtrisez l'art de concevoir des prompts efficaces pour maximiser les performances 
            de l'IA générative dans vos projets professionnels.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            La Structure CLEAR
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-2">
              <li><strong>C</strong>ontexte : Situez l'IA dans le bon environnement</li>
              <li><strong>L</strong>imites : Définissez les contraintes et restrictions</li>
              <li><strong>E</strong>xemples : Fournissez des modèles de référence</li>
              <li><strong>A</strong>ction : Spécifiez clairement la tâche demandée</li>
              <li><strong>R</strong>ésultat : Décrivez le format de sortie attendu</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Exemples de Prompts Professionnels
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 my-8">
          {promptExamples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">{example.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-mono text-gray-700">{example.prompt}</p>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">{example.resultat}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Techniques Avancées
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Chain of Thought (Chaîne de Raisonnement)
          </h3>
          <p className="text-gray-700 mb-4">
            Demandez à l'IA d'expliquer son raisonnement étape par étape pour obtenir 
            des réponses plus précises et vérifiables.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Few-Shot Learning
          </h3>
          <p className="text-gray-700 mb-6">
            Fournissez plusieurs exemples pour que l'IA comprenne le pattern et 
            reproduise le style souhaité.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              🚀 Astuce Pro
            </h3>
            <p className="text-purple-800">
              Testez vos prompts avec différentes variations et mesurez les résultats. 
              L'optimisation itérative est la clé du succès.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link to="/formations/prompt-engineering">
                Formation Prompt Engineering <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/blog">Retour au blog</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuidePrompts;
