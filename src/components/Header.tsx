
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Brain, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Twenty One Talents</span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <Link to="/formations" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              Formations <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute top-full left-0 bg-white border rounded-lg shadow-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/formations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Toutes les formations</Link>
              <Link to="/formations/ia-generative" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">IA Générative</Link>
              <Link to="/formations/chatgpt-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">ChatGPT Pro</Link>
              <Link to="/formations/automatisation-ia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Automatisation IA</Link>
              <Link to="/formations/prompt-engineering" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Prompt Engineering</Link>
              <Link to="/formations/openai-api" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">API OpenAI</Link>
              <Link to="/formations/microsoft-copilot" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Microsoft Copilot</Link>
              <Link to="/formations/google-bard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Google Bard</Link>
              <Link to="/formations/claude-ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Claude AI</Link>
              <div className="border-t my-2"></div>
              <Link to="/certifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Certifications</Link>
              <Link to="/methodologie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Méthodologie</Link>
            </div>
          </div>
          
          <div className="relative group">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute top-full left-0 bg-white border rounded-lg shadow-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Tous les services</Link>
              <Link to="/services/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Consulting IA</Link>
              <Link to="/services/implementation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Implémentation</Link>
              <Link to="/services/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Support & Maintenance</Link>
              <div className="border-t my-2"></div>
              <Link to="/secteurs-business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Secteurs d'activité</Link>
              <Link to="/projets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Nos projets</Link>
            </div>
          </div>
          
          <Link to="/automatisation" className="text-gray-600 hover:text-blue-600 transition-colors">
            Automatisation
          </Link>

          <div className="relative group">
            <span className="text-gray-600 hover:text-blue-600 transition-colors flex items-center cursor-pointer">
              Ressources <ChevronDown className="ml-1 h-4 w-4" />
            </span>
            <div className="absolute top-full left-0 bg-white border rounded-lg shadow-lg py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Blog</Link>
              <Link to="/ressources-gratuites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Ressources Gratuites</Link>
              <Link to="/outils-ia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Outils IA</Link>
              <Link to="/evenements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Événements</Link>
              <Link to="/case-studies/banque-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Études de Cas</Link>
            </div>
          </div>
          
          <div className="relative group">
            <span className="text-gray-600 hover:text-blue-600 transition-colors flex items-center cursor-pointer">
              Entreprise <ChevronDown className="ml-1 h-4 w-4" />
            </span>
            <div className="absolute top-full left-0 bg-white border rounded-lg shadow-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">À propos</Link>
              <Link to="/equipe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Notre équipe</Link>
              <Link to="/partenaires" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Partenaires</Link>
              <Link to="/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Témoignages</Link>
              <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">FAQ</Link>
            </div>
          </div>

          <Link to="/tarifs" className="text-gray-600 hover:text-blue-600 transition-colors">
            Tarifs
          </Link>
          
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/contact">Devis gratuit</Link>
          </Button>
          <Button asChild>
            <Link to="/formations">Nos formations</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/formations" className="block text-gray-600 hover:text-blue-600 font-medium">
              Formations
            </Link>
            <Link to="/certifications" className="block text-gray-600 hover:text-blue-600">
              Certifications
            </Link>
            <Link to="/methodologie" className="block text-gray-600 hover:text-blue-600">
              Méthodologie
            </Link>
            <Link to="/services" className="block text-gray-600 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link to="/secteurs-business" className="block text-gray-600 hover:text-blue-600">
              Secteurs Business
            </Link>
            <Link to="/projets" className="block text-gray-600 hover:text-blue-600">
              Nos Projets
            </Link>
            <Link to="/automatisation" className="block text-gray-600 hover:text-blue-600 font-medium">
              Automatisation
            </Link>
            <Link to="/ressources-gratuites" className="block text-gray-600 hover:text-blue-600">
              Ressources Gratuites
            </Link>
            <Link to="/outils-ia" className="block text-gray-600 hover:text-blue-600">
              Outils IA
            </Link>
            <Link to="/evenements" className="block text-gray-600 hover:text-blue-600">
              Événements
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">
              À propos
            </Link>
            <Link to="/equipe" className="block text-gray-600 hover:text-blue-600">
              Notre Équipe
            </Link>
            <Link to="/partenaires" className="block text-gray-600 hover:text-blue-600">
              Partenaires
            </Link>
            <Link to="/testimonials" className="block text-gray-600 hover:text-blue-600">
              Témoignages
            </Link>
            <Link to="/blog" className="block text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <Link to="/tarifs" className="block text-gray-600 hover:text-blue-600">
              Tarifs
            </Link>
            <Link to="/faq" className="block text-gray-600 hover:text-blue-600">
              FAQ
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Devis gratuit</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/formations">Nos formations</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
