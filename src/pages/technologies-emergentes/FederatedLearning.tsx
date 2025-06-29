
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Globe, Users, Database, Lock } from "lucide-react";

const FederatedLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Federated Learning</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Apprentissage automatique décentralisé préservant la confidentialité.
            Formation de modèles sans centraliser les données sensibles.
          </p>
          <Badge variant="secondary" className="bg-green-500/30 text-white px-4 py-2 text-lg mb-6">
            🔒 Privacy-First AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Confidentialité Maximale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Les données restent sur les appareils locaux</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Distribution Globale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Apprentissage sur des millions d'appareils</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Collaboration Sécurisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Modèles partagés sans exposer les données</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Réduction des Coûts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Moins de transfert et stockage de données</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Conformité RGPD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Respect des réglementations de confidentialité</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Network className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Scalabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Montée en charge sur des millions de nœuds</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications du Federated Learning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Santé Digitale</h3>
                <p className="text-gray-600 mb-4">
                  Formation de modèles médicaux sans centraliser les données patients,
                  respectant la confidentialité médicale tout en bénéficiant
                  d'un apprentissage collectif.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Diagnostic IA</Badge>
                  <Badge variant="outline">Recherche Médicale</Badge>
                  <Badge variant="outline">Épidémiologie</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Finance & Banque</h3>
                <p className="text-gray-600 mb-4">
                  Détection de fraude collaborative entre institutions financières
                  sans partager les données sensibles des clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Anti-Fraude</Badge>
                  <Badge variant="outline">Scoring Crédit</Badge>
                  <Badge variant="outline">Risk Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Appareils Mobiles</h3>
                <p className="text-gray-600 mb-4">
                  Amélioration des assistants vocaux et claviers prédictifs
                  en apprenant des habitudes utilisateurs sans compromettre la vie privée.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Clavier Prédictif</Badge>
                  <Badge variant="outline">Assistant IA</Badge>
                  <Badge variant="outline">Reconnaissance Vocale</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">IoT & Industrie</h3>
                <p className="text-gray-600 mb-4">
                  Optimisation des processus industriels en combinant les données
                  de capteurs de différents sites sans centralisation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Maintenance Prédictive</Badge>
                  <Badge variant="outline">Optimisation Énergétique</Badge>
                  <Badge variant="outline">Qualité Production</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FederatedLearning;
