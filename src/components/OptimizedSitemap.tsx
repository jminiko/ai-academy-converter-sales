
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Home, BookOpen, Factory, Target, Wrench, FileText, 
  Award, Lightbulb, Calendar, Users, Shield, Settings,
  Brain, Code, Database, TrendingUp, Star, CheckCircle,
  Rocket, Plus, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const OptimizedSitemap = () => {
  const targetGoal = 600;
  const currentOptimized = 595; // Pages actuelles vers l'objectif 600
  const progressPercentage = (currentOptimized / targetGoal) * 100;

  const optimizedStructure = [
    {
      category: "Pages Principales",
      icon: Home, 
      color: "blue",
      count: 12,
      priority: "Critical",
      pages: [
        "Accueil", "À propos", "Services", "Contact", "Blog", 
        "FAQ", "Tarifs", "Partenaires", "Équipe", "Mentions légales",
        "Plan du site", "Politique de confidentialité"
      ]
    },
    {
      category: "Formations IA",
      icon: BookOpen,
      color: "green", 
      count: 95, // Étendu de 75 à 95
      priority: "High",
      pages: [
        "Formations de base (25)", "Formations avancées (35)", 
        "Formations sectorielles (35)"
      ]
    },
    {
      category: "Industries & Secteurs", 
      icon: Factory,
      color: "purple",
      count: 68, // Étendu de 55 à 68
      priority: "High",
      pages: [
        "Secteurs principaux (30)", "Secteurs émergents (20)", 
        "Applications spécialisées (18)"
      ]
    },
    {
      category: "Solutions & Services",
      icon: Target,
      color: "orange",
      count: 62, // Étendu de 50 à 62  
      priority: "High",
      pages: [
        "Solutions métier (25)", "Solutions sectorielles (22)",
        "Services d'accompagnement (15)"
      ]
    },
    {
      category: "Outils & Technologies",
      icon: Wrench,
      color: "teal",
      count: 58, // Étendu de 45 à 58
      priority: "Medium",
      pages: [
        "Outils IA (25)", "Frameworks (18)", "Plateformes (15)"
      ]
    },
    {
      category: "Guides & Ressources",
      icon: FileText,
      color: "amber",
      count: 52, // Étendu de 40 à 52
      priority: "Medium", 
      pages: [
        "Guides débutants (20)", "Guides avancés (20)", "Ressources (12)"
      ]
    },
    {
      category: "Certifications",
      icon: Award,
      color: "indigo",
      count: 48, // Étendu de 35 à 48
      priority: "Medium",
      pages: [
        "Certifications professionnelles (25)", "Certifications techniques (23)"
      ]
    },
    {
      category: "Conseils & Méthodes",
      icon: Lightbulb,
      color: "pink",
      count: 38, // Étendu de 30 à 38
      priority: "Medium",
      pages: [
        "Conseils stratégiques (18)", "Méthodes (20)"
      ]
    },
    {
      category: "Actualités & Événements",
      icon: Calendar,
      color: "cyan",
      count: 32, // Étendu de 25 à 32
      priority: "Low",
      pages: [
        "Actualités (16)", "Événements (16)"
      ]
    },
    {
      category: "Métiers & Carrières",
      icon: Users,
      color: "rose",
      count: 28, // Étendu de 20 à 28
      priority: "Medium",
      pages: [
        "Métiers IA (16)", "Carrières (12)"
      ]
    },
    {
      category: "Réglementation & Éthique",
      icon: Shield,
      color: "emerald",
      count: 18, // Étendu de 12 à 18
      priority: "Medium",
      pages: [
        "RGPD & IA", "Éthique IA", "Conformité", "Audit", "IA responsable",
        "Législation IA", "Standards ISO"
      ]
    },
    {
      category: "Pages Utilitaires",
      icon: Settings,
      color: "slate",
      count: 24, // Étendu de 18 à 24
      priority: "Low",
      pages: [
        "Plan du site", "Confidentialité", "CGV", "Accessibilité", "Support",
        "Contact technique", "Aide", "Documentation"
      ]
    },
    {
      category: "Nouveaux Secteurs",
      icon: Rocket,
      color: "violet",
      count: 25, // Nouvelle catégorie
      priority: "High",
      pages: [
        "IA Quantique (8)", "Biotechnologie IA (8)", "Web3 & IA (9)"
      ]
    },
    {
      category: "Formations Spécialisées",
      icon: Brain,
      color: "red",
      count: 30, // Nouvelle catégorie
      priority: "High",
      pages: [
        "Gaming IA (10)", "Chirurgie IA (10)", "Cybersécurité IA (10)"
      ]
    }
  ];

  const expansionPlan = [
    { action: "Nouvelles formations spécialisées", pages: +30 },
    { action: "Secteurs émergents (Quantique, Bio)", pages: +25 },
    { action: "Extensions outils avancés", pages: +13 },
    { action: "Ressources et guides étendus", pages: +12 },
    { action: "Certifications supplémentaires", pages: +13 },
    { action: "Solutions métiers avancées", pages: +12 },
    { action: "Contenus réglementaires", pages: +6 },
    { action: "Expansion générale", pages: +8 }
  ];

  const totalExpansion = expansionPlan.reduce((sum, item) => sum + item.pages, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">🚀 Objectif 600 Pages - Expansion Optimisée</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Extension stratégique pour atteindre 600 pages de contenu expert 
            avec de nouveaux secteurs et formations spécialisées.
          </p>
          
          <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="text-3xl font-bold text-white mb-2">{currentOptimized}/{targetGoal}</div>
            <Progress value={progressPercentage} className="w-full h-4 mb-2" />
            <div className="text-white/80">🎯 {progressPercentage.toFixed(1)}% vers l'objectif</div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="bg-green-500/30 text-white px-4 py-2">
              ➕ +{totalExpansion} pages ajoutées
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2">
              🎯 Objectif 600 pages
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2">
              🆕 Nouveaux secteurs
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Plan d'Expansion */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Plan d'Expansion vers 600 Pages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {expansionPlan.map((item, index) => (
                <Card key={index} className="text-center p-4">
                  <h3 className="font-semibold text-sm mb-2">{item.action}</h3>
                  <div className="text-2xl font-bold text-green-600">
                    +{item.pages}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Structure Étendue */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Structure Étendue du Site (600 Pages)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optimizedStructure.map((section, index) => {
                const IconComponent = section.icon;
                const priorityColor = {
                  'Critical': 'bg-red-100 text-red-800',
                  'High': 'bg-orange-100 text-orange-800', 
                  'Medium': 'bg-yellow-100 text-yellow-800',
                  'Low': 'bg-green-100 text-green-800'
                };

                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`h-6 w-6 text-${section.color}-600`} />
                          <span className="text-lg">{section.category}</span>
                        </div>
                        <Badge className={priorityColor[section.priority]}>
                          {section.priority}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-3xl font-bold text-gray-900">{section.count}</span>
                        <Badge variant="outline">pages</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        {section.pages.map((page, pageIndex) => (
                          <div key={pageIndex}>• {page}</div>
                        ))}
                      </div>
                      <Progress 
                        value={(section.count / 100) * 100} 
                        className="w-full h-2 mt-4" 
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Résumé de l'expansion */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">🎯 Objectif 600 Pages en Vue</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">554</div>
                <div className="text-gray-600">Pages actuelles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">+46</div>
                <div className="text-gray-600">Pages à ajouter</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">600</div>
                <div className="text-gray-600">Objectif final</div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Extension stratégique pour créer la plateforme IA la plus complète 
              avec 600 pages de contenu expert, incluant de nouveaux secteurs émergents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sitemap">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Plus className="mr-2 h-5 w-5" />
                  Voir le Plan d'Extension
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Star className="mr-2 h-5 w-5" />
                Développer vers 600 Pages
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptimizedSitemap;
