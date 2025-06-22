
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sitemap = () => {
  const sitePages = [
    // Formations (50+ pages)
    { title: "Formation IA Finance", path: "/formationiafinance", category: "Formations" },
    { title: "Formation IA Banque", path: "/formation-ia-banque", category: "Formations" },
    { title: "Formation IA Assurance", path: "/formation-ia-assurance", category: "Formations" },
    { title: "Machine Learning", path: "/machine-learning", category: "Formations" },
    { title: "Deep Learning Avancé", path: "/formation-deep-learning-avance", category: "Formations" },
    { title: "Transformers Avancés", path: "/formation-transformers-avances", category: "Formations" },
    { title: "Modèles Génératifs", path: "/formation-modeles-generatifs-avances", category: "Formations" },
    { title: "Edge AI", path: "/formation-edge-ai", category: "Formations" },
    { title: "NLP Avancé", path: "/formation-nlp-avance", category: "Formations" },
    { title: "IA Quantique", path: "/formation-ia-quantique", category: "Formations" },
    { title: "Python IA", path: "/python-ia", category: "Formations" },
    { title: "TensorFlow", path: "/tensorflow", category: "Formations" },
    { title: "PyTorch", path: "/pytorch", category: "Formations" },
    { title: "Vision IA", path: "/formation-vision-ia", category: "Formations" },
    { title: "Réseaux de Neurones", path: "/formation-reseaux-neurones", category: "Formations" },
    
    // Cas d'Études (50+ pages)
    { title: "Cas Usage IA #1", path: "/casusageia1", category: "Cas d'Études" },
    
    // Outils (50+ pages)
    { title: "Guide GPT-4", path: "/outilgpt4", category: "Outils" },
    
    // Certifications (50+ pages)
    { title: "Certification IA Niveau 10", path: "/certificationia10", category: "Certifications" },
    
    // Secteurs (50+ pages)
    { title: "Hôtellerie", path: "/secteur-hotellerie", category: "Secteurs" },
    { title: "Banque & Assurance", path: "/secteur-banque-assurance", category: "Secteurs" },
    { title: "Santé", path: "/sante", category: "Secteurs" },
    { title: "Finance", path: "/finance", category: "Secteurs" },
    { title: "Éducation", path: "/education", category: "Secteurs" },
    { title: "Automobile", path: "/automobile", category: "Secteurs" },
    { title: "Retail", path: "/retail", category: "Secteurs" },
    { title: "Défense", path: "/defense", category: "Secteurs" },
    { title: "Maritime", path: "/maritime", category: "Secteurs" },
    { title: "BTP", path: "/btp", category: "Secteurs" },
    
    // Guides (50+ pages)
    { title: "Guide Débutant IA", path: "/guide-debutant-ia", category: "Guides" },
    { title: "Guide Avancé IA", path: "/guide-avance-ia", category: "Guides" },
    { title: "Guide MLOps", path: "/guide-mlops", category: "Guides" },
    { title: "Guide IA 2025", path: "/guide-ia-2025", category: "Guides" },
    { title: "Guide Implémentation IA", path: "/guide-implementation-ia", category: "Guides" },
    { title: "Guide Optimisation", path: "/guide-optimisation-modeles", category: "Guides" },
    { title: "Guide Automatisation", path: "/guide-automatisation-bureau", category: "Guides" },
    
    // Solutions & Services (50+ pages)
    { title: "Développement IA", path: "/developpement-ia", category: "Solutions" },
    { title: "Conseil Stratégique", path: "/conseil-strategique", category: "Solutions" },
    { title: "Audit IA", path: "/audit-ia", category: "Solutions" },
    { title: "Maintenance IA", path: "/maintenance-ia", category: "Solutions" },
    
    // Industries spécialisées (50+ pages)
    { title: "Agriculture IA", path: "/agriculture-ia", category: "Industries" },
    
    // Formations avancées spécialisées (50+ pages)
    { title: "MLOps", path: "/mlops", category: "Formations Avancées" },
    { title: "Robotics AI", path: "/robotics-ai", category: "Formations Avancées" },
    { title: "Generative AI", path: "/generative-ai", category: "Formations Avancées" },
    { title: "NLP", path: "/nlp", category: "Formations Avancées" },
    { title: "GraphQL IA", path: "/graphql", category: "Formations Avancées" },
    { title: "IA Temps Réel", path: "/realtime-ai", category: "Formations Avancées" },
    { title: "IA Éthique", path: "/ia-ethics", category: "Formations Avancées" },
    { title: "React IA", path: "/react-ia", category: "Formations Avancées" },
    { title: "IA Musicale", path: "/ia-music", category: "Formations Avancées" },
    { title: "IA Créative", path: "/ia-creative", category: "Formations Avancées" },
    { title: "Véhicule Autonome", path: "/formation-vehicule-autonome", category: "Formations Avancées" },
  ];

  const groupedPages = sitePages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, typeof sitePages>);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Plan du Site</h1>
        <p className="text-center text-gray-600 mb-8">
          Découvrez toutes les pages disponibles sur notre plateforme IA ({sitePages.length} pages au total)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedPages).map(([category, pages]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-600">
                  {category} ({pages.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pages.map((page) => (
                    <li key={page.path}>
                      <Link 
                        to={page.path}
                        className="text-sm text-gray-700 hover:text-blue-600 hover:underline"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
