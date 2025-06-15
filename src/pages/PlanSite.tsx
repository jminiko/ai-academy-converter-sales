
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sitemap, BookOpen, Users, Cog, MessageSquare, Award } from "lucide-react";
import { Link } from "react-router-dom";

const PlanSite = () => {
  const sections = [
    {
      titre: "Accueil & Présentation",
      icon: BookOpen,
      pages: [
        { nom: "Accueil", url: "/", description: "Page d'accueil principale" },
        { nom: "À propos", url: "/about", description: "Présentation de Twenty One Talents" },
        { nom: "Notre équipe", url: "/equipe", description: "Présentation des experts" },
        { nom: "Notre méthodologie", url: "/methodologie", description: "Approche pédagogique" }
      ]
    },
    {
      titre: "Formations IA",
      icon: BookOpen,
      pages: [
        { nom: "Catalogue formations", url: "/formations", description: "Toutes nos formations" },
        { nom: "IA Générative", url: "/formations/ia-generative", description: "Formation complète IA générative" },
        { nom: "ChatGPT Pro", url: "/formations/chatgpt-pro", description: "Maîtrise avancée de ChatGPT" },
        { nom: "Automatisation IA", url: "/formations/automatisation-ia", description: "Automatiser avec l'IA" },
        { nom: "Prompt Engineering", url: "/formations/prompt-engineering", description: "Art du prompt" },
        { nom: "OpenAI API", url: "/formations/openai-api", description: "Intégration API OpenAI" },
        { nom: "Microsoft Copilot", url: "/formations/microsoft-copilot", description: "Formation Copilot" },
        { nom: "Google Bard", url: "/formations/google-bard", description: "Formation Google Bard" },
        { nom: "Claude AI", url: "/formations/claude-ai", description: "Formation Claude d'Anthropic" }
      ]
    },
    {
      titre: "Services",
      icon: Cog,
      pages: [
        { nom: "Nos services", url: "/services", description: "Aperçu de tous nos services" },
        { nom: "Consulting IA", url: "/services/consulting", description: "Conseil stratégique IA" },
        { nom: "Implémentation", url: "/services/implementation", description: "Mise en œuvre solutions IA" },
        { nom: "Support & Maintenance", url: "/services/support", description: "Accompagnement continu" },
        { nom: "Automatisation", url: "/automatisation", description: "Services d'automatisation" }
      ]
    },
    {
      titre: "Ressources & Contenu",
      icon: BookOpen,
      pages: [
        { nom: "Blog", url: "/blog", description: "Articles et actualités IA" },
        { nom: "Tendances IA 2024", url: "/blog/tendances-ia-2024", description: "Article tendances" },
        { nom: "Guide Prompt Engineering", url: "/blog/guide-prompt-engineering", description: "Guide pratique" },
        { nom: "Ressources gratuites", url: "/ressources-gratuites", description: "Guides et outils gratuits" },
        { nom: "Webinaires", url: "/webinaires", description: "Sessions de formation live" },
        { nom: "Actualités", url: "/actualites", description: "Actualités du secteur IA" },
        { nom: "Livre blanc", url: "/livre-blanc", description: "Publications expertes" },
        { nom: "Newsletter", url: "/newsletter", description: "Inscription newsletter IA" }
      ]
    },
    {
      titre: "Secteurs & Outils",
      icon: Users,
      pages: [
        { nom: "Secteurs business", url: "/secteurs-business", description: "IA par secteur d'activité" },
        { nom: "Outils IA", url: "/outils-ia", description: "Sélection d'outils recommandés" },
        { nom: "Cas d'étude banque", url: "/case-studies/banque-transformation", description: "Étude de cas détaillée" },
        { nom: "Projets réalisés", url: "/projets", description: "Portfolio de nos réalisations" }
      ]
    },
    {
      titre: "Entreprise & Partenaires",
      icon: Award,
      pages: [
        { nom: "Certifications", url: "/certifications", description: "Nos certifications officielles" },
        { nom: "Partenaires", url: "/partenaires", description: "Écosystème de partenaires" },
        { nom: "Événements", url: "/evenements", description: "Calendrier des événements" },
        { nom: "Carrières", url: "/carrieres", description: "Rejoindre notre équipe" },
        { nom: "Témoignages", url: "/testimonials", description: "Avis et retours clients" }
      ]
    },
    {
      titre: "Contact & Informations",
      icon: MessageSquare,
      pages: [
        { nom: "Contact", url: "/contact", description: "Nous contacter" },
        { nom: "FAQ", url: "/faq", description: "Questions fréquentes" },
        { nom: "Tarifs", url: "/tarifs", description: "Grille tarifaire transparente" },
        { nom: "CGV", url: "/cgv", description: "Conditions générales de vente" },
        { nom: "Confidentialité", url: "/confidentialite", description: "Politique de confidentialité" },
        { nom: "Mentions légales", url: "/mentions-legales", description: "Informations légales" },
        { nom: "Accessibilité", url: "/accessibilite-numerique", description: "Déclaration d'accessibilité" },
        { nom: "Plan du site", url: "/plan-site", description: "Cette page" }
      ]
    }
  ];

  const totalPages = sections.reduce((acc, section) => acc + section.pages.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Sitemap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Plan du Site
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Navigation complète de notre site web. Trouvez rapidement toutes nos 
            formations, services et ressources sur l'intelligence artificielle.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-white text-green-600 px-4 py-2 text-lg">
              {totalPages} pages disponibles
            </Badge>
            <Badge className="bg-green-700 text-white px-4 py-2 text-lg">
              7 sections principales
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Organisation du Site</h2>
            <p className="text-lg text-gray-600">
              Notre site est organisé en sections logiques pour faciliter votre navigation
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">
                      <section.icon className="h-6 w-6 text-green-600" />
                    </div>
                    {section.titre}
                    <Badge className="ml-4 bg-green-100 text-green-800">
                      {section.pages.length} pages
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Link to={page.url} className="block">
                          <h4 className="font-semibold text-green-700 mb-2 hover:text-green-800">
                            {page.nom}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                          <span className="text-xs text-green-600 font-mono">{page.url}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Navigation Rapide</h2>
            <p className="text-lg text-gray-600 mb-8">
              Accès direct aux sections les plus consultées
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Formations</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/formations">Voir toutes</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Cog className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Services</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/services">Découvrir</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Ressources</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/ressources-gratuites">Explorer</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Nous joindre</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanSite;
