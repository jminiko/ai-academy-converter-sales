
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à Transformer Votre Entreprise ?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Rejoignez les leaders qui révolutionnent leur secteur grâce à l'IA. 
          Consultation gratuite et devis personnalisé sous 24h.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            asChild
          >
            <Link to="/contact">
              Consultation gratuite <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            asChild
          >
            <Link to="/formations">Voir nos formations</Link>
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span>+33 1 23 45 67 89</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>contact@twentyonetalents.fr</span>
          </div>
        </div>
        
        <div className="mt-8 text-blue-200 text-sm">
          <p>🔒 Données sécurisées • ✅ Sans engagement • ⚡ Réponse sous 2h</p>
        </div>
      </div>
    </section>
  );
};
