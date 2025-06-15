
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText, Users, Mail } from "lucide-react";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Twenty One Talents s'engage à protéger vos données personnelles 
            conformément au RGPD et aux meilleures pratiques de sécurité
          </p>
          <div className="text-gray-400">
            Dernière mise à jour : 15 juin 2024
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-900 mb-0">Transparence</h2>
              </div>
              <p className="text-blue-800 mb-0">
                Cette politique explique clairement comment nous collectons, utilisons 
                et protégeons vos informations personnelles.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-3" />
              1. Données Collectées
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Données d'identification</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nom, prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Entreprise et fonction</li>
              <li>Adresse postale (si demandée)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Données de navigation</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Pages visitées et durée</li>
              <li>Cookies et technologies similaires</li>
              <li>Données de performance du site</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-3" />
              2. Utilisation des Données
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Finalités légitimes :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Formation :</strong> Gestion des inscriptions et suivi pédagogique</li>
                <li><strong>Communication :</strong> Newsletters, événements, offres personnalisées</li>
                <li><strong>Support :</strong> Assistance technique et relation client</li>
                <li><strong>Amélioration :</strong> Optimisation de nos services et contenus</li>
                <li><strong>Conformité :</strong> Obligations légales et comptables</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-3" />
              3. Protection des Données
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Sécurité Technique</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Chiffrement SSL/TLS</li>
                  <li>• Serveurs sécurisés</li>
                  <li>• Sauvegardes chiffrées</li>
                  <li>• Accès restreints</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Sécurité Organisationnelle</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Formation des équipes</li>
                  <li>• Audits réguliers</li>
                  <li>• Procédures strictes</li>
                  <li>• Contrôles d'accès</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Vos Droits RGPD</h2>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Droit d'accès</h4>
                <p className="text-gray-600 text-sm">Vous pouvez demander l'accès à vos données personnelles</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Droit de rectification</h4>
                <p className="text-gray-600 text-sm">Vous pouvez corriger vos données inexactes</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold">Droit à l'effacement</h4>
                <p className="text-gray-600 text-sm">Vous pouvez demander la suppression de vos données</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Droit à la portabilité</h4>
                <p className="text-gray-600 text-sm">Vous pouvez récupérer vos données dans un format standard</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold">Droit d'opposition</h4>
                <p className="text-gray-600 text-sm">Vous pouvez vous opposer au traitement de vos données</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Types de cookies utilisés :</h3>
              <ul className="space-y-2">
                <li><strong>Essentiels :</strong> Fonctionnement du site (session, sécurité)</li>
                <li><strong>Analytiques :</strong> Google Analytics (anonymisé)</li>
                <li><strong>Marketing :</strong> Personnalisation des contenus (avec consentement)</li>
              </ul>
              <p className="text-sm text-yellow-700 mt-4">
                Vous pouvez gérer vos préférences cookies via notre bandeau de consentement.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Partage des Données</h2>
            
            <p className="mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement avec :
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nos sous-traitants techniques (hébergement, email, analytics)</li>
              <li>Nos partenaires de formation (avec votre consentement explicite)</li>
              <li>Autorités légales (si requis par la loi)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Durée de Conservation</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>Clients actifs :</strong> Pendant toute la durée de la relation commerciale</li>
                <li><strong>Prospects :</strong> 3 ans après le dernier contact</li>
                <li><strong>Comptabilité :</strong> 10 ans (obligation légale)</li>
                <li><strong>Cookies :</strong> 13 mois maximum</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-3" />
              8. Contact
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="mb-4">
                Pour exercer vos droits ou pour toute question concernant cette politique :
              </p>
              <ul className="space-y-2">
                <li><strong>Email :</strong> dpo@twentyonetalents.fr</li>
                <li><strong>Courrier :</strong> Twenty One Talents - DPO, Paris, France</li>
                <li><strong>Délai de réponse :</strong> 30 jours maximum</li>
              </ul>
              <p className="text-sm text-blue-700 mt-4">
                Vous pouvez également saisir la CNIL en cas de litige : www.cnil.fr
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Confidentialite;
