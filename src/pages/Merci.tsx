
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Phone, Mail, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Merci = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="animate-scale-in">
              <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                🎉 Inscription Confirmée !
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Félicitations ! Votre demande d'inscription a bien été enregistrée.
                <br />
                Vous allez recevoir un email de confirmation sous quelques minutes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Prochaines Étapes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Email de Confirmation</h3>
                  <p className="text-gray-600 text-sm">
                    Vérifiez votre boîte mail (et vos spams) dans les 5 prochaines minutes
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Appel de Qualification</h3>
                  <p className="text-gray-600 text-sm">
                    Nos experts vous contactent sous 2h pour personnaliser votre formation
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Réservation de Créneaux</h3>
                  <p className="text-gray-600 text-sm">
                    Choisissez vos dates de formation selon vos disponibilités
                  </p>
                </div>
              </div>
            </div>

            {/* Ressources en attendant */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">📚 Guide Gratuit</h3>
                  <p className="text-gray-600 mb-4">
                    Téléchargez notre guide "Les 10 Prompts Essentiels pour Démarrer avec ChatGPT"
                  </p>
                  <Button className="w-full">
                    Télécharger le Guide
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">🎯 Webinaire Gratuit</h3>
                  <p className="text-gray-600 mb-4">
                    Participez à notre webinaire "IA et Productivité" ce jeudi à 14h
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/webinaires">
                      Réserver ma Place
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Questions */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Des Questions ?</h2>
              <p className="text-gray-600 mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Nous Contacter
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  +33 1 23 45 67 89
                </Button>
              </div>
            </div>

            {/* Retour à l'accueil */}
            <div className="pt-8">
              <Button variant="ghost" asChild>
                <Link to="/">
                  ← Retour à l'Accueil
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

export default Merci;
