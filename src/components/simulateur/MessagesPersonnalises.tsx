
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

interface MessagesPersonnalisesProps {
  roi: number;
}

export const MessagesPersonnalises: React.FC<MessagesPersonnalisesProps> = ({ roi }) => {
  const getMessage = () => {
    if (roi >= 200) {
      return {
        icon: CheckCircle,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        titre: "🎉 Excellent ! Votre automatisation est très rentable",
        message: "Avec un ROI de " + Math.round(roi) + "%, votre projet d'automatisation générera des bénéfices exceptionnels. C'est le moment idéal pour vous lancer !",
        conseil: "Nous recommandons de démarrer rapidement pour maximiser vos gains. Nos experts peuvent vous accompagner dans la mise en œuvre."
      };
    } else if (roi >= 50) {
      return {
        icon: TrendingUp,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        titre: "✅ Bonne rentabilité, optimisez encore avec nos experts",
        message: "Votre ROI de " + Math.round(roi) + "% montre un potentiel intéressant. Avec quelques optimisations, vous pourriez augmenter significativement vos gains.",
        conseil: "Un audit personnalisé pourrait identifier des leviers d'amélioration pour doubler votre ROI."
      };
    } else {
      return {
        icon: AlertCircle,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        titre: "⚠️ Votre projet peut être amélioré",
        message: "Le ROI actuel de " + Math.round(roi) + "% peut être optimisé. Il existe probablement des approches plus rentables pour votre cas d'usage.",
        conseil: "Contactez-nous pour un audit gratuit. Nous identifierons les meilleures opportunités d'automatisation pour votre entreprise."
      };
    }
  };

  const messageData = getMessage();
  const IconComponent = messageData.icon;

  return (
    <Card className={`border-2 ${messageData.borderColor} ${messageData.bgColor}`}>
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <IconComponent className={`h-12 w-12 ${messageData.color} flex-shrink-0 mt-1`} />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {messageData.titre}
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              {messageData.message}
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-base text-gray-800">
                <strong>💡 Conseil d'expert :</strong> {messageData.conseil}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
