
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Receipt, Clock, Users, Star, ArrowRight, CheckCircle, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionAutomatisationFacturation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Receipt className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Solution d'Automatisation de Facturation
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Automatisez votre processus de facturation et éliminez les erreurs manuelles
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Demander une démo
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 border-2 border-green-200">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">-75%</h3>
              <p className="text-gray-600">Temps de facturation</p>
            </Card>
            <Card className="text-center p-6 border-2 border-blue-200">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-600 mb-2">-90%</h3>
              <p className="text-gray-600">Erreurs de facturation</p>
            </Card>
            <Card className="text-center p-6 border-2 border-purple-200">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600 mb-2">15 jours</h3>
              <p className="text-gray-600">Délai de paiement réduit</p>
            </Card>
            <Card className="text-center p-6 border-2 border-orange-200">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-600 mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction client</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fonctionnalités principales</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Génération automatique</h3>
                    <p className="text-gray-600">Création automatique des factures à partir de vos données métier</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Envoi automatisé</h3>
                    <p className="text-gray-600">Distribution automatique par email avec accusé de réception</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Suivi des paiements</h3>
                    <p className="text-gray-600">Relances automatiques et tableau de bord en temps réel</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Intégrations comptables</h3>
                    <p className="text-gray-600">Synchronisation avec vos outils comptables existants</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Résultats garantis</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">ROI 280%</div>
                  <p className="text-gray-600">En moyenne la première année</p>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Economies moyennes :</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Temps administratif</span>
                      <span className="font-semibold">15h/semaine</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coûts opérationnels</span>
                      <span className="font-semibold">-60%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Délais de paiement</span>
                      <span className="font-semibold">-50%</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full" size="lg" asChild>
                  <Link to="/contact">Obtenir un devis</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionAutomatisationFacturation;
