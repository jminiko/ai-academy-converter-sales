
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, Code, Database, Zap, Users, Target, Shield, 
  TrendingUp, BarChart, Settings, Lightbulb, Monitor,
  Globe, Smartphone, Cloud, Lock, Heart, Briefcase,
  Camera, Mic, FileText, Search, Mail, Phone,
  Calendar, Map, Car, Rocket, Satellite,
  Building, Briefcase, Factory, School, Hospital,
  Store, BookOpen, Music, Film, Gamepad2,
  Palette, Brush, Scissors, Hammer, Wrench,
  Calculator, Ruler, Compass, Timer, Bell,
  Star, Flag, Trophy, Medal, Award,
  Gift, Diamond, Crown, Gem, Key,
  CheckCircle, AlertTriangle, Archive,
  ArrowRight, Plus, Eye, Home
} from "lucide-react";
import { Link } from "react-router-dom";

const PagesCompletes = () => {
  const totalPages = 600; // Objectif augmenté
  const currentPages = 500; // Pages actuellement complétées
  const progressPercentage = (currentPages / totalPages) * 100;

  const categories = [
    { name: "Formations IA", count: 95, icon: Brain, color: "blue", description: "Formations complètes du débutant à l'expert" },
    { name: "Industries", count: 52, icon: Factory, color: "green", description: "Applications IA par secteur d'activité" },
    { name: "Technologies", count: 48, icon: Code, color: "purple", description: "Outils et frameworks IA modernes" },
    { name: "Solutions", count: 45, icon: Target, color: "orange", description: "Solutions IA clés en main" },
    { name: "Guides", count: 38, icon: BookOpen, color: "teal", description: "Guides pratiques et tutoriels" },
    { name: "Certifications", count: 44, icon: Award, color: "amber", description: "Certifications professionnelles IA" },
    { name: "Métiers IA", count: 32, icon: Briefcase, color: "indigo", description: "Carrières et métiers de l'IA" },
    { name: "Outils", count: 48, icon: Wrench, color: "pink", description: "Outils IA pour développeurs" },
    { name: "Conseils", count: 25, icon: Lightbulb, color: "cyan", description: "Conseils d'experts IA" },
    { name: "Applications", count: 35, icon: Archive, color: "slate", description: "Cas d'usage concrets" },
    { name: "Concepts IA", count: 20, icon: Brain, color: "emerald", description: "Concepts fondamentaux IA" },
    { name: "Services", count: 18, icon: Settings, color: "rose", description: "Services et accompagnement" }
  ];

  const recentAdditions = [
    { name: "Certification AWS ML", category: "Certification", date: "2024-12-28" },
    { name: "Guide MLOps Pratique", category: "Guide", date: "2024-12-28" },
    { name: "IA Transport Maritime", category: "Application", date: "2024-12-28" },
    { name: "Outil Streamlit", category: "Outil", date: "2024-12-28" },
    { name: "Formation Quantum ML", category: "Formation", date: "2024-12-28" }
  ];

  const nextGoals = [
    { target: "600 pages", progress: 83, description: "100 pages supplémentaires en cours" },
    { target: "SEO Optimization", progress: 65, description: "Optimisation pour moteurs de recherche" },
    { target: "Mobile Responsive", progress: 90, description: "Adaptation mobile complète" },
    { target: "Performance", progress: 75, description: "Optimisation des performances" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">🎉 Plateforme IA Complète : 500+ Pages ! 🎉</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre plateforme IA compte maintenant {currentPages} pages complètes et continue de s'enrichir 
            pour devenir la référence francophone en intelligence artificielle.
          </p>
          
          <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="text-3xl font-bold text-white mb-2">{currentPages}/{totalPages}</div>
            <Progress value={progressPercentage} className="w-full h-4 mb-2" />
            <div className="text-white/80 mt-2">🚀 {progressPercentage.toFixed(0)}% vers l'objectif 600 pages</div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="bg-green-500/30 text-white px-4 py-2 text-lg">
              ✅ 500 Pages Live
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2 text-lg">
              🔄 En développement continu
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg">
              🎯 Objectif 600 pages
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="categories">Catégories</TabsTrigger>
              <TabsTrigger value="recent">Récents</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Plateforme IA Complète</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Une ressource complète pour maîtriser l'intelligence artificielle, 
                  des concepts de base aux applications avancées en entreprise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Formations Complètes</h3>
                  <p className="text-gray-600">95 formations du niveau débutant à expert</p>
                </Card>
                <Card className="text-center p-6">
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Solutions Pratiques</h3>
                  <p className="text-gray-600">45 solutions IA clés en main</p>
                </Card>
                <Card className="text-center p-6">
                  <Factory className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Applications Sectorielles</h3>
                  <p className="text-gray-600">52 applications par industrie</p>
                </Card>
                <Card className="text-center p-6">
                  <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Certifications Pro</h3>
                  <p className="text-gray-600">44 certifications reconnues</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-3">
                          <IconComponent className={`h-6 w-6 text-${category.color}-600`} />
                          {category.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-2xl font-bold text-gray-900">{category.count}</span>
                          <Badge variant="secondary">pages</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                        <Progress value={(category.count / 100) * 100} className="w-full h-2" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Derniers ajouts</h3>
              <div className="space-y-4">
                {recentAdditions.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Plus className="h-5 w-5 text-green-600" />
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{item.date}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roadmap" className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Objectifs et Roadmap</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {nextGoals.map((goal, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{goal.target}</h4>
                      <Badge variant="secondary">{goal.progress}%</Badge>
                    </div>
                    <Progress value={goal.progress} className="w-full h-3 mb-3" />
                    <p className="text-sm text-gray-600">{goal.description}</p>
                  </Card>
                ))}
              </div>
              
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="text-center">
                  <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Prochaines étapes</h4>
                  <p className="text-gray-600 mb-4">
                    Développement continu avec 100 nouvelles pages, optimisation SEO avancée, 
                    et nouvelles fonctionnalités interactives.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">IA Conversationnelle</Badge>
                    <Badge variant="outline">Réalité Augmentée</Badge>
                    <Badge variant="outline">Web3 & IA</Badge>
                    <Badge variant="outline">IA Quantique</Badge>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Explorez notre plateforme</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/formations" className="block">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Formations IA</h3>
                <p className="text-gray-600">Découvrez nos 95 formations</p>
                <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-4" />
              </Card>
            </Link>
            <Link to="/solutions" className="block">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Solutions IA</h3>
                <p className="text-gray-600">Explorez nos 45 solutions</p>
                <ArrowRight className="h-5 w-5 text-green-600 mx-auto mt-4" />
              </Card>
            </Link>
            <Link to="/services" className="block">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Services</h3>
                <p className="text-gray-600">Nos services d'accompagnement</p>
                <ArrowRight className="h-5 w-5 text-purple-600 mx-auto mt-4" />
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PagesCompletes;
