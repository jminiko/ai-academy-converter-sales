
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("FR");

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "FR" ? "EN" : "FR");
  };

  const menuCategories = [
    {
      title: currentLang === "FR" ? "Formations" : "Trainings",
      items: [
        { title: currentLang === "FR" ? "Formation IA Finance" : "AI Finance Training", path: currentLang === "FR" ? "/formationiafinance" : "/en/ai-training-finance" },
        { title: currentLang === "FR" ? "Formation IA Banque" : "AI Banking Training", path: "/formation-ia-banque" },
        { title: "Machine Learning", path: "/machine-learning" },
        { title: "Deep Learning", path: "/formation-deep-learning-avance" },
      ]
    },
    {
      title: currentLang === "FR" ? "Cas d'Études" : "Case Studies",
      items: [
        { title: currentLang === "FR" ? "Cas Usage IA #1" : "AI Use Case #1", path: "/casusageia1" },
      ]
    },
    {
      title: currentLang === "FR" ? "Outils" : "Tools",
      items: [
        { title: "Guide GPT-4", path: "/outilgpt4" },
      ]
    },
    {
      title: currentLang === "FR" ? "Certifications" : "Certifications",
      items: [
        { title: currentLang === "FR" ? "Certification IA Niveau 10" : "AI Level 10 Certification", path: "/certificationia10" },
      ]
    },
    {
      title: currentLang === "FR" ? "Secteurs" : "Industries",
      items: [
        { title: currentLang === "FR" ? "Hôtellerie" : "Hospitality", path: "/secteur-hotellerie" },
        { title: currentLang === "FR" ? "Santé" : "Healthcare", path: "/sante" },
        { title: "Finance", path: "/finance" },
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Twenty One Talents
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  <span>{category.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <Link to="/sitemap" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {currentLang === "FR" ? "Plan du Site" : "Sitemap"}
            </Link>
          </nav>

          {/* Language Toggle & Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 hover:bg-blue-50"
            >
              <Globe className="h-4 w-4" />
              {currentLang}
            </Button>
            
            <Button 
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
              asChild
            >
              <Link to="/contact">
                {currentLang === "FR" ? "Contact Expert" : "Contact Expert"}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <div className="flex justify-between items-center mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {currentLang}
              </Button>
            </div>
            
            {menuCategories.map((category) => (
              <div key={category.title} className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 px-4">{category.title}</h3>
                {category.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
              {currentLang === "FR" ? "Plan du Site" : "Sitemap"}
            </Link>
            
            <div className="px-4 pt-4">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                asChild
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  {currentLang === "FR" ? "Contact Expert" : "Contact Expert"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
