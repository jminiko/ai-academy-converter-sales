
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Video, FileText, Code, Brain, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GuidesEtTutoriels = () => {
  const guides = [
    {
      icon: Brain,
      title: "Guide Débutant IA",
      description: "Premiers pas avec l'intelligence artificielle",
      level: "Débutant",
      duration: "2h",
      type: "Guide PDF",
      color: "bg-blue-500"
    },
    {
      icon: Code,
      title: "API OpenAI - Tutoriel",
      description: "Intégrer ChatGPT dans vos applications",
      level: "Intermédiaire",
      duration: "4h",
      type: "Tutoriel vidéo",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Automatisation No-Code",
      description: "Créer des workflows automatiques sans coder",
      level: "Débutant",
      duration: "3h",
      type: "Guide pratique",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "Prompt Engineering",
      description: "Techniques avancées de conception de prompts",
      level: "Avancé",
      duration: "5h",
      type: "Masterclass",
      color: "bg-orange-500"
    },
    {
      icon: Brain,
      title: "IA pour le Marketing",
      description: "Optimiser vos campagnes avec l'IA",
      level: "Intermédiaire",
      duration: "3h",
      type: "Cas pratiques",
      color: "bg-pink-500"
    },
    {
      icon: Code,
      title: "Chatbots Intelligents",
      description: "Développer des assistants conversationnels",
      level: "Avancé",
      duration: "6h",
      type: "Projet guidé",
      color: "bg-indigo-500"
    }
  ];

  const categories = [
    {
      name: "IA Générative",
      count: 15,
      description: "ChatGPT, Midjourney, Stable Diffusion"
    },
    {
      name: "Automatisation",
      count: 12,
      description: "Zapier, Make, Power Automate"
    },
    {
      name: "Développement",
      count: 8,
      description: "APIs, intégrations, projets"
    },
    {
      name: "Business",
      count: 10,
      description: "Stratégie, ROI, transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">
            📚 Centre de Ressources
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Guides et Tutoriels IA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ressources complètes pour maîtriser l'intelligence artificielle à votre rythme. 
            Guides pratiques, tutoriels vidéo et projets hands-on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link to="/contact">Accès Premium</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/formations">Formations Live</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">45+</div>
              <p className="text-gray-600">Guides disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">100h</div>
              <p className="text-gray-600">Contenu vidéo</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">20+</div>
              <p className="text-gray-600">Projets pratiques</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">5k+</div>
              <p className="text-gray-600">Apprenants</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Guides Populaires
            </h2>
            <p className="text-xl text-gray-600">
              Nos ressources les plus consultées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${guide.color} text-white rounded-lg flex items-center justify-center mb-4`}>
                    <guide.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <p className="text-gray-600">{guide.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary">{guide.level}</Badge>
                    <span className="text-sm text-gray-500">{guide.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-600">{guide.type}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
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
              Catégories de Contenu
            </h2>
            <p className="text-xl text-gray-600">
              Explorez par domaine d'expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-600">{category.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900">{category.count}</div>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Explorer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Parcours d'Apprentissage Structurés
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Suivez nos parcours conçus pour vous mener de débutant à expert
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <CardTitle>Fondamentaux</CardTitle>
                  <p className="text-gray-600">Bases de l'IA et premiers outils</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">4-6 semaines</p>
                  <Button variant="outline" className="w-full">Commencer</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <CardTitle>Pratique</CardTitle>
                  <p className="text-gray-600">Projets concrets et automatisation</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">6-8 semaines</p>
                  <Button variant="outline" className="w-full">Continuer</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <CardTitle>Expertise</CardTitle>
                  <p className="text-gray-600">Développement et stratégie avancée</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">8-12 semaines</p>
                  <Button variant="outline" className="w-full">Maîtriser</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Approfondir Vos Connaissances ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Accédez à tous nos guides, tutoriels et projets pratiques
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Accès Premium <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600" asChild>
              <Link to="/formations">Formations Live</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidesEtTutoriels;
