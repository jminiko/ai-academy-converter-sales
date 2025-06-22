
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Phone, GraduationCap, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface CallsToActionProps {
  processus: string;
  roi: number;
}

export const CallsToAction: React.FC<CallsToActionProps> = ({ processus, roi }) => {
  const genererRapportPDF = () => {
    // Simulation de génération PDF
    alert("Génération du rapport PDF en cours...\n\nVotre rapport détaillé pour '" + processus + "' sera envoyé par email dans quelques instants.");
  };

  const demanderContact = () => {
    // Redirection vers formulaire de contact
    window.location.href = "/contact";
  };

  return (
    <div className="space-y-8">
      {/* Actions principales */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à concrétiser ces résultats ?
            </h3>
            <p className="text-xl text-blue-100">
              Passez à l'action dès maintenant pour transformer votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 h-auto p-6 flex flex-col items-center space-y-3"
              onClick={genererRapportPDF}
            >
              <FileText className="h-8 w-8" />
              <div className="text-center">
                <div className="font-bold text-lg">Rapport PDF</div>
                <div className="text-sm">Analyse complète + recommandations</div>
              </div>
            </Button>

            <Button 
              size="lg" 
              className="bg-green-500 text-white hover:bg-green-600 h-auto p-6 flex flex-col items-center space-y-3"
              onClick={demanderContact}
            >
              <Phone className="h-8 w-8" />
              <div className="text-center">
                <div className="font-bold text-lg">Expert gratuit</div>
                <div className="text-sm">Audit personnalisé sous 24h</div>
              </div>
            </Button>

            <Button 
              size="lg" 
              className="bg-purple-500 text-white hover:bg-purple-600 h-auto p-6 flex flex-col items-center space-y-3"
              asChild
            >
              <Link to="/formations">
                <GraduationCap className="h-8 w-8" />
                <div className="text-center">
                  <div className="font-bold text-lg">Formation IA</div>
                  <div className="text-sm">Démarrez votre automatisation</div>
                </div>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Garanties et rassurance */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardContent className="p-6">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-green-800 mb-4">
              🛡️ Nos Garanties
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-green-700">
              <div className="text-center">
                <div className="text-3xl font-bold">ROI 300%</div>
                <p className="text-sm">ou remboursé intégralement</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">6 mois</div>
                <p className="text-sm">d'accompagnement inclus</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">90 jours</div>
                <p className="text-sm">pour voir les premiers résultats</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Témoignages express */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img 
                src="/placeholder.svg" 
                alt="Témoignage" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <blockquote className="text-gray-700 mb-2">
                  "Le simulateur était précis à 95%. Nous avons atteint {roi >= 200 ? '420% de ROI' : '280% de ROI'} en 18 mois."
                </blockquote>
                <cite className="text-sm font-semibold">Marie Dubois, CFO TechCorp</cite>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img 
                src="/placeholder.svg" 
                alt="Témoignage" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <blockquote className="text-gray-700 mb-2">
                  "Formation IA exceptionnelle. 40 processus automatisés, équipes autonomes."
                </blockquote>
                <cite className="text-sm font-semibold">Pierre Martin, DRH InnoGroup</cite>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
