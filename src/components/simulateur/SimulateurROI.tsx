
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Euro, Clock, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { ResultatsROI } from "./ResultatsROI";
import { MessagesPersonnalises } from "./MessagesPersonnalises";
import { CallsToAction } from "./CallsToAction";

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

interface ResultatsCalcul {
  tempsEconomiseAnnuel: number;
  gainFinancierAnnuel: number;
  roi1An: number;
  roi2Ans: number;
  roi3Ans: number;
  delaiRentabilite: number;
  coutTotalInvestissement: number;
}

const SimulateurROI = () => {
  const [parametres, setParametres] = useState<ParametresSimulation>({
    processus: "",
    tempsManuel: 30,
    executionsParJour: 5,
    nombrePersonnes: 3,
    coutHoraire: 35,
    coutFormation: 8000,
    coutOutil: 5000,
    coutMaintenance: 1200
  });

  const [resultats, setResultats] = useState<ResultatsCalcul>({
    tempsEconomiseAnnuel: 0,
    gainFinancierAnnuel: 0,
    roi1An: 0,
    roi2Ans: 0,
    roi3Ans: 0,
    delaiRentabilite: 0,
    coutTotalInvestissement: 0
  });

  const [etapeActuelle, setEtapeActuelle] = useState<'parametres' | 'resultats'>('parametres');

  useEffect(() => {
    calculerROI();
  }, [parametres]);

  const calculerROI = () => {
    const joursOuvres = 220;
    const tauxAutomatisation = 0.8; // 80% des tâches automatisées
    
    // Calcul du temps économisé
    const tempsEconomiseParJour = (parametres.tempsManuel / 60) * parametres.executionsParJour * parametres.nombrePersonnes * tauxAutomatisation;
    const tempsEconomiseAnnuel = tempsEconomiseParJour * joursOuvres;
    
    // Calcul du gain financier
    const gainFinancierAnnuel = tempsEconomiseAnnuel * parametres.coutHoraire;
    
    // Coût total d'investissement
    const coutTotalInvestissement = parametres.coutFormation + parametres.coutOutil;
    
    // Calcul des ROI
    const gainNet1An = gainFinancierAnnuel - parametres.coutMaintenance - coutTotalInvestissement;
    const gainNet2Ans = (gainFinancierAnnuel * 2) - (parametres.coutMaintenance * 2) - coutTotalInvestissement;
    const gainNet3Ans = (gainFinancierAnnuel * 3) - (parametres.coutMaintenance * 3) - coutTotalInvestissement;
    
    const roi1An = (gainNet1An / coutTotalInvestissement) * 100;
    const roi2Ans = (gainNet2Ans / coutTotalInvestissement) * 100;
    const roi3Ans = (gainNet3Ans / coutTotalInvestissement) * 100;
    
    // Délai de rentabilité en mois
    const gainMensuel = (gainFinancierAnnuel - parametres.coutMaintenance) / 12;
    const delaiRentabilite = gainMensuel > 0 ? coutTotalInvestissement / gainMensuel : 0;

    setResultats({
      tempsEconomiseAnnuel,
      gainFinancierAnnuel,
      roi1An,
      roi2Ans,
      roi3Ans,
      delaiRentabilite,
      coutTotalInvestissement
    });
  };

  const handleInputChange = (field: keyof ParametresSimulation, value: string | number) => {
    setParametres(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? value : Number(value)
    }));
  };

  const lancerSimulation = () => {
    if (!parametres.processus.trim()) {
      alert("Veuillez renseigner le processus à automatiser");
      return;
    }
    setEtapeActuelle('resultats');
  };

  const recommencer = () => {
    setEtapeActuelle('parametres');
  };

  if (etapeActuelle === 'resultats') {
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={recommencer}
            className="mb-6"
          >
            ← Modifier les paramètres
          </Button>
        </div>
        
        <ResultatsROI resultats={resultats} parametres={parametres} />
        <MessagesPersonnalises roi={resultats.roi1An} />
        <CallsToAction processus={parametres.processus} roi={resultats.roi1An} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simulateur ROI IA</h2>
        <p className="text-xl text-gray-600 mb-6">
          Calculez le retour sur investissement de vos projets d'automatisation
        </p>
        <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
          🎯 Résultats en 2 minutes
        </Badge>
      </div>

      <Card className="border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Info className="h-6 w-6 text-blue-600 mr-2" />
            Paramètres de votre projet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Label htmlFor="processus" className="text-base font-medium">
                Quel processus souhaitez-vous automatiser ? *
              </Label>
              <Input
                id="processus"
                value={parametres.processus}
                onChange={(e) => handleInputChange('processus', e.target.value)}
                placeholder="Ex: Traitement des factures fournisseurs"
                className="mt-2 text-base p-3"
              />
            </div>

            <div>
              <Label htmlFor="tempsManuel" className="text-base font-medium">
                Temps manuel par tâche (minutes)
              </Label>
              <Input
                id="tempsManuel"
                type="number"
                value={parametres.tempsManuel}
                onChange={(e) => handleInputChange('tempsManuel', e.target.value)}
                className="mt-2 text-base p-3"
                min="1"
              />
              <p className="text-sm text-gray-500 mt-1">Temps actuel nécessaire pour une exécution</p>
            </div>

            <div>
              <Label htmlFor="executionsParJour" className="text-base font-medium">
                Nombre d'exécutions par jour
              </Label>
              <Input
                id="executionsParJour"
                type="number"
                value={parametres.executionsParJour}
                onChange={(e) => handleInputChange('executionsParJour', e.target.value)}
                className="mt-2 text-base p-3"
                min="1"
              />
              <p className="text-sm text-gray-500 mt-1">Fréquence du processus dans votre entreprise</p>
            </div>

            <div>
              <Label htmlFor="nombrePersonnes" className="text-base font-medium">
                Nombre de personnes concernées
              </Label>
              <Input
                id="nombrePersonnes"
                type="number"
                value={parametres.nombrePersonnes}
                onChange={(e) => handleInputChange('nombrePersonnes', e.target.value)}
                className="mt-2 text-base p-3"
                min="1"
              />
              <p className="text-sm text-gray-500 mt-1">Collaborateurs qui réalisent cette tâche</p>
            </div>

            <div>
              <Label htmlFor="coutHoraire" className="text-base font-medium">
                Coût horaire moyen (€)
              </Label>
              <Input
                id="coutHoraire"
                type="number"
                value={parametres.coutHoraire}
                onChange={(e) => handleInputChange('coutHoraire', e.target.value)}
                className="mt-2 text-base p-3"
                min="10"
              />
              <p className="text-sm text-gray-500 mt-1">Salaire chargé moyen par heure</p>
            </div>

            <div>
              <Label htmlFor="coutFormation" className="text-base font-medium">
                Coût de la formation (€)
              </Label>
              <Input
                id="coutFormation"
                type="number"
                value={parametres.coutFormation}
                onChange={(e) => handleInputChange('coutFormation', e.target.value)}
                className="mt-2 text-base p-3"
                min="1000"
              />
              <p className="text-sm text-gray-500 mt-1">Formation IA pour vos équipes</p>
            </div>

            <div>
              <Label htmlFor="coutOutil" className="text-base font-medium">
                Coût de l'outil d'automatisation (€)
              </Label>
              <Input
                id="coutOutil"
                type="number"
                value={parametres.coutOutil}
                onChange={(e) => handleInputChange('coutOutil', e.target.value)}
                className="mt-2 text-base p-3"
                min="0"
              />
              <p className="text-sm text-gray-500 mt-1">Licence logicielle ou développement</p>
            </div>

            <div>
              <Label htmlFor="coutMaintenance" className="text-base font-medium">
                Coût de maintenance annuel (€)
              </Label>
              <Input
                id="coutMaintenance"
                type="number"
                value={parametres.coutMaintenance}
                onChange={(e) => handleInputChange('coutMaintenance', e.target.value)}
                className="mt-2 text-base p-3"
                min="0"
              />
              <p className="text-sm text-gray-500 mt-1">Support, mises à jour, hébergement</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-xl px-12 py-4"
              onClick={lancerSimulation}
            >
              <Calculator className="mr-2 h-6 w-6" />
              Calculer mon ROI
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulateurROI;
