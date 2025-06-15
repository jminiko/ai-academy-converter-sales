
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Image, Code, Video, FileText, Star, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OutilsIA = () => {
  const categories = [
    {
      icon: MessageSquare,
      name: "IA Conversationnelle",
      color: "bg-blue-500",
      count: 8
    },
    {
      icon: Image,
      name: "Génération d'Images",
      color: "bg-purple-500",
      count: 6
    },
    {
      icon: Video,
      name: "Création Vidéo",
      color: "bg-green-500",
      count: 5
    },
    {
      icon: Code,
      name: "Développement",
      color: "bg-orange-500",
      count: 12
    },
    {
      icon: FileText,
      name: "Rédaction",
      color: "bg-red-500",
      count: 10
    },
    {
      icon: Brain,
      name: "Analyse & Data",
      color: "bg-indigo-500",
      count: 7
    }
  ];

  const tools = [
    {
      name: "ChatGPT",
      category: "Conversationnel",
      description: "IA conversationnelle pour tous types de tâches",
      pricing: "Freemium",
      rating: 4.8,
      popular: true,
      link: "#"
    },
    {
      name: "Midjourney",
      category: "Image",
      description: "Génération d'images artistiques de haute qualité",
      pricing: "Payant",
      rating: 4.9,
      popular: true,
      link: "#"
    },
    {
      name: "GitHub Copilot",
      category: "Code",
      description: "Assistant IA pour la programmation",
      pricing: "Payant",
      rating: 4.7,
      popular: false,
      link: "#"
    },
    {
      name: "Notion AI",
      category: "Productivité",
      description: "IA intégrée pour la prise de notes et l'organisation",
      pricing: "Freemium",
      rating: 4.6,
      popular: false,
      link: "#"
    },
    {
      name: "Runway ML",
      category: "Vidéo",
      description: "Création et édition vidéo avec IA",
      pricing: "Freemium",
      rating: 4.5,
      popular: false,
      link: "#"
    },
    {
      name: "Claude",
      category: "Conversationnel",
      description: "IA conversationnelle d'Anthropic",
      pricing: "Freemium",
      rating: 4.7,
      popular: true,
      link: "#"
    }
  ];

  const comparisons = [
    {
      criteria: "Facilité d'utilisation",
      chatgpt: 9,
      claude: 8,
      bard: 8
    },
    {
      criteria: "Qualité des réponses",
      chatgpt: 9,
      claude: 9,
      bard: 7
    },
    {
      criteria: "Rapidité",
      chatgpt: 8,
      claude: 8,
      bard: 9
    },
    {
      criteria: "Prix",
      chatgpt: 7,
      claude: 8,
      bard: 10
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-gray-100 text-gray-800">
            🛠️ Outils IA
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Découvrez les Meilleurs Outils IA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comparaisons détaillées, guides d'utilisation et recommandations 
            pour choisir les outils IA adaptés à vos besoins.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800" asChild>
              <Link to="/contact">Conseil personnalisé</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/formations">Formations outils</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <p className="text-gray-600">Outils analysés</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">25</div>
              <p className="text-gray-600">Comparaisons détaillées</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <p className="text-gray-600">Satisfaction clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Catégories d'Outils
            </h2>
            <p className="text-xl text-gray-600">
              Explorez les outils par domaine d'application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} text-white rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <p className="text-gray-600">{category.count} outils disponibles</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Explorer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Outils Recommandés
            </h2>
            <p className="text-xl text-gray-600">
              Notre sélection des meilleurs outils IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl flex items-center">
                        {tool.name}
                        {tool.popular && (
                          <Badge className="ml-2 bg-yellow-100 text-yellow-800">
                            Populaire
                          </Badge>
                        )}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">{tool.category}</Badge>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{tool.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium">{tool.pricing}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">Essayer</Button>
                    <Button size="sm" variant="outline">Guide</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comparaison des IA Conversationnelles
            </h2>
            <p className="text-xl text-gray-600">
              ChatGPT vs Claude vs Bard - Analyse détaillée
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-4 text-left">Critères</th>
                    <th className="border border-gray-200 p-4 text-center">ChatGPT</th>
                    <th className="border border-gray-200 p-4 text-center">Claude</th>
                    <th className="border border-gray-200 p-4 text-center">Bard</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-4 font-medium">{comparison.criteria}</td>
                      <td className="border border-gray-200 p-4 text-center">
                        <div className="flex justify-center">
                          {[...Array(10)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 mx-0.5 rounded-full ${
                                i < comparison.chatgpt ? 'bg-blue-500' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        <div className="flex justify-center">
                          {[...Array(10)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 mx-0.5 rounded-full ${
                                i < comparison.claude ? 'bg-green-500' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        <div className="flex justify-center">
                          {[...Array(10)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 mx-0.5 rounded-full ${
                                i < comparison.bard ? 'bg-orange-500' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Besoin d'Aide pour Choisir ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Nos experts vous conseillent gratuitement sur les meilleurs outils pour votre projet
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Conseil gratuit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link to="/formations">Formations spécialisées</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilsIA;
