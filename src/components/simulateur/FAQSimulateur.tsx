
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, CheckCircle } from "lucide-react";

export const FAQSimulateur = () => {
  const faqItems = [
    {
      question: "Pourquoi le ROI est-il important pour l'automatisation ?",
      reponse: "Le ROI vous permet de quantifier précisément les bénéfices de votre investissement en automatisation. Il justifie le budget, mesure la performance et guide vos décisions stratégiques. Un ROI positif garantit que votre projet créera plus de valeur qu'il n'en coûte."
    },
    {
      question: "Comment le simulateur calcule-t-il mes économies ?",
      reponse: "Le calcul se base sur le temps économisé (80% des tâches répétitives automatisées), multiplié par votre coût horaire et le nombre de personnes concernées. Nous déduisons ensuite les coûts d'investissement (formation + outils) et de maintenance pour obtenir votre gain net."
    },
    {
      question: "Les résultats sont-ils réalistes ?",
      reponse: "Nos calculs se basent sur des données issues de 500+ projets clients réels. Le taux de 80% d'automatisation est conservateur et atteint dans 90% des cas. Les résultats donnent une estimation fiable, souvent dépassée en pratique."
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats ?",
      reponse: "Généralement 2-3 mois après la formation pour les premiers processus automatisés. Le ROI complet est atteint sous 6-12 mois selon la complexité. Nos clients voient en moyenne 40% des gains dès le 3ème mois."
    },
    {
      question: "Quels types de processus peuvent être automatisés ?",
      reponse: "Tous les processus répétitifs, basés sur des règles : traitement de données, reporting, emails, facturation, RH, comptabilité, support client, marketing, etc. Si c'est répétitif et suit des règles, c'est automatisable."
    },
    {
      question: "Ai-je besoin de compétences techniques ?",
      reponse: "Non ! Nos formations vous apprennent à automatiser sans coder, avec des outils no-code et l'IA. En 3-5 jours, vous maîtrisez l'automatisation de vos processus métier. 85% de nos apprenants n'avaient aucune base technique."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <HelpCircle className="h-6 w-6 text-blue-600 mr-3" />
          Questions Fréquentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                {item.question}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.reponse}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
