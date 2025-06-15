
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Video, Headphones, BookOpen, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const RessourcesGratuites = () => {
  const freeResources = [
    {
      title: "Guide Complet ChatGPT Business",
      type: "PDF",
      pages: "45 pages",
      downloads: "5,200+",
      description: "Tout ce qu'il faut savoir pour utiliser ChatGPT en entreprise",
      icon: <FileText className="h-6 w-6" />,
      color: "blue"
    },
    {
      title: "Template Pack Prompts",
      type: "Templates",
      pages: "50 prompts",
      downloads: "3,800+",
      description: "Collection de prompts prêts à l'emploi pour tous vos besoins",
      icon: <BookOpen className="h-6 w-6" />,
      color: "green"
    },
    {
      title: "Webinaire : IA et Productivité",
      type: "Vidéo",
      pages: "60 min",
      downloads: "2,100+",
      description: "Masterclass complète pour booster votre productivité avec l'IA",
      icon: <Video className="h-6 w-6" />,
      color: "purple"
    },
    {
      title: "Podcast IA Trends",
      type: "Audio",
      pages: "12 épisodes",
      downloads: "1,500+",
      description: "Les dernières tendances IA décryptées par nos experts",
      icon: <Headphones className="h-6 w-6" />,
      color: "orange"
    }
  ];

  const tools = [
    {
      name: "Calculateur ROI IA",
      description: "Estimez le retour sur investissement de vos projets IA",
      type: "Outil en ligne"
    },
    {
      name: "Audit Checklist IA",
      description: "Liste de vérification pour auditer vos processus",
      type: "Checklist PDF"
    },
    {
      name: "Générateur de Prompts",
      description: "Créez des prompts optimisés automatiquement",
      type: "Générateur"
    }
  ];

  const courses = [
    {
      title: "Introduction à l'IA Générative",
      duration: "2h",
      lessons: "8 leçons",
      level: "Débutant"
    },
    {
      title: "Prompt Engineering Basics",
      duration: "1.5h",
      lessons: "6 leçons",
      level: "Débutant"
    },
    {
      title: "IA pour les Managers",
      duration: "3h",
      lessons: "10 leçons",
      level: "Intermédiaire"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Gift className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Ressources Gratuites
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Accédez à notre bibliothèque de ressources gratuites : guides, templates, 
            webinaires et outils pour maîtriser l'IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Explorer toutes les ressources
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Guides & Documents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {freeResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-${resource.color}-100 text-${resource.color}-600`}>
                        {resource.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <Badge className={`bg-${resource.color}-100 text-${resource.color}-800 mt-1`}>
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{resource.pages}</div>
                      <div>{resource.downloads} téléchargements</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger gratuitement
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-purple-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Outils Gratuits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <Badge variant="outline">{tool.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                    <Button size="sm" className="w-full">
                      Utiliser l'outil
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Cours Gratuits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <Badge className="bg-purple-100 text-purple-800">{course.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.lessons}</p>
                  <Button className="w-full" asChild>
                    <Link to="/formations">Commencer le cours</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Newsletter Ressources</h2>
            <p className="text-lg text-gray-600 mb-8">
              Recevez chaque semaine de nouvelles ressources gratuites directement dans votre boîte mail
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Guides Exclusifs</h4>
                  <p className="text-sm text-gray-600">Accès prioritaire aux nouveaux guides</p>
                </div>
                <div className="text-center">
                  <Video className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Webinaires</h4>
                  <p className="text-sm text-gray-600">Invitations aux événements exclusifs</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Tips & Astuces</h4>
                  <p className="text-sm text-gray-600">Conseils pratiques chaque semaine</p>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button>S'abonner</Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Désabonnement possible à tout moment. Pas de spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RessourcesGratuites;
