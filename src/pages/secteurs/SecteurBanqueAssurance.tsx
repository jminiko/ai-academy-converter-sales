
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Shield, TrendingUp, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SecteurBanqueAssurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour Banques & Assurances
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transformez vos services financiers avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Découvrir nos solutions
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Défis du secteur financier</h2>
            <p className="text-xl text-gray-600">
              L'IA répond aux enjeux majeurs de votre secteur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Sécurité et Conformité</h3>
              <p className="text-gray-600">
                Détection automatique des fraudes et respect des réglementations RGPD, PCI-DSS
              </p>
            </Card>
            
            <Card className="p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Analyse Prédictive</h3>
              <p className="text-gray-600">
                Évaluation des risques clients et optimisation des portefeuilles d'investissement
              </p>
            </Card>
            
            <Card className="p-6">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Expérience Client</h3>
              <p className="text-gray-600">
                Chatbots intelligents et personnalisation des services financiers
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos solutions spécialisées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">🔍 Détection de Fraude</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Analyse comportementale en temps réel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Machine learning adaptatif</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Réduction de 90% des faux positifs</span>
                </li>
              </ul>
              <Badge variant="outline">ROI 450%</Badge>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">🤖 Assistant Virtuel Bancaire</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Support client 24/7 automatisé</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Traitement des demandes courantes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">85% de résolution automatique</span>
                </li>
              </ul>
              <Badge variant="outline">ROI 320%</Badge>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">📊 Scoring Crédit Intelligent</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Analyse multifactorielle avancée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Prédiction du risque de défaut</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Amélioration de 30% de la précision</span>
                </li>
              </ul>
              <Badge variant="outline">ROI 280%</Badge>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">📱 Robo-Advisor</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Conseil en investissement automatisé</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Rééquilibrage de portefeuille</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Personnalisation selon le profil</span>
                </li>
              </ul>
              <Badge variant="outline">ROI 250%</Badge>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à révolutionner vos services financiers ?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Consultation gratuite <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/simulateur-roi">Calculer mon ROI</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecteurBanqueAssurance;
