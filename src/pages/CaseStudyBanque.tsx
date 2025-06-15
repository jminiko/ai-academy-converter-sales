
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyBanque = () => {
  const results = [
    { metric: "Productivité", improvement: "+65%", description: "Gain de temps sur le traitement des demandes" },
    { metric: "Satisfaction Client", improvement: "+40%", description: "Réduction du temps d'attente" },
    { metric: "Coûts Opérationnels", improvement: "-50%", description: "Automatisation des tâches répétitives" },
    { metric: "Précision", improvement: "+95%", description: "Réduction des erreurs humaines" }
  ];

  const solutions = [
    "Chatbot intelligent pour le service client",
    "Automatisation du scoring crédit",
    "Analyse prédictive des risques",
    "Traitement automatique des documents",
    "Détection de fraude en temps réel"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800">
            💼 Étude de Cas
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Transformation IA d'une Banque Régionale
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comment une banque de 500 employés a révolutionné ses opérations 
            grâce à l'intelligence artificielle en 6 mois.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop" 
            alt="Banque transformation digitale" 
            className="w-full h-64 object-cover rounded-lg mb-12"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Le Défi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Problèmes Identifiés</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Temps de traitement des crédits : 15 jours</li>
                  <li>• Taux d'erreur manuel : 12%</li>
                  <li>• Coût par transaction : 25€</li>
                  <li>• Satisfaction client : 6.2/10</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Objectifs Fixés</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Réduire les délais de 70%</li>
                  <li>• Diminuer les erreurs de 80%</li>
                  <li>• Optimiser les coûts de 50%</li>
                  <li>• Améliorer l'expérience client</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Solutions Implémentées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">{solution}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Résultats Obtenus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {results.map((result, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{result.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {result.improvement}
                  </div>
                  <p className="text-sm text-gray-600">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-green-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              📈 Impact Business
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">2.5M€</div>
                <p className="text-green-600">Économies annuelles</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">6 mois</div>
                <p className="text-green-600">ROI atteint</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">150</div>
                <p className="text-green-600">Employés formés</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Facteurs Clés de Succès</h2>
          
          <div className="space-y-4 mb-12">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
              <div>
                <h4 className="font-semibold">Formation des Équipes</h4>
                <p className="text-gray-600">Accompagnement intensif de 3 mois pour tous les utilisateurs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
              <div>
                <h4 className="font-semibold">Approche Progressive</h4>
                <p className="text-gray-600">Déploiement par phases avec validation à chaque étape</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
              <div>
                <h4 className="font-semibold">Support Continu</h4>
                <p className="text-gray-600">Assistance technique et optimisation continue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Votre Entreprise Peut Aussi Réussir sa Transformation IA
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Bénéficiez de notre expertise pour transformer vos processus métier
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Audit gratuit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/services">Nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyBanque;
