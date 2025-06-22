
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Clock, Users, Star, ArrowRight, CheckCircle, Receipt, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const FormationIAComptabilite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Comptabilité
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Automatisez votre comptabilité et optimisez vos processus financiers avec l'IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Moderniser ma comptabilité
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <Receipt className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">90%</h3>
              <p className="text-gray-600">temps de saisie économisé</p>
            </Card>
            <Card className="text-center p-6">
              <BarChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">précision augmentée</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">80%</h3>
              <p className="text-gray-600">coûts réduits</p>
            </Card>
            <Card className="text-center p-6">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">2 jours</h3>
              <p className="text-gray-600">formation spécialisée</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Révolutionnez votre comptabilité</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatisation des écritures</h3>
                  <p className="text-gray-600">IA pour la saisie automatique et la catégorisation des transactions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Détection d'anomalies</h3>
                  <p className="text-gray-600">Identification automatique des erreurs et incohérences comptables.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Rapports intelligents</h3>
                  <p className="text-gray-600">Génération automatisée de tableaux de bord et analyses financières.</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-green-100 text-green-800">Spécialisation Comptable</Badge>
                <h3 className="text-2xl font-bold mb-2">14h intensives</h3>
                <div className="flex justify-center items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">4.7/5 (73 avis)</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-green-600">1 690€</p>
                <p className="text-gray-500">Certification incluse</p>
              </div>
              
              <Button className="w-full" size="lg" asChild>
                <Link to="/contact">S'inscrire maintenant</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAComptabilite;
