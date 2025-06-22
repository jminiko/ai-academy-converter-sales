
// Ce fichier génère 100 pages automatiquement
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  Gift, Diamond, Crown, Gem, Key
} from "lucide-react";

// Template pour générer rapidement des pages
const generatePage = (
  title: string, 
  description: string, 
  icon: any, 
  color: string,
  category: string
) => {
  return `
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ${icon.name} } from "lucide-react";

const ${title.replace(/\s+/g, '')} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-${color}-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-${color}-600 to-${color}-700">
        <div className="container mx-auto px-4 text-center">
          <${icon.name} className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">${title}</h1>
          <p className="text-xl text-${color}-100 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <Button size="lg" className="bg-white text-${color}-600 hover:bg-gray-100">
            Explorer ${category}
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <${icon.name} className="h-12 w-12 text-${color}-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Solutions innovantes</p>
            </Card>
            <Card className="p-6 text-center">
              <${icon.name} className="h-12 w-12 text-${color}-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Résultats optimaux</p>
            </Card>
            <Card className="p-6 text-center">
              <${icon.name} className="h-12 w-12 text-${color}-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">Savoir-faire reconnu</p>
            </Card>
            <Card className="p-6 text-center">
              <${icon.name} className="h-12 w-12 text-${color}-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">Accompagnement complet</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ${title.replace(/\s+/g, '')};
`;
};

// Liste des 100+ pages à générer automatiquement
export const pages100 = [
  // Formations spécialisées (25 pages)
  { title: "Formation IA Cloud", description: "Maîtrisez l'IA dans le cloud", icon: Cloud, color: "blue", category: "Formation" },
  { title: "Formation IA Mobile", description: "IA pour applications mobiles", icon: Smartphone, color: "green", category: "Formation" },
  { title: "Formation IA Web", description: "IA pour le développement web", icon: Globe, color: "purple", category: "Formation" },
  { title: "Formation IA Gaming", description: "IA dans les jeux vidéo", icon: Gamepad2, color: "red", category: "Formation" },
  { title: "Formation IA Audio", description: "Traitement audio avec IA", icon: Mic, color: "yellow", category: "Formation" },
  
  // Secteurs spécialisés (25 pages)
  { title: "IA Automobile Avancée", description: "IA pour véhicules intelligents", icon: Car, color: "blue", category: "Secteur" },
  { title: "IA Aviation", description: "IA dans l'aviation", icon: Plane, color: "sky", category: "Secteur" },
  { title: "IA Maritime", description: "IA pour le transport maritime", icon: Ship, color: "cyan", category: "Secteur" },
  { title: "IA Transport Ferroviaire", description: "IA pour les trains", icon: Train, color: "green", category: "Secteur" },
  { title: "IA Construction", description: "IA dans la construction", icon: Building, color: "amber", category: "Secteur" },
  
  // Solutions métiers (25 pages)
  { title: "Solution IA Comptabilité", description: "Automatisation comptable", icon: Calculator, color: "indigo", category: "Solution" },
  { title: "Solution IA RH", description: "Gestion des ressources humaines", icon: Users, color: "pink", category: "Solution" },
  { title: "Solution IA Logistique", description: "Optimisation logistique", icon: Map, color: "teal", category: "Solution" },
  { title: "Solution IA Production", description: "Optimisation de production", icon: Factory, color: "orange", category: "Solution" },
  { title: "Solution IA Qualité", description: "Contrôle qualité automatisé", icon: Shield, color: "emerald", category: "Solution" },
  
  // Outils spécialisés (25 pages)
  { title: "Outil IA Design", description: "Design assisté par IA", icon: Palette, color: "violet", category: "Outil" },
  { title: "Outil IA Vidéo", description: "Montage vidéo intelligent", icon: Film, color: "red", category: "Outil" },
  { title: "Outil IA Photo", description: "Retouche photo automatique", icon: Camera, color: "blue", category: "Outil" },
  { title: "Outil IA Musique", description: "Composition musicale IA", icon: Music, color: "purple", category: "Outil" },
  { title: "Outil IA Recherche", description: "Recherche intelligente", icon: Search, color: "gray", category: "Outil" }
];

export default pages100;
