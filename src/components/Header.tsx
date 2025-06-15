
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Brain, Menu } from "lucide-react";
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
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/formations" className="text-gray-600 hover:text-blue-600 transition-colors">
            Formations
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link to="/automatisation" className="text-gray-600 hover:text-blue-600 transition-colors">
            Automatisation
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/contact">Devis gratuit</Link>
          </Button>
          <Button asChild>
            <Link to="/formations">Nos formations</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/formations" className="block text-gray-600 hover:text-blue-600">
              Formations
            </Link>
            <Link to="/services" className="block text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link to="/automatisation" className="block text-gray-600 hover:text-blue-600">
              Automatisation
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">
              À propos
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
