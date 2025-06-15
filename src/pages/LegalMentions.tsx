
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Building, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const LegalMentions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Informations légales et réglementaires concernant Twenty One Talents
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2 text-blue-600" />
                  Informations sur l'Éditeur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Raison sociale :</h3>
                  <p>Twenty One Talents SAS</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Siège social :</h3>
                  <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Capital social :</h3>
                  <p>500 000 €</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">SIRET :</h3>
                  <p>123 456 789 00012</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Code NAF :</h3>
                  <p>6202A - Conseil en systèmes et logiciels informatiques</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">TVA Intracommunautaire :</h3>
                  <p>FR12345678901</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <span>contact@twentyonetalents.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-gray-500" />
                  <span>www.twentyonetalents.com</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Directeur de Publication</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Alexandre Dubois</strong><br />
                CEO & Fondateur<br />
                alexandre.dubois@twentyonetalents.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hébergement</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>OVH SAS</strong><br />
                2 rue Kellermann<br />
                59100 Roubaix, France<br />
                Téléphone : 1007</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Propriété Intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale 
                  sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                  reproduction sont réservés, y compris pour les documents téléchargeables 
                  et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique 
                  quel qu'il soit est formellement interdite sauf autorisation expresse 
                  du directeur de la publication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible 
                  et le site remis à jour à différentes périodes de l'année, mais peut 
                  toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un 
                  dysfonctionnement, merci de bien vouloir le signaler par email, 
                  à l'adresse contact@twentyonetalents.com, en décrivant le problème 
                  de la manière la plus précise possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Liens Hypertextes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les sites internet peuvent proposer des liens vers d'autres sites 
                  internet ou d'autres ressources disponibles sur Internet. Twenty One Talents 
                  ne dispose d'aucun moyen pour contrôler les sites en connexion avec 
                  ses sites internet.
                </p>
                <p>
                  Twenty One Talents ne répond pas de la disponibilité de tels sites et 
                  sources externes, ni ne la garantit. Elle ne peut être tenue pour 
                  responsable de tout dommage, de quelque nature que ce soit, résultant 
                  du contenu de ces sites ou sources externes.
                </p>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <p className="text-gray-600 mb-4">
                Dernière mise à jour : 15 juin 2024
              </p>
              <Button asChild>
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalMentions;
