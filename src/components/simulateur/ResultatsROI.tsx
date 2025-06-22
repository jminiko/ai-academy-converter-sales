
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Euro, Clock, BarChart3 } from "lucide-react";

interface ResultatsCalcul {
  tempsEconomiseAnnuel: number;
  gainFinancierAnnuel: number;
  roi1An: number;
  roi2Ans: number;
  roi3Ans: number;
  delaiRentabilite: number;
  coutTotalInvestissement: number;
}

interface ParametresSimulation {
  processus: string;
  tempsManuel: number;
  executionsParJour: number;
  nombrePersonnes: number;
  coutHoraire: number;
  coutFormation: number;
  coutOutil: number;
  coutMaintenance: number;
}

interface ResultatsROIProps {
  resultats: ResultatsCalcul;
  parametres: ParametresSimulation;
}

export const ResultatsROI: React.FC<ResultatsROIProps> = ({ resultats, parametres }) => {
  const formatNumber = (num: number): string => {
    return Math.round(num).toLocaleString('fr-FR');
  };

  const getROIColor = (roi: number): string => {
    if (roi >= 200) return "text-green-600";
    if (roi >= 50) return "text-blue-600";
    return "text-orange-600";
  };

  const getROIBadgeColor = (roi: number): string => {
    if (roi >= 200) return "bg-green-100 text-green-800";
    if (roi >= 50) return "bg-blue-100 text-blue-800";
    return "bg-orange-100 text-orange-800";
  };

  return (
    <div className="space-y-8">
      {/* Titre principal */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Résultats pour : {parametres.processus}
        </h2>
        <Badge className={`text-xl px-6 py-3 ${getROIBadgeColor(resultats.roi1An)}`}>
          ROI première année : {formatNumber(resultats.roi1An)}%
        </Badge>
      </div>

      {/* Métriques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center border-2 border-green-200">
          <CardHeader>
            <Euro className="h-12 w-12 text-green-600 mx-auto" />
            <CardTitle className="text-green-600">Gain Annuel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {formatNumber(resultats.gainFinancierAnnuel)}€
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Économies générées chaque année
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-blue-200">
          <CardHeader>
            <Clock className="h-12 w-12 text-blue-600 mx-auto" />
            <CardTitle className="text-blue-600">Temps Économisé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">
              {formatNumber(resultats.tempsEconomiseAnnuel)}h
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Heures libérées par an
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-purple-200">
          <CardHeader>
            <TrendingUp className="h-12 w-12 text-purple-600 mx-auto" />
            <CardTitle className="text-purple-600">Délai Rentabilité</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">
              {formatNumber(resultats.delaiRentabilite)} mois
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Retour sur investissement
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-orange-200">
          <CardHeader>
            <BarChart3 className="h-12 w-12 text-orange-600 mx-auto" />
            <CardTitle className="text-orange-600">Investissement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">
              {formatNumber(resultats.coutTotalInvestissement)}€
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Coût total initial
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Évolution du ROI */}
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Évolution du ROI dans le temps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className={`text-4xl font-bold ${getROIColor(resultats.roi1An)}`}>
                {formatNumber(resultats.roi1An)}%
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">Année 1</p>
              <p className="text-sm text-gray-600">
                Gain net : {formatNumber(resultats.gainFinancierAnnuel - parametres.coutMaintenance - resultats.coutTotalInvestissement)}€
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className={`text-4xl font-bold ${getROIColor(resultats.roi2Ans)}`}>
                {formatNumber(resultats.roi2Ans)}%
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">Année 2</p>
              <p className="text-sm text-gray-600">
                Gain cumulé : {formatNumber((resultats.gainFinancierAnnuel * 2) - (parametres.coutMaintenance * 2) - resultats.coutTotalInvestissement)}€
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className={`text-4xl font-bold ${getROIColor(resultats.roi3Ans)}`}>
                {formatNumber(resultats.roi3Ans)}%
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">Année 3</p>
              <p className="text-sm text-gray-600">
                Gain cumulé : {formatNumber((resultats.gainFinancierAnnuel * 3) - (parametres.coutMaintenance * 3) - resultats.coutTotalInvestissement)}€
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Détail des calculs */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="text-xl">💡 Comment est calculé votre ROI ?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Paramètres utilisés :</h4>
              <ul className="space-y-1 text-gray-600">
                <li>→ {parametres.tempsManuel} minutes par tâche</li>
                <li>→ {parametres.executionsParJour} exécutions/jour</li>
                <li>→ {parametres.nombrePersonnes} personnes concernées</li>
                <li>→ {parametres.coutHoraire}€/heure en coût salarial</li>
                <li>→ 220 jours ouvrés par an</li>
                <li>→ 80% des tâches automatisables</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Formule de calcul :</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Temps économisé = {formatNumber(resultats.tempsEconomiseAnnuel)}h/an</li>
                <li>• Économies = Temps × Coût horaire</li>
                <li>• Investissement = Formation + Outil</li>
                <li>• ROI = (Gains - Coûts) ÷ Investissement × 100</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
