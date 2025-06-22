
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow, Clock, Users, Star, ArrowRight, CheckCircle, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const FormationAutomatisationProcessus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Workflow className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Automatisation des Processus
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Automatisez vos processus métier et multipliez votre efficacité opérationnelle
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Découvrir le programme
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transformez vos processus</h2>
            <p className="text-xl text-gray-600">
              De l'identification à la mise en œuvre, maîtrisez toute la chaîne d'automatisation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">80%</h3>
              <p className="text-gray-600">de gain de temps moyen</p>
            </Card>
            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">de réduction d'erreurs</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">processus automatisés</p>
            </Card>
            <Card className="text-center p-6">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">3 mois</h3>
              <p className="text-gray-600">ROI moyen</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que vous allez apprendre</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Identification des processus</h3>
                  <p className="text-gray-600">Cartographier et analyser vos processus pour identifier les opportunités d'automatisation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Outils d'automatisation</h3>
                  <p className="text-gray-600">Maîtriser Zapier, Make.com, Power Automate et autres plateformes no-code.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intégrations système</h3>
                  <p className="text-gray-600">Connecter vos applications et créer des workflows fluides.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Optimisation continue</h3>
                  <p className="text-gray-600">Surveiller, mesurer et améliorer vos automatisations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestion du changement</h3>
                  <p className="text-gray-600">Accompagner vos équipes dans la transformation digitale.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">ROI et métriques</h3>
                  <p className="text-gray-600">Calculer et démontrer la valeur de vos automatisations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à automatiser vos processus ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez les entreprises qui ont transformé leur efficacité opérationnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Réserver ma place <ArrowRight className="ml-2 h-5 w-5" />
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

export default FormationAutomatisationProcessus;
