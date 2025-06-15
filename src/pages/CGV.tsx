
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Euro, Shield, AlertTriangle } from "lucide-react";

const CGV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conditions Générales de Vente
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Conditions applicables à toutes nos prestations de formation et services IA. 
            Dernière mise à jour : 15 juin 2024.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Mise à jour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">15 juin 2024</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Euro className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Paiement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">30 jours net</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Garantie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">30 jours</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Annulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">48h avant</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 1 - Objet et Champ d'Application</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations 
                de services proposées par Twenty One Talents, société par actions simplifiée au capital 
                de 50 000 euros, immatriculée au RCS de Paris sous le numéro 987 654 321, ayant son 
                siège social au 123 Avenue des Champs-Élysées, 75008 Paris.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ces CGV régissent les relations contractuelles entre Twenty One Talents et ses clients 
                pour toutes prestations de formation, conseil, et services liés à l'intelligence artificielle.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 2 - Prestations de Services</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-3">2.1 Formations</h3>
              <p className="text-gray-700 mb-4">
                Nos formations comprennent des sessions présentielles, distancielles ou mixtes sur 
                les thématiques de l'intelligence artificielle, incluant matériel pédagogique, 
                certificat de participation et accès à notre plateforme en ligne.
              </p>
              
              <h3 className="font-semibold mb-3">2.2 Services de Conseil</h3>
              <p className="text-gray-700 mb-4">
                Les prestations de conseil incluent l'analyse des besoins, la définition de stratégies IA, 
                l'accompagnement à l'implémentation et le support technique.
              </p>
              
              <h3 className="font-semibold mb-3">2.3 Implémentation</h3>
              <p className="text-gray-700">
                Services de déploiement de solutions IA personnalisées, incluant développement, 
                intégration, tests et mise en production.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 3 - Tarifs et Modalités de Paiement</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-3">3.1 Tarifs</h3>
              <p className="text-gray-700 mb-4">
                Les tarifs sont exprimés en euros hors taxes et sont valables pour une durée de 30 jours 
                à compter de la date du devis. La TVA au taux en vigueur s'ajoute aux prix indiqués.
              </p>
              
              <h3 className="font-semibold mb-3">3.2 Modalités de Paiement</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Formations individuelles : 100% à la commande</li>
                <li>Formations entreprise : 50% à la commande, 50% à réception de facture</li>
                <li>Services de conseil : 30% à la commande, 70% selon échéancier convenu</li>
                <li>Projets d'implémentation : selon planning de facturation spécifique</li>
              </ul>
              
              <h3 className="font-semibold mb-3">3.3 Retard de Paiement</h3>
              <p className="text-gray-700">
                En cas de retard de paiement, des pénalités égales à 3 fois le taux d'intérêt légal 
                seront appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 4 - Modalités d'Inscription et d'Annulation</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-3">4.1 Inscription</h3>
              <p className="text-gray-700 mb-4">
                L'inscription devient définitive après réception du bulletin d'inscription signé 
                et du règlement correspondant. Un accusé de réception est envoyé sous 48h.
              </p>
              
              <h3 className="font-semibold mb-3">4.2 Annulation par le Client</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Plus de 30 jours avant : remboursement intégral</li>
                <li>Entre 30 et 15 jours : retenue de 25%</li>
                <li>Entre 15 et 48h : retenue de 50%</li>
                <li>Moins de 48h : retenue de 100%</li>
              </ul>
              
              <h3 className="font-semibold mb-3">4.3 Annulation par Twenty One Talents</h3>
              <p className="text-gray-700">
                En cas d'annulation de notre fait, le client sera intégralement remboursé ou 
                pourra reporter sa participation sur une session ultérieure.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 5 - Propriété Intellectuelle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Tous les supports de formation, méthodologies, outils et contenus développés par 
                Twenty One Talents restent sa propriété exclusive. Toute reproduction, diffusion 
                ou utilisation commerciale est interdite sans autorisation écrite préalable.
              </p>
              <p className="text-gray-700">
                Le client s'engage à respecter les droits de propriété intellectuelle et à ne pas 
                divulguer les informations confidentielles communiquées lors des prestations.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 6 - Garanties et Responsabilité</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-3">6.1 Garantie de Satisfaction</h3>
              <p className="text-gray-700 mb-4">
                Twenty One Talents s'engage à fournir des prestations conformes aux standards 
                de qualité annoncés. Une garantie "satisfait ou remboursé" de 30 jours s'applique 
                à toutes nos formations.
              </p>
              
              <h3 className="font-semibold mb-3">6.2 Limitation de Responsabilité</h3>
              <p className="text-gray-700">
                La responsabilité de Twenty One Talents est limitée au montant des sommes versées 
                par le client. En aucun cas, nous ne pourrons être tenus responsables des préjudices 
                indirects ou de la perte d'exploitation.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 7 - Protection des Données</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, les données personnelles collectées sont utilisées uniquement 
                pour la gestion de la relation client et l'amélioration de nos services. 
                Elles ne sont jamais cédées à des tiers.
              </p>
              <p className="text-gray-700">
                Le client dispose d'un droit d'accès, de rectification, de suppression et de 
                portabilité de ses données. Pour exercer ces droits : contact@twentyonetalents.fr
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 8 - Force Majeure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Twenty One Talents ne pourra être tenue responsable de l'inexécution de ses 
                obligations en cas de force majeure ou de circonstances exceptionnelles 
                (pandémie, catastrophe naturelle, grève, etc.). Les prestations pourront être 
                reportées sans pénalité.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 9 - Règlement des Litiges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                En cas de litige, les parties s'efforceront de trouver une solution amiable. 
                À défaut, les tribunaux de Paris seront seuls compétents.
              </p>
              <p className="text-gray-700">
                Le droit français est applicable à l'exclusion de tout autre droit.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Article 10 - Dispositions Générales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Si une clause des présentes CGV était déclarée nulle, cela n'affecterait pas 
                la validité des autres clauses.
              </p>
              <p className="text-gray-700 mb-4">
                Twenty One Talents se réserve le droit de modifier les présentes CGV à tout moment. 
                Les conditions applicables sont celles en vigueur à la date de la commande.
              </p>
              <p className="text-gray-700">
                Pour toute question concernant ces CGV : contact@twentyonetalents.fr
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <p className="text-gray-700">
              Twenty One Talents<br />
              123 Avenue des Champs-Élysées<br />
              75008 Paris, France<br />
              <strong>Email :</strong> contact@twentyonetalents.fr<br />
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGV;
