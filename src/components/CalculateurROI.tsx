
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Euro, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CalculateurROI = () => {
  const [nombreEmployes, setNombreEmployes] = useState(50);
  const [salaireHoraireMoyen, setSalaireHoraireMoyen] = useState(35);
  const [heuresRepetitivesParJour, setHeuresRepetitivesParJour] = useState(3);
  const [tauxErreur, setTauxErreur] = useState(8);
  const [coutErreurMoyen, setCoutErreurMoyen] = useState(150);
  
  const [resultats, setResultats] = useState({
    economieTempsAnnuelle: 0,
    economieErreurs: 0,
    coutFormation: 0,
    economieNetteAnnuelle: 0,
    roi: 0,
    retourInvestissement: 0
  });

  useEffect(() => {
    const joursOuvres = 220;
    const economieTempsAnnuelle = nombreEmployes * heuresRepetitivesParJour * 0.75 * joursOuvres * salaireHoraireMoyen;
    const erreursTotalesAnnuelles = nombreEmployes * (tauxErreur / 100) * joursOuvres;
    const economieErreurs = erreursTotalesAnnuelles * 0.8 * coutErreurMoyen;
    const coutFormation = Math.max(15000, nombreEmployes * 1500);
    const economieNetteAnnuelle = economieTempsAnnuelle + economieErreurs - coutFormation;
    const roi = ((economieTempsAnnuelle + economieErreurs) / coutFormation - 1) * 100;
    const retourInvestissement = coutFormation / ((economieTempsAnnuelle + economieErreurs) / 12);

    setResultats({
      economieTempsAnnuelle: Math.round(economieTempsAnnuelle),
      economieErreurs: Math.round(economieErreurs),
      coutFormation,
      economieNetteAnnuelle: Math.round(economieNetteAnnuelle),
      roi: Math.round(roi),
      retourInvestissement: Math.round(retourInvestissement * 10) / 10
    });
  }, [nombreEmployes, salaireHoraireMoyen, heuresRepetitivesParJour, tauxErreur, coutErreurMoyen]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculateur ROI Personnalisé</h2>
        <p className="text-xl text-gray-600">Découvrez votre potentiel d'économies avec l'automatisation IA</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Paramètres d'entrée */}
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              Paramètres de votre entreprise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre d'employés</label>
              <input
                type="range"
                min="10"
                max="500"
                value={nombreEmployes}
                onChange={(e) => setNombreEmployes(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>10</span>
                <span className="font-bold text-blue-600">{nombreEmployes}</span>
                <span>500</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Salaire horaire moyen (€)</label>
              <input
                type="range"
                min="20"
                max="80"
                value={salaireHoraireMoyen}
                onChange={(e) => setSalaireHoraireMoyen(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>20€</span>
                <span className="font-bold text-blue-600">{salaireHoraireMoyen}€</span>
                <span>80€</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Heures tâches répétitives/jour</label>
              <input
                type="range"
                min="1"
                max="8"
                step="0.5"
                value={heuresRepetitivesParJour}
                onChange={(e) => setHeuresRepetitivesParJour(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>1h</span>
                <span className="font-bold text-blue-600">{heuresRepetitivesParJour}h</span>
                <span>8h</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Taux d'erreur actuel (%)</label>
              <input
                type="range"
                min="2"
                max="20"
                value={tauxErreur}
                onChange={(e) => setTauxErreur(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>2%</span>
                <span className="font-bold text-blue-600">{tauxErreur}%</span>
                <span>20%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Coût moyen d'une erreur (€)</label>
              <input
                type="range"
                min="50"
                max="500"
                step="25"
                value={coutErreurMoyen}
                onChange={(e) => setCoutErreurMoyen(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>50€</span>
                <span className="font-bold text-blue-600">{coutErreurMoyen}€</span>
                <span>500€</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Résultats */}
        <Card className="border-2 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
              Votre ROI Calculé
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
                <div className="text-5xl font-bold mb-2">{resultats.roi}%</div>
                <p className="text-xl">ROI Première Année</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Euro className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">
                    {resultats.economieTempsAnnuelle.toLocaleString()}€
                  </div>
                  <p className="text-sm text-gray-600">Économie temps</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">
                    {resultats.retourInvestissement} mois
                  </div>
                  <p className="text-sm text-gray-600">Retour investissement</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Économie temps annuelle :</span>
                  <span className="font-bold text-green-600">+{resultats.economieTempsAnnuelle.toLocaleString()}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Économie réduction erreurs :</span>
                  <span className="font-bold text-green-600">+{resultats.economieErreurs.toLocaleString()}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Coût formation :</span>
                  <span className="font-bold text-red-600">-{resultats.coutFormation.toLocaleString()}€</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg">
                  <span className="font-bold">Bénéfice net année 1 :</span>
                  <span className="font-bold text-green-600">{resultats.economieNetteAnnuelle.toLocaleString()}€</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <Badge className="mb-4 bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
          🎯 Résultats garantis ou remboursé
        </Badge>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-xl px-8 py-4" asChild>
            <Link to="/formations">
              Obtenir ces résultats maintenant
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-xl px-8 py-4" asChild>
            <Link to="/contact">
              Audit personnalisé gratuit
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalculateurROI;
