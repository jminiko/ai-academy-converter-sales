
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Gift, Clock, TrendingUp } from "lucide-react";

interface FormulaireProps {
  variant?: 'audit' | 'demo' | 'guide' | 'consultation';
  titre?: string;
  description?: string;
  incitation?: string;
}

const FormulaireCapture: React.FC<FormulaireProps> = ({ 
  variant = 'audit',
  titre,
  description,
  incitation
}) => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    entreprise: '',
    poste: '',
    nombreEmployes: '',
    telephone: '',
    besoin: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const variantConfig = {
    audit: {
      titre: "Audit IA Gratuit",
      description: "Découvrez votre potentiel d'automatisation en 30 minutes",
      incitation: "🎯 Audit personnalisé + Rapport ROI offerts",
      couleur: "blue",
      icon: TrendingUp
    },
    demo: {
      titre: "Démonstration Privée",
      description: "Voir l'IA en action sur vos propres processus",
      incitation: "🚀 Démo personnalisée + ROI calculé",
      couleur: "green",
      icon: Gift
    },
    guide: {
      titre: "Guide Exclusif",
      description: "100 processus automatisables avec l'IA",
      incitation: "📚 Guide gratuit + Checklist implémentation",
      couleur: "purple",
      icon: CheckCircle
    },
    consultation: {
      titre: "Consultation Stratégique",
      description: "30 min avec un expert IA pour votre roadmap",
      incitation: "⏰ Consultation gratuite limitée dans le temps",
      couleur: "orange",
      icon: Clock
    }
  };

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de l'envoi
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    
    // Ici vous intégreriez avec votre système de capture de leads
    // Par exemple : Hubspot, Mailchimp, etc.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Card className={`border-2 border-${config.couleur}-200 max-w-md mx-auto`}>
        <CardContent className="p-8 text-center">
          <CheckCircle className={`h-16 w-16 text-${config.couleur}-600 mx-auto mb-4`} />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Demande Reçue !</h3>
          <p className="text-gray-600 mb-6">
            Merci {formData.prenom} ! Nous vous contactons dans les 2h pour planifier votre {config.titre.toLowerCase()}.
          </p>
          <Badge className={`bg-${config.couleur}-100 text-${config.couleur}-800`}>
            Traitement prioritaire activé
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border-2 border-${config.couleur}-200 max-w-lg mx-auto hover:shadow-xl transition-shadow`}>
      <CardHeader className="text-center">
        <IconComponent className={`h-12 w-12 text-${config.couleur}-600 mx-auto mb-4`} />
        <CardTitle className="text-2xl">
          {titre || config.titre}
        </CardTitle>
        <p className="text-gray-600">
          {description || config.description}
        </p>
        <Badge className={`bg-${config.couleur}-100 text-${config.couleur}-800 text-sm px-4 py-2`}>
          {incitation || config.incitation}
        </Badge>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prénom *
              </label>
              <input
                type="text"
                name="prenom"
                required
                value={formData.prenom}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom *
              </label>
              <input
                type="text"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Dupont"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email professionnel *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="jean.dupont@entreprise.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Entreprise *
            </label>
            <input
              type="text"
              name="entreprise"
              required
              value={formData.entreprise}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Poste
              </label>
              <input
                type="text"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Directeur, Manager..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Taille entreprise
              </label>
              <select
                name="nombreEmployes"
                value={formData.nombreEmployes}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionnez</option>
                <option value="1-10">1-10 employés</option>
                <option value="11-50">11-50 employés</option>
                <option value="51-200">51-200 employés</option>
                <option value="201-1000">201-1000 employés</option>
                <option value="1000+">1000+ employés</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="01 23 45 67 89"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vos besoins prioritaires
            </label>
            <textarea
              name="besoin"
              value={formData.besoin}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Décrivez vos défis d'automatisation..."
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className={`w-full bg-${config.couleur}-600 hover:bg-${config.couleur}-700 text-lg py-3`}
          >
            Obtenir mon {config.titre.toLowerCase()}
          </Button>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              🔒 Vos données sont sécurisées. Pas de spam, promis.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormulaireCapture;
