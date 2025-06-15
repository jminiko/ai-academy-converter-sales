
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Brain, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredArticle = {
    id: 1,
    title: "ChatGPT-4 vs Claude 3 : Comparatif Complet pour les Entreprises",
    excerpt: "Analyse détaillée des deux IA génératives leaders pour vous aider à choisir la meilleure solution pour votre entreprise.",
    author: "Marie Dupont",
    date: "15 Mars 2024",
    readTime: "8 min",
    category: "IA Générative",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tags: ["ChatGPT", "Claude", "Comparatif", "Entreprise"]
  };

  const articles = [
    {
      id: 2,
      title: "5 Erreurs à Éviter lors de l'Implémentation d'IA en Entreprise",
      excerpt: "Les pièges courants et comment les éviter pour réussir votre transformation IA.",
      author: "Jean Martin",
      date: "12 Mars 2024",
      readTime: "6 min",
      category: "Stratégie IA",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Stratégie", "Implémentation", "Erreurs"]
    },
    {
      id: 3,
      title: "Automatisation RH : 10 Processus à Automatiser en Priorité",
      excerpt: "Guide pratique pour identifier et automatiser les processus RH les plus impactants.",
      author: "Sophie Laurent",
      date: "10 Mars 2024",
      readTime: "7 min",
      category: "Automatisation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["RH", "Automatisation", "Processus"]
    },
    {
      id: 4,
      title: "Prompt Engineering : Techniques Avancées pour Maximiser l'Efficacité",
      excerpt: "Maîtrisez l'art du prompt engineering pour obtenir des résultats optimaux avec l'IA.",
      author: "Pierre Durand",
      date: "8 Mars 2024",
      readTime: "10 min",
      category: "Formation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Prompt", "Formation", "Techniques"]
    },
    {
      id: 5,
      title: "ROI de l'IA : Comment Mesurer l'Impact de vos Investissements",
      excerpt: "Métriques clés et méthodes pour évaluer le retour sur investissement de vos projets IA.",
      author: "Anne Moreau",
      date: "5 Mars 2024",
      readTime: "9 min",
      category: "Business",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["ROI", "Métriques", "Business"]
    },
    {
      id: 6,
      title: "IA et Cybersécurité : Protéger vos Données dans l'Ère de l'IA",
      excerpt: "Enjeux de sécurité et bonnes pratiques pour une utilisation sécurisée de l'IA.",
      author: "Marc Petit",
      date: "2 Mars 2024",
      readTime: "8 min",
      category: "Sécurité",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      tags: ["Sécurité", "Protection", "Données"]
    },
    {
      id: 7,
      title: "L'Avenir du Travail : Comment l'IA Transforme les Métiers",
      excerpt: "Analyse prospective de l'impact de l'IA sur l'évolution des métiers et compétences.",
      author: "Claire Bernard",
      date: "28 Février 2024",
      readTime: "12 min",
      category: "Futur",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      tags: ["Futur", "Métiers", "Transformation"]
    }
  ];

  const categories = ["Tous", "IA Générative", "Automatisation", "Stratégie IA", "Formation", "Business", "Sécurité"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            📚 Blog Expert IA
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Actualités et Guides IA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Restez à la pointe de l'innovation IA avec nos analyses d'experts, 
            guides pratiques et retours d'expérience terrain.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Article à la Une</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-blue-100 text-blue-800">{featuredArticle.category}</Badge>
                  <span className="text-sm text-gray-500">{featuredArticle.readTime} de lecture</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                    <Calendar className="h-4 w-4 ml-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  
                  <Button asChild>
                    <Link to={`/blog/${featuredArticle.id}`}>
                      Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "default" : "outline"} 
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{article.readTime} de lecture</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/blog/${article.id}`}>
                      Lire <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Charger plus d'articles
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Restez Informé des Dernières Innovations IA
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Recevez notre newsletter hebdomadaire avec les dernières actualités, 
            guides pratiques et analyses d'experts en IA.
          </p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Votre email professionnel"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              S'abonner
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            ✓ Contenu exclusif • ✓ Pas de spam • ✓ Désabonnement en 1 clic
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
