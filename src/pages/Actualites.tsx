
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Eye, ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const Actualites = () => {
  const actualites = [
    {
      titre: "OpenAI lance GPT-4 Turbo avec des capacités multimodales avancées",
      resume: "Découvrez les nouvelles fonctionnalités de GPT-4 Turbo et leur impact sur les entreprises françaises.",
      date: "15 Juin 2024",
      auteur: "Sophie Martin",
      categorie: "Technologie",
      lectureTemps: "5 min",
      vues: 1250,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      urgent: true
    },
    {
      titre: "L'IA générative transforme le secteur bancaire français",
      resume: "Comment les banques françaises adoptent l'IA pour améliorer leur service client et optimiser leurs opérations.",
      date: "12 Juin 2024",
      auteur: "Alexandre Dubois",
      categorie: "Finance",
      lectureTemps: "7 min",
      vues: 890,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      urgent: false
    },
    {
      titre: "Microsoft Copilot Pro : nouvelles fonctionnalités pour les entreprises",
      resume: "Les dernières mises à jour de Microsoft Copilot Pro et leurs applications concrètes en entreprise.",
      date: "10 Juin 2024",
      auteur: "Pierre Laurent",
      categorie: "Outils",
      lectureTemps: "4 min",
      vues: 654,
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
      urgent: false
    },
    {
      titre: "Réglementation IA : ce que change l'AI Act européen",
      resume: "Analyse complète de l'impact de la réglementation européenne sur l'IA pour les entreprises.",
      date: "8 Juin 2024",
      auteur: "Marie Rousseau",
      categorie: "Réglementation",
      lectureTemps: "8 min",
      vues: 1120,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      urgent: false
    },
    {
      titre: "Claude 3.5 Sonnet : révolution dans le traitement du langage naturel",
      resume: "Test approfondi des nouvelles capacités de Claude 3.5 Sonnet d'Anthropic.",
      date: "5 Juin 2024",
      auteur: "Thomas Chen",
      categorie: "Technologie",
      lectureTemps: "6 min",
      vues: 987,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      urgent: false
    },
    {
      titre: "ROI de l'IA : comment mesurer l'impact dans votre entreprise",
      resume: "Méthodologies et KPIs pour évaluer le retour sur investissement de vos projets IA.",
      date: "3 Juin 2024",
      auteur: "Julie Moreau",
      categorie: "Business",
      lectureTemps: "9 min",
      vues: 2340,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      urgent: false
    }
  ];

  const categories = ["Tous", "Technologie", "Business", "Finance", "Outils", "Réglementation"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Newspaper className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Actualités IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Restez informé des dernières tendances, innovations et réglementations 
            dans le domaine de l'intelligence artificielle.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            S'abonner aux alertes
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((categorie, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {categorie}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {actualites.map((article, index) => (
                  <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${article.urgent ? 'border-red-500 border-2' : ''}`}>
                    {article.urgent && (
                      <div className="bg-red-500 text-white px-4 py-2 text-sm font-semibold">
                        🚨 URGENT - Nouvelle importante
                      </div>
                    )}
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={article.image} 
                          alt={article.titre}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-orange-100 text-orange-800">
                            {article.categorie}
                          </Badge>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {article.date}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.lectureTemps}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer">
                          {article.titre}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.resume}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            {article.auteur}
                            <Eye className="h-4 w-4 ml-4 mr-1" />
                            {article.vues} vues
                          </div>
                          <Button variant="outline" size="sm">
                            Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Newspaper className="h-5 w-5 mr-2 text-orange-600" />
                    Newsletter IA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Recevez chaque semaine notre sélection des actualités IA les plus importantes.
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <Link to="/newsletter">
                      S'abonner gratuitement
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Articles les plus lus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {actualites.slice(0, 4).map((article, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-2xl font-bold text-orange-600">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm hover:text-orange-600 cursor-pointer">
                            {article.titre}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {article.vues} vues • {article.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prochains événements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Webinaire : IA et Productivité</h4>
                      <p className="text-sm text-gray-600">20 Juin 2024 - 14h00</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Formation ChatGPT Pro</h4>
                      <p className="text-sm text-gray-600">25 Juin 2024 - Paris</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/evenements">
                      Voir tous les événements
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualites;
