
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
        { title: currentLang === "FR" ? "Formation IA Finance" : "AI Finance Training", path: "/formationiafinance" },
        { title: currentLang === "FR" ? "Formation IA Banque" : "AI Banking Training", path: "/formation-ia-banque" },
        { title: currentLang === "FR" ? "Formation IA Business" : "AI Business Training", path: "/formation-ia-business" },
        { title: currentLang === "FR" ? "Formation IA Leadership" : "AI Leadership Training", path: "/formation-ia-leadership" },
        { title: "Machine Learning", path: "/machine-learning" },
        { title: "Deep Learning", path: "/formation-deep-learning-avance" },
        { title: currentLang === "FR" ? "IA Débutant" : "AI Beginner", path: "/ia-debutant" },
        { title: currentLang === "FR" ? "IA Intermédiaire" : "AI Intermediate", path: "/ia-intermediaire" },
        { title: currentLang === "FR" ? "IA Expert" : "AI Expert", path: "/ia-expert" },
        { title: currentLang === "FR" ? "IA Executive" : "AI Executive", path: "/ia-executive" },
      ]
    },
    {
      title: currentLang === "FR" ? "Expertises" : "Expertise",
      items: [
        { title: currentLang === "FR" ? "Expertise Data Science" : "Data Science Expertise", path: "/expertise-data-science" },
        { title: currentLang === "FR" ? "Expertise MLOps" : "MLOps Expertise", path: "/expertise-mlops" },
        { title: currentLang === "FR" ? "IA Santé" : "Healthcare AI", path: "/sante" },
        { title: currentLang === "FR" ? "IA Finance" : "Finance AI", path: "/finance" },
        { title: currentLang === "FR" ? "IA Éducation" : "Education AI", path: "/education" },
      ]
    },
    {
      title: currentLang === "FR" ? "Certifications" : "Certifications",
      items: [
        { title: currentLang === "FR" ? "Certification Data Scientist Pro" : "Data Scientist Pro Certification", path: "/certification-data-scientist-pro" },
        { title: currentLang === "FR" ? "Certification IA Niveau 10" : "AI Level 10 Certification", path: "/certificationia10" },
        { title: currentLang === "FR" ? "Certifications Avancées" : "Advanced Certifications", path: "/certifications" },
      ]
    },
    {
      title: currentLang === "FR" ? "Secteurs" : "Industries",
      items: [
        { title: currentLang === "FR" ? "Hôtellerie" : "Hospitality", path: "/secteur-hotellerie" },
        { title: currentLang === "FR" ? "Santé Cardiologie" : "Cardiology Healthcare", path: "/sante-cardiologie" },
        { title: currentLang === "FR" ? "Santé Radiologie" : "Radiology Healthcare", path: "/sante-radiologie" },
        { title: currentLang === "FR" ? "Santé Oncologie" : "Oncology Healthcare", path: "/sante-oncologie" },
        { title: currentLang === "FR" ? "Tourisme IA" : "Tourism AI", path: "/tourism-ia" },
        { title: currentLang === "FR" ? "Sport IA" : "Sports AI", path: "/sport-ia" },
        { title: currentLang === "FR" ? "Automobile" : "Automotive", path: "/automobile" },
        { title: currentLang === "FR" ? "Défense" : "Defense", path: "/defense" },
      ]
    },
    {
      title: currentLang === "FR" ? "Technologies" : "Technologies",
      items: [
        { title: "TensorFlow", path: "/tensorflow" },
        { title: "PyTorch", path: "/pytorch" },
        { title: "Python IA", path: "/python-ia" },
        { title: "Blockchain IA", path: "/blockchain-ai" },
        { title: "IoT IA", path: "/iot-ai" },
      ]
    },
    {
      title: currentLang === "FR" ? "Outils" : "Tools",
      items: [
        { title: "Guide GPT-4", path: "/outilgpt4" },
        { title: currentLang === "FR" ? "Outil Analyse Données" : "Data Analysis Tool", path: "/outil-analyse-donnees" },
        { title: currentLang === "FR" ? "Outil Génération Texte" : "Text Generation Tool", path: "/outil-generation-texte" },
        { title: currentLang === "FR" ? "Outils IA" : "AI Tools", path: "/outils-ia" },
      ]
    },
    {
      title: currentLang === "FR" ? "Solutions" : "Solutions",
      items: [
        { title: currentLang === "FR" ? "Solution IA Vente" : "AI Sales Solution", path: "/solution-ia-vente" },
        { title: currentLang === "FR" ? "Solution IA Marketing" : "AI Marketing Solution", path: "/solution-ia-marketing" },
        { title: currentLang === "FR" ? "Développement IA" : "AI Development", path: "/developpement-ia" },
        { title: currentLang === "FR" ? "Conseil Stratégique" : "Strategic Consulting", path: "/conseil-strategique" },
        { title: currentLang === "FR" ? "Audit IA" : "AI Audit", path: "/audit-ia" },
      ]
    },
    {
      title: currentLang === "FR" ? "Métiers IA" : "AI Careers",
      items: [
        { title: currentLang === "FR" ? "IA Architecte" : "AI Architect", path: "/ia-architecte" },
        { title: currentLang === "FR" ? "IA Journaliste" : "AI Journalist", path: "/ia-journaliste" },
        { title: currentLang === "FR" ? "IA Médecin" : "AI Doctor", path: "/ia-medecin" },
        { title: currentLang === "FR" ? "IA Avocat" : "AI Lawyer", path: "/ia-avocat" },
      ]
    },
    {
      title: currentLang === "FR" ? "Concepts IA" : "AI Concepts",
      items: [
        { title: currentLang === "FR" ? "Réseaux de Neurones" : "Neural Networks", path: "/reseaux-neurones" },
        { title: currentLang === "FR" ? "Apprentissage Automatique" : "Machine Learning", path: "/apprentissage-automatique" },
        { title: currentLang === "FR" ? "IA Symbolique" : "Symbolic AI", path: "/ia-symbolique" },
        { title: currentLang === "FR" ? "IA Connexionniste" : "Connectionist AI", path: "/ia-connexionniste" },
      ]
    },
    {
      title: currentLang === "FR" ? "Actualités" : "News",
      items: [
        { title: currentLang === "FR" ? "Tendances IA 2025" : "AI Trends 2025", path: "/tendances-ia-2025" },
        { title: currentLang === "FR" ? "Actualités" : "News", path: "/actualites" },
        { title: "Blog", path: "/blog" },
      ]
    },
    {
      title: currentLang === "FR" ? "Partenaires" : "Partners",
      items: [
        { title: currentLang === "FR" ? "Partenaire Azure" : "Azure Partner", path: "/partenaire-azure" },
        { title: currentLang === "FR" ? "Partenaires" : "Partners", path: "/partenaires" },
      ]
    },
    {
      title: currentLang === "FR" ? "Événements" : "Events",
      items: [
        { title: currentLang === "FR" ? "Conférence Mondiale IA 2025" : "World AI Conference 2025", path: "/conference-mondiale-ia-2025" },
        { title: currentLang === "FR" ? "Webinaires" : "Webinars", path: "/webinaires" },
        { title: currentLang === "FR" ? "Événements" : "Events", path: "/evenements" },
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
          <nav className="hidden lg:flex items-center space-x-6">
            {menuCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  <span>{category.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 max-h-96 overflow-y-auto">
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
          <div className="lg:hidden py-4 border-t bg-white max-h-96 overflow-y-auto">
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
