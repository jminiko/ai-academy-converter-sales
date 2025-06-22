
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const MainMenu = () => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => 
      prev.includes(menu) 
        ? prev.filter(m => m !== menu)
        : [...prev, menu]
    );
  };

  const menuCategories = [
    {
      title: "Formations",
      items: [
        { title: "Formation IA Finance", path: "/formationiafinance" },
        { title: "Formation IA Banque", path: "/formation-ia-banque" },
        { title: "Formation IA Assurance", path: "/formation-ia-assurance" },
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
        { title: "Éducation", path: "/education" },
      ]
    },
    {
      title: "Guides",
      items: [
        { title: "Guide Débutant IA", path: "/guide-debutant-ia" },
        { title: "Guide Avancé IA", path: "/guide-avance-ia" },
        { title: "Guide MLOps", path: "/guide-mlops" },
      ]
    },
    {
      title: "Technologies",
      items: [
        { title: "TensorFlow", path: "/tensorflow" },
        { title: "PyTorch", path: "/pytorch" },
        { title: "Python IA", path: "/python-ia" },
      ]
    },
    {
      title: "Solutions",
      items: [
        { title: "Développement IA", path: "/developpement-ia" },
        { title: "Conseil Stratégique", path: "/conseil-strategique" },
        { title: "Audit IA", path: "/audit-ia" },
      ]
    },
    {
      title: "Industries",
      items: [
        { title: "Agriculture IA", path: "/agriculture-ia" },
        { title: "Automobile", path: "/automobile" },
        { title: "Défense", path: "/defense" },
      ]
    },
    {
      title: "Tendances",
      items: [
        { title: "Guide IA 2025", path: "/guide-ia-2025" },
        { title: "IA Temps Réel", path: "/realtime-ai" },
        { title: "IA Éthique", path: "/ia-ethics" },
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            IA Platform
          </Link>
          
          <div className="hidden lg:flex space-x-1">
            {menuCategories.map((category) => (
              <div key={category.title} className="relative group">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1"
                  onMouseEnter={() => toggleMenu(category.title)}
                >
                  <span>{category.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
