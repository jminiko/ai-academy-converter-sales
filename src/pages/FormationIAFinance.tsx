
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Shield, BarChart3, Users, Clock } from "lucide-react";

const FormationIAFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Finance
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intelligence artificielle dans le secteur financier
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">5 jours</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Niveau Expert</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Certification</Badge>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            S'inscrire maintenant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Trading Algorithmique</h3>
              <p className="text-gray-600">Algorithmes d'IA pour le trading</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Détection de Fraude</h3>
              <p className="text-gray-600">ML pour la sécurité financière</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse Prédictive</h3>
              <p className="text-gray-600">Prévision des risques financiers</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Conseil Robo</h3>
              <p className="text-gray-600">Conseillers financiers IA</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Programme de formation</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold">Fondamentaux de l'IA en Finance</h3>
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">1 jour</span>
              </div>
              <p className="text-gray-600">Introduction aux applications IA dans la finance, réglementation et éthique</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold">Machine Learning pour la Finance</h3>
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">2 jours</span>
              </div>
              <p className="text-gray-600">Algorithmes ML spécialisés, analyse de séries temporelles, modélisation des risques</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold">Trading Algorithmique et IA</h3>
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">1 jour</span>
              </div>
              <p className="text-gray-600">Stratégies de trading IA, backtesting, gestion des risques algorithmiques</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold">Projet Pratique et Certification</h3>
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">1 jour</span>
              </div>
              <p className="text-gray-600">Développement d'un modèle IA financier complet et évaluation</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAFinance;
