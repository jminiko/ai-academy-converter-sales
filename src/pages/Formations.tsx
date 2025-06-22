
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, Clock, Users, Star, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Formations = () => {
  const formations = [
    {
      id: "ia-generative",
      title: "Formation IA Générative Complète",
      description: "Maîtrisez ChatGPT, Claude, et toutes les IA génératives pour révolutionner votre travail",
      duration: "3 jours",
      level: "Débutant à Avancé",
      participants: "8-12 personnes",
      price: "1 890€",
      originalPrice: "2 490€",
      rating: 4.9,
      reviews: 156,
      badge: "Bestseller",
      objectives: [
        "Maîtriser ChatGPT, Claude, Gemini",
        "Créer des prompts efficaces",
        "Automatiser vos tâches quotidiennes",
        "Intégrer l'IA dans vos workflows"
      ],
      program: [
        "Jour 1: Fondamentaux de l'IA générative",
        "Jour 2: Prompt engineering avancé", 
        "Jour 3: Cas d'usage métier et automatisation"
      ]
    },
    {
      id: "chatgpt-pro",
      title: "ChatGPT Pro pour Entreprise",
      description: "Formation spécialisée ChatGPT avec focus sur les applications professionnelles",
      duration: "2 jours",
      level: "Intermédiaire",
      participants: "6-10 personnes",
      price: "1 290€",
      originalPrice: "1 690€",
      rating: 4.8,
      reviews: 203,
      badge: "Populaire",
      objectives: [
        "Expertise ChatGPT Enterprise",
        "Custom GPTs pour votre entreprise",
        "Intégrations API avancées",
        "Sécurité et gouvernance des données"
      ],
      program: [
        "Jour 1: ChatGPT Enterprise et Custom GPTs",
        "Jour 2: Intégrations et cas d'usage avancés"
      ]
    },
    {
      id: "automatisation-ia",
      title: "Automatisation Intelligente",
      description: "Automatisez vos processus avec l'IA : de la théorie à la mise en pratique",
      duration: "4 jours",
      level: "Avancé",
      participants: "6-8 personnes", 
      price: "2 490€",
      originalPrice: "3 190€",
      rating: 4.9,
      reviews: 89,
      badge: "Premium",
      objectives: [
        "RPA + IA pour l'automatisation",
        "Zapier, Make.com et outils no-code",
        "Workflows intelligents",
        "ROI et mesure de performance"
      ],
      program: [
        "Jour 1: Fondamentaux automatisation IA",
        "Jour 2: Outils no-code et low-code",
        "Jour 3: Création de workflows complexes",
        "Jour 4: Déploiement et optimisation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section Amélioré */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <Brain className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">🎓 Formations Certifiantes</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Formations IA d'Excellence
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Programmes de formation complets pour maîtriser l'IA générative et transformer 
              votre entreprise. Formateurs experts, contenu mis à jour, certification incluse.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-2xl font-bold text-white">1000+</p>
                <p className="text-blue-100 text-sm">Apprenants formés</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-2xl font-bold text-white">4.9/5</p>
                <p className="text-blue-100 text-sm">Note moyenne</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-blue-100 text-sm">Satisfaction garantie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid Améliorées */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <Card key={formation.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 group">
                {formation.badge && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white z-10">
                    {formation.badge}
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{formation.rating}</span>
                      <span className="ml-1">({formation.reviews})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {formation.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {formation.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {formation.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {formation.participants}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Objectifs pédagogiques :</h4>
                    <ul className="space-y-2">
                      {formation.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Programme :</h4>
                    <ul className="space-y-1">
                      {formation.program.map((day, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {day}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{formation.price}</p>
                      <p className="text-sm text-gray-500 line-through">{formation.originalPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">Niveau: {formation.level}</p>
                      <Badge variant="outline" className="mt-1">
                        Certification incluse
                      </Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full mb-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transform hover:scale-105 transition-all duration-200" asChild>
                    <Link to="/inscription">
                      <Zap className="mr-2 h-4 w-4" />
                      Je m'inscris maintenant
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full hover:bg-blue-50" asChild>
                    <Link to="/contact">Programme détaillé</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à Révolutionner Votre Carrière ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez nos formations et maîtrisez l'IA pour booster votre productivité et votre expertise professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <Link to="/inscription">
                <Zap className="mr-2 h-5 w-5" />
                S'inscrire Maintenant
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Consultation Gratuite
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formations;
