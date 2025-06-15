
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Star, ExternalLink, CheckCircle, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const OutilsIA = () => {
  const categories = [
    {
      name: "IA Générative",
      tools: [
        { name: "ChatGPT", rating: 4.8, price: "20$/mois", description: "Assistant IA conversationnel polyvalent" },
        { name: "Claude", rating: 4.7, price: "20$/mois", description: "IA éthique pour l'analyse et la rédaction" },
        { name: "Gemini Pro", rating: 4.6, price: "20$/mois", description: "IA multimodale de Google" }
      ]
    },
    {
      name: "Création de Contenu",
      tools: [
        { name: "Midjourney", rating: 4.9, price: "10$/mois", description: "Génération d'images artistiques" },
        { name: "Copy.ai", rating: 4.5, price: "36$/mois", description: "Rédaction marketing automatisée" },
        { name: "Jasper", rating: 4.4, price: "39$/mois", description: "Assistant rédactionnel professionnel" }
      ]
    },
    {
      name: "Automatisation",
      tools: [
        { name: "Zapier", rating: 4.6, price: "20$/mois", description: "Automatisation workflow sans code" },
        { name: "Make", rating: 4.5, price: "9$/mois", description: "Intégration et automatisation avancée" },
        { name: "UiPath", rating: 4.3, price: "Sur devis", description: "RPA enterprise niveau" }
      ]
    },
    {
      name: "Analyse de Données",
      tools: [
        { name: "Tableau", rating: 4.4, price: "70$/mois", description: "Visualisation données avancée" },
        { name: "DataRobot", rating: 4.2, price: "Sur devis", description: "AutoML pour tous" },
        { name: "H2O.ai", rating: 4.1, price: "Gratuit", description: "Plateforme ML open source" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Outils IA Recommandés
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Notre sélection des meilleurs outils IA testés et approuvés 
            par nos experts pour optimiser votre productivité
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Découvrir les outils
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Outils par Catégorie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque outil a été testé par notre équipe et noté selon ses performances, 
              facilité d'usage et rapport qualité-prix.
            </p>
          </div>
          
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Card key={toolIndex} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-semibold">{tool.rating}</span>
                        </div>
                      </div>
                      <Badge className="w-fit bg-purple-100 text-purple-800">{tool.price}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1" asChild>
                          <Link to="/contact">Essayer</Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Critères de Sélection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Qualité</h3>
              <p className="text-gray-600 text-sm">Performance et fiabilité des résultats</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Facilité</h3>
              <p className="text-gray-600 text-sm">Interface intuitive et prise en main rapide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Fiabilité</h3>
              <p className="text-gray-600 text-sm">Stabilité et support technique</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Fonctionnalités avancées et évolution</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilsIA;
