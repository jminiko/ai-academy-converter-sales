
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuCategories = [
    {
      title: "Formations",
      items: [
        { title: "Formation IA Finance", path: "/formationiafinance" },
        { title: "Formation IA Banque", path: "/formation-ia-banque" },
        { title: "Machine Learning", path: "/machine-learning" },
        { title: "Deep Learning", path: "/formation-deep-learning-avance" },
      ]
    },
    {
      title: "Cas d'Études",
      items: [
        { title: "Cas Usage IA #1", path: "/casusageia1" },
      ]
    },
    {
      title: "Outils",
      items: [
        { title: "Guide GPT-4", path: "/outilgpt4" },
      ]
    },
    {
      title: "Certifications",
      items: [
        { title: "Certification IA Niveau 10", path: "/certificationia10" },
      ]
    },
    {
      title: "Secteurs",
      items: [
        { title: "Hôtellerie", path: "/secteur-hotellerie" },
        { title: "Santé", path: "/sante" },
        { title: "Finance", path: "/finance" },
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Twenty One Talents
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                  <span>{category.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <Link to="/sitemap" className="text-gray-700 hover:text-blue-600 transition-colors">
              Plan du Site
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {menuCategories.map((category) => (
              <div key={category.title} className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                {category.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/sitemap"
              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Plan du Site
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
