
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, Zap, Target, Settings, Copy, RefreshCw, Wand2, Brain } from "lucide-react";
import { useState } from "react";

const GenerateurPrompts = () => {
  const [domaine, setDomaine] = useState("");
  const [objectif, setObjectif] = useState("");
  const [contexte, setContexte] = useState("");
  const [promptGenere, setPromptGenere] = useState("");

  const genererPrompt = () => {
    const promptTemplate = `En tant qu'expert en ${domaine}, votre mission est de ${objectif}.

Contexte : ${contexte}

Veuillez fournir une réponse détaillée qui :
- Soit précise et actionnable
- Inclue des exemples concrets
- Considère les meilleures pratiques du domaine
- Soit adaptée au niveau d'expertise mentionné

Format de réponse attendu :
1. Analyse de la situation
2. Recommandations spécifiques
3. Étapes d'implémentation
4. Métriques de succès

Commencez votre réponse par un résumé exécutif de 2-3 phrases.`;

    setPromptGenere(promptTemplate);
  };

  const copierPrompt = () => {
    navigator.clipboard.writeText(promptGenere);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Générateur de Prompts IA</h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Créez des prompts optimisés pour obtenir les meilleurs résultats de vos IA
          </p>
          <Badge variant="secondary" className="bg-orange-500/30 text-white px-4 py-2 text-lg mb-6">
            🚀 Prompt Engineering
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Créateur de Prompts</h2>
              
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-yellow-600 mr-2" />
                  Configuration du Prompt
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Domaine d'expertise</label>
                    <Input
                      placeholder="ex: marketing digital, développement web, finance..."
                      value={domaine}
                      onChange={(e) => setDomaine(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Objectif principal</label>
                    <Input
                      placeholder="ex: créer une stratégie marketing, optimiser un site web..."
                      value={objectif}
                      onChange={(e) => setObjectif(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Contexte et détails</label>
                    <Textarea
                      placeholder="Décrivez le contexte, les contraintes, le public cible..."
                      value={contexte}
                      onChange={(e) => setContexte(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={genererPrompt}
                    className="w-full bg-yellow-600 hover:bg-yellow-700"
                    disabled={!domaine || !objectif}
                  >
                    <Wand2 className="mr-2 h-5 w-5" />
                    Générer le Prompt
                  </Button>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-bold">Prompts Optimisés</h4>
                  <p className="text-sm text-gray-600">Structure professionnelle</p>
                </Card>
                <Card className="p-4 text-center">
                  <Brain className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-bold">IA Compatible</h4>
                  <p className="text-sm text-gray-600">ChatGPT, Claude, Gemini</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Prompt Généré</h2>
              
              <Card className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <Settings className="h-6 w-6 text-green-600 mr-2" />
                    Votre Prompt Optimisé
                  </h3>
                  {promptGenere && (
                    <Button 
                      onClick={copierPrompt}
                      variant="outline"
                      size="sm"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copier
                    </Button>
                  )}
                </div>
                
                {promptGenere ? (
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <pre className="whitespace-pre-wrap text-sm font-mono">
                      {promptGenere}
                    </pre>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-8 rounded-lg border text-center text-gray-500">
                    <Lightbulb className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Remplissez les champs ci-contre pour générer votre prompt optimisé</p>
                  </div>
                )}
              </Card>

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">Conseils d'Utilisation</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-sm">Testez votre prompt avec différentes variations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-sm">Ajustez le niveau de détail selon vos besoins</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-sm">Sauvegardez vos prompts efficaces pour réutilisation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Maximisez vos Résultats IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Un prompt bien structuré peut améliorer la qualité des réponses IA de 300%.
              Utilisez notre générateur pour créer des prompts professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                <Lightbulb className="mr-2 h-5 w-5" />
                Formation Prompt Engineering
              </Button>
              <Button size="lg" variant="outline">
                <RefreshCw className="mr-2 h-5 w-5" />
                Générateur Avancé
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerateurPrompts;
