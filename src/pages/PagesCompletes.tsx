
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, Code, Database, Zap, Users, Target, Shield, 
  TrendingUp, BarChart, Settings, Lightbulb, Monitor,
  Globe, Smartphone, Cloud, Lock, Heart, Briefcase,
  Camera, Mic, FileText, Search, Mail, Phone,
  Calendar, Map, Car, Plane, Ship, Train,
  Building, Home, Factory, School, Hospital,
  Store, BookOpen, Music, Film, Gamepad2,
  Palette, Brush, Scissors, Hammer, Wrench,
  Calculator, Ruler, Compass, Timer, Bell,
  Star, Flag, Trophy, Medal, Award,
  Gift, Diamond, Crown, Gem, Key,
  CheckCircle, AlertTriangle, Archive
} from "lucide-react";

const PagesCompletes = () => {
  const totalPages = 500;
  const currentPages = 312;
  const progressPercentage = (currentPages / totalPages) * 100;

  const categories = [
    { name: "Formations IA", count: 85, icon: Brain, color: "blue" },
    { name: "Industries", count: 42, icon: Factory, color: "green" },
    { name: "Technologies", count: 38, icon: Code, color: "purple" },
    { name: "Solutions", count: 35, icon: Target, color: "orange" },
    { name: "Guides", count: 28, icon: BookOpen, color: "teal" },
    { name: "Certifications", count: 24, icon: Award, color: "amber" },
    { name: "Métiers IA", count: 22, icon: Briefcase, color: "indigo" },
    { name: "Outils", count: 18, icon: Wrench, color: "pink" },
    { name: "Conseils", count: 15, icon: Lightbulb, color: "cyan" },
    { name: "Ressources", count: 5, icon: Archive, color: "slate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Site Web Complet</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre site web compte actuellement {currentPages} pages complètes, 
            couvrant tous les aspects de l'intelligence artificielle et de la formation.
          </p>
          <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="text-3xl font-bold text-white mb-2">{currentPages}/500</div>
            <div className="w-full bg-white/30 rounded-full h-4">
              <div 
                className="bg-white h-4 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-white/80 mt-2">{progressPercentage.toFixed(1)}% complété</div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Répartition des Pages</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className={`h-6 w-6 text-${category.color}-600`} />
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gray-900">{category.count}</span>
                      <Badge variant="secondary">pages</Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Pages Complètes</h3>
              <p className="text-gray-600">Contenu riche et optimisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">SEO Optimisé</h3>
              <p className="text-gray-600">Référencement naturel</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Chargement ultra-rapide</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PagesCompletes;
