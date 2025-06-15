
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ArrowRight, MessageCircle, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const ChatGPTPro = () => {
  const modules = [
    {
      title: "Fondamentaux ChatGPT",
      duration: "2h",
      topics: ["Interface et fonctionnalités", "Types de prompts", "Limitations et bonnes pratiques", "Sécurité des données"]
    },
    {
      title: "Prompt Engineering Avancé",
      duration: "3h", 
      topics: ["Techniques de prompting", "Chain of Thought", "Few-shot learning", "Prompt templates"]
    },
    {
      title: "ChatGPT pour Business",
      duration: "2h",
      topics: ["Rédaction professionnelle", "Analyse de données", "Support client", "Génération de code"]
    },
    {
      title: "Automatisation & API",
      duration: "2h",
      topics: ["API OpenAI", "Intégrations", "Workflows automatisés", "Custom GPTs"]
    }
  ];

  const benefits = [
    "Maîtrise complète de ChatGPT",
    "Augmentation de 50% de productivité",
    "Techniques d'experts certifiées", 
    "Cas d'usage sectoriels",
    "Support 6 mois inclus",
    "Certification officielle"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">
            🤖 Formation ChatGPT Professionnelle
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Formation ChatGPT Pro : Maîtrisez l'IA Conversationnelle
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Devenez expert ChatGPT en 2 jours. Formation pratique avec certification 
            pour transformer votre productivité et celle de vos équipes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/contact">S'inscrire maintenant</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">16h</div>
              <p className="text-gray-600">Formation intensive</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">12</div>
              <p className="text-gray-600">Participants max</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">4.9/5</div>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">95%</div>
              <p className="text-gray-600">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programme de Formation</h2>
            <p className="text-xl text-gray-600">16 heures de formation intensive sur 2 jours</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Pourquoi Choisir Notre Formation ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Tarifs Formation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Formation Individuelle</CardTitle>
                  <div className="text-3xl font-bold text-green-600">1 890€</div>
                  <p className="text-gray-600">HT par personne</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Formation complète 16h
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Support 6 mois
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Certification
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500 relative">
                <Badge className="absolute top-4 right-4 bg-green-600">Populaire</Badge>
                <CardHeader>
                  <CardTitle className="text-2xl">Formation Équipe</CardTitle>
                  <div className="text-3xl font-bold text-green-600">1 490€</div>
                  <p className="text-gray-600">HT par personne (5+ pers.)</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Formation sur-mesure
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Support 12 mois
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Suivi personnalisé
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Maîtriser ChatGPT ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Rejoignez les 2000+ professionnels formés. Prochaine session dans 2 semaines.
          </p>
          
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Réserver ma place <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatGPTPro;
