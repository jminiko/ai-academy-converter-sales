
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Ear, MousePointer, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AccessibiliteNumerique = () => {
  const criteres = [
    {
      icon: Eye,
      titre: "Accessibilité Visuelle",
      description: "Contrastes élevés, tailles de police adaptables, support des lecteurs d'écran",
      status: "conforme",
      mesures: [
        "Ratio de contraste minimum 4.5:1",
        "Textes redimensionnables jusqu'à 200%",
        "Navigation au clavier complète",
        "Alt-text sur toutes les images"
      ]
    },
    {
      icon: Ear,
      titre: "Accessibilité Auditive",
      description: "Sous-titres, transcriptions, alternatives visuelles aux contenus audio",
      status: "conforme",
      mesures: [
        "Sous-titres sur toutes les vidéos",
        "Transcriptions des contenus audio",
        "Alertes visuelles pour les notifications",
        "Langue des pages clairement définie"
      ]
    },
    {
      icon: MousePointer,
      titre: "Accessibilité Motrice",
      description: "Navigation au clavier, zones de clic étendues, temps de réaction adaptés",
      status: "conforme",
      mesures: [
        "Navigation 100% clavier",
        "Zones de clic minimum 44px",
        "Pas de limite de temps stricte",
        "Annulation des actions destructives"
      ]
    },
    {
      icon: Heart,
      titre: "Accessibilité Cognitive",
      description: "Interface simple, messages d'erreur clairs, aide contextuelle",
      status: "amelioration",
      mesures: [
        "Interface épurée et cohérente",
        "Messages d'erreur explicites",
        "Aide contextuelle disponible",
        "Navigation prévisible"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Accessibilité Numérique
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre engagement pour rendre nos formations IA accessibles à tous, 
            conformément au RGAA et aux standards internationaux WCAG 2.1
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Télécharger notre déclaration
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Niveau de Conformité</h2>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                RGAA 4.1 - Niveau AA
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">
                WCAG 2.1 - Niveau AA
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {criteres.map((critere, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <critere.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{critere.titre}</CardTitle>
                    </div>
                    <Badge 
                      className={critere.status === "conforme" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}
                    >
                      {critere.status === "conforme" ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Conforme
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-4 w-4 mr-1" />
                          En amélioration
                        </>
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{critere.description}</p>
                  <h4 className="font-semibold mb-2">Mesures mises en place :</h4>
                  <ul className="space-y-1">
                    {critere.mesures.map((mesure, mesureIndex) => (
                      <li key={mesureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {mesure}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">Déclaration d'Accessibilité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">État de conformité</h3>
                <p>
                  Le site twentyonetalents.com est <strong>partiellement conforme</strong> avec le 
                  référentiel général d'amélioration de l'accessibilité (RGAA) version 4.1, 
                  en raison des non-conformités et des dérogations énumérées ci-dessous.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Résultats des tests</h3>
                <p>
                  L'audit de conformité réalisé par nos experts révèle que :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>85% des critères RGAA sont respectés</li>
                  <li>92% des critères WCAG 2.1 niveau AA sont conformes</li>
                  <li>100% de navigation possible au clavier</li>
                  <li>Contraste minimum respecté sur 95% des éléments</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contenus non accessibles</h3>
                <p>
                  Les contenus listés ci-dessous ne sont pas accessibles pour les raisons suivantes :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Certaines vidéos de démonstration n'ont pas encore de sous-titres</li>
                  <li>Quelques graphiques complexes manquent de descriptions détaillées</li>
                  <li>Certains contenus PDF externes ne respectent pas les standards</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Établissement de cette déclaration</h3>
                <p>
                  Cette déclaration a été établie le 15 juin 2024. Elle a été mise à jour le 15 juin 2024.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Amélioration Continue</h2>
            <p className="text-lg text-gray-700 mb-6">
              Nous nous engageons à améliorer continuellement l'accessibilité de notre plateforme. 
              Vos retours sont essentiels pour nous aider dans cette démarche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Signaler un problème d'accessibilité
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Télécharger le guide d'utilisation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessibiliteNumerique;
