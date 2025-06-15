
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ArrowRight, Cog, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const AutomatisationIA = () => {
  const modules = [
    {
      title: "Introduction à l'Automatisation IA",
      duration: "3h",
      topics: ["Concepts fondamentaux", "Types d'automatisation", "ROI et métriques", "Cas d'usage entreprise"]
    },
    {
      title: "Outils No-Code/Low-Code",
      duration: "4h", 
      topics: ["Zapier avancé", "Make.com", "Power Automate", "n8n et alternatives"]
    },
    {
      title: "RPA & IA",
      duration: "4h",
      topics: ["UiPath basics", "Blue Prism", "Automation Anywhere", "Intégration IA"]
    },
    {
      title: "APIs et Intégrations",
      duration: "3h",
      topics: ["REST APIs", "Webhooks", "Connecteurs", "Monitoring"]
    },
    {
      title: "Projet Pratique",
      duration: "2h",
      topics: ["Conception workflow", "Implémentation", "Tests", "Déploiement"]
    }
  ];

  const tools = [
    { name: "Zapier", logo: "🔗", category: "No-Code" },
    { name: "Make.com", logo: "⚙️", category: "No-Code" },
    { name: "UiPath", logo: "🤖", category: "RPA" },
    { name: "Power Platform", logo: "⚡", category: "Microsoft" },
    { name: "OpenAI API", logo: "🧠", category: "IA" },
    { name: "Slack", logo: "💬", category: "Communication" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">
            ⚡ Formation Automatisation & IA
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Formation Automatisation IA : Transformez Vos Processus
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Maîtrisez l'automatisation intelligente en 3 jours. Apprenez à créer des workflows 
            automatisés qui intègrent l'IA pour optimiser vos processus métier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link to="/contact">S'inscrire maintenant</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Programme détaillé</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">24h</div>
              <p className="text-gray-600">Formation intensive</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">10</div>
              <p className="text-gray-600">Participants max</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">4.8/5</div>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">70%</div>
              <p className="text-gray-600">Gain productivité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programme de Formation</h2>
            <p className="text-xl text-gray-600">24 heures de formation pratique sur 3 jours</p>
          </div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outils couverts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Outils et Technologies</h2>
            <p className="text-xl text-gray-600">Maîtrisez les principales plateformes d'automatisation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center p-4">
                <div className="text-3xl mb-2">{tool.logo}</div>
                <h3 className="font-semibold">{tool.name}</h3>
                <Badge variant="outline" className="mt-2">{tool.category}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Tarifs Formation</h2>
            
            <Card className="border-2 border-purple-500 p-8">
              <CardHeader>
                <CardTitle className="text-3xl">Formation Automatisation IA</CardTitle>
                <div className="text-4xl font-bold text-purple-600 my-4">2 890€</div>
                <p className="text-gray-600">HT par personne - 3 jours</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Formation complète 24h avec projet pratique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Accès à tous les outils pendant 3 mois
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Support technique 6 mois
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Certification d'automatisation IA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Templates et workflows pré-construits
                  </li>
                </ul>
                
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link to="/contact">
                    Réserver maintenant <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Automatisez Votre Entreprise Maintenant
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            ROI garanti ou remboursé. Prochaine session le 15 janvier 2024.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link to="/contact">S'inscrire maintenant</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/contact">Demander une démo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomatisationIA;
