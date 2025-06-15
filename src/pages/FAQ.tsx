
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "Formations IA",
      icon: "🎓",
      faqs: [
        {
          question: "Quel est le niveau requis pour suivre vos formations IA ?",
          answer: "Nos formations sont conçues pour tous les niveaux. Nous proposons des parcours depuis débutant complet jusqu'à expert. Aucune compétence technique préalable n'est nécessaire pour nos formations d'initiation à l'IA générative."
        },
        {
          question: "Les formations sont-elles certifiantes ?",
          answer: "Oui, toutes nos formations incluent une certification Twenty One Talents reconnue par les entreprises. Vous recevez également un badge numérique et un certificat détaillé de vos compétences acquises."
        },
        {
          question: "Proposez-vous des formations sur mesure ?",
          answer: "Absolument ! Nous concevons des programmes de formation personnalisés selon vos besoins spécifiques, votre secteur d'activité et vos objectifs métier. Contactez-nous pour une consultation gratuite."
        },
        {
          question: "Quelle est la durée moyenne d'une formation ?",
          answer: "Nos formations varient de 1 à 5 jours selon le niveau et la complexité. Les formations d'initiation durent généralement 2-3 jours, tandis que les programmes avancés peuvent s'étendre sur 5 jours."
        }
      ]
    },
    {
      title: "Services & Implémentation",
      icon: "⚙️",
      faqs: [
        {
          question: "Combien de temps prend une implémentation IA ?",
          answer: "Le délai dépend de la complexité du projet. Un audit IA prend 2-3 semaines, une implémentation simple 4-8 semaines, et une transformation complète 3-6 mois. Nous établissons un planning détaillé dès le début."
        },
        {
          question: "Proposez-vous un support après l'implémentation ?",
          answer: "Oui, nous incluons toujours un support post-lancement. Nos contrats de maintenance incluent support 24/7, mises à jour, optimisations et formation continue de vos équipes."
        },
        {
          question: "Comment calculez-vous le ROI d'un projet IA ?",
          answer: "Nous utilisons une méthodologie éprouvée basée sur l'analyse des gains de temps, réduction des erreurs, économies de coûts et augmentation de revenus. Nous fournissons un tableau de bord ROI en temps réel."
        },
        {
          question: "Travaillez-vous avec toutes les tailles d'entreprise ?",
          answer: "Oui, de la startup à la grande entreprise. Nous adaptons nos solutions et tarifs à votre taille et budget. Nous avons des offres spécifiques pour les TPE/PME et les grandes organisations."
        }
      ]
    },
    {
      title: "Automatisation",
      icon: "🤖",
      faqs: [
        {
          question: "Quels processus peuvent être automatisés ?",
          answer: "Pratiquement tous les processus répétitifs : saisie de données, traitement de documents, reporting, gestion emails, planification, validation workflows, analyse de données, et bien plus."
        },
        {
          question: "L'automatisation va-t-elle remplacer mes employés ?",
          answer: "Non, l'objectif est de libérer vos équipes des tâches répétitives pour qu'elles se concentrent sur des activités à plus forte valeur ajoutée. L'automatisation augmente la productivité sans remplacer l'humain."
        },
        {
          question: "Quels outils d'automatisation utilisez-vous ?",
          answer: "Nous maîtrisons tous les outils du marché : Zapier, Make.com, Microsoft Power Automate, UiPath, ainsi que les API d'IA comme OpenAI, Claude, et les solutions cloud Azure/AWS."
        },
        {
          question: "Comment assurer la sécurité des automatisations ?",
          answer: "Nous appliquons les meilleures pratiques de sécurité : chiffrement des données, authentification forte, audit trails, conformité RGPD, et monitoring 24/7 des processus automatisés."
        }
      ]
    },
    {
      title: "Tarifs & Facturation",
      icon: "💰",
      faqs: [
        {
          question: "Comment sont calculés vos tarifs ?",
          answer: "Nos tarifs dépendent du type de service, de la durée et de la complexité. Les formations ont des tarifs fixes, les implémentations sont facturées au temps passé ou en forfait selon le projet."
        },
        {
          question: "Proposez-vous des facilités de paiement ?",
          answer: "Oui, nous acceptons le paiement en plusieurs fois pour les projets importants. Nous travaillons aussi avec les OPCO pour le financement des formations."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Non, nos devis sont transparents et détaillés. Tous les coûts sont explicités dès le début. Aucun frais supplémentaire ne sera ajouté sans votre accord préalable."
        },
        {
          question: "Acceptez-vous les bons de commande ?",
          answer: "Oui, nous acceptons les bons de commande des entreprises et administrations. Nous nous adaptons à vos processus d'achat internes."
        }
      ]
    },
    {
      title: "Support Technique",
      icon: "🛠️",
      faqs: [
        {
          question: "Quel est votre temps de réponse support ?",
          answer: "Nous garantissons une réponse sous 2h en jours ouvrés pour les demandes critiques, et sous 24h pour les demandes standard. Le support urgent est disponible 24/7 pour nos clients premium."
        },
        {
          question: "Comment accéder au support technique ?",
          answer: "Plusieurs canaux : email support@twentyonetalents.fr, téléphone +33 1 23 45 67 89, chat en ligne sur notre site, ou espace client dédié selon votre contrat."
        },
        {
          question: "Proposez-vous de la formation à distance ?",
          answer: "Oui, toutes nos formations peuvent être dispensées en présentiel ou à distance via notre plateforme de formation interactive. Nous adaptons le format selon vos préférences."
        },
        {
          question: "Comment suivre l'avancement de mon projet ?",
          answer: "Vous avez accès à un dashboard projet en temps réel, avec rapports hebdomadaires et réunions de suivi régulières. Transparence totale sur l'avancement."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            ❓ Questions Fréquentes
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Trouvez Rapidement vos Réponses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tout ce que vous devez savoir sur nos formations IA, services d'implémentation 
            et solutions d'automatisation pour votre entreprise.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 pb-16">
        {filteredCategories.length > 0 ? (
          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    {category.title}
                  </h2>
                </div>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="px-6">
                        <AccordionTrigger className="text-left py-6 text-lg font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aucun résultat trouvé</h3>
            <p className="text-gray-600 mb-8">
              Essayez avec d'autres mots-clés ou consultez toutes nos questions fréquentes.
            </p>
            <Button onClick={() => setSearchTerm("")}>
              Voir toutes les questions
            </Button>
          </div>
        )}
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre équipe d'experts est là pour vous aider. Contactez-nous et obtenez 
            une réponse personnalisée sous 2h.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Chat en Direct</h3>
                <p className="text-blue-100 text-sm mb-4">Réponse immédiate pendant les heures ouvrées</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Démarrer le chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                <p className="text-blue-100 text-sm mb-4">+33 1 23 45 67 89</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Nous appeler
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-blue-100 text-sm mb-4">Réponse sous 2h en moyenne</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/contact">Nous écrire</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
