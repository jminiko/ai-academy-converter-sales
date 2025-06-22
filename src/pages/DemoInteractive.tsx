
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FormulaireCapture from "@/components/FormulaireCapture";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Zap, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  Bot,
  FileText,
  Calculator,
  BarChart3
} from "lucide-react";
import { useState, useEffect } from "react";

const DemoInteractive = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [simulationData, setSimulationData] = useState({
    documentsTraités: 0,
    tempsEconomise: 0,
    erreursEvitees: 0,
    economieEuros: 0
  });

  const demos = [
    {
      id: 'chatbot',
      titre: 'Chatbot IA Client',
      description: 'Support client automatisé 24/7',
      icon: Bot,
      couleur: 'blue',
      duree: 45,
      etapes: [
        'Client pose une question complexe',
        'IA analyse et comprend le contexte',
        'Recherche dans la base de connaissances',
        'Génère une réponse personnalisée',
        'Escalade si nécessaire vers un humain'
      ],
      benefices: ['Réponse en 3 secondes', '85% résolution automatique', '24/7 disponible']
    },
    {
      id: 'documents',
      titre: 'Traitement Documents',
      description: 'Extraction et classification automatique',
      icon: FileText,
      couleur: 'green',
      duree: 30,
      etapes: [
        'Upload de 100 factures PDF',
        'OCR intelligent des données',
        'Classification automatique',
        'Validation règles métier',
        'Export vers ERP'
      ],
      benefices: ['95% précision', '20x plus rapide', 'Zéro erreur de saisie']
    },
    {
      id: 'analytics',
      titre: 'Analytics Prédictive',
      description: 'Prévisions automatisées en temps réel',
      icon: BarChart3,
      couleur: 'purple',
      duree: 60,
      etapes: [
        'Collecte données multi-sources',
        'Nettoyage et préparation',
        'Modèle ML applique prédictions',
        'Génération insights actionables',
        'Alertes automatiques si besoin'
      ],
      benefices: ['92% précision prédiction', 'Insights temps réel', 'Décisions éclairées']
    },
    {
      id: 'automatisation',
      titre: 'Automatisation Complète',
      description: 'Workflow end-to-end sans intervention',
      icon: Zap,
      couleur: 'orange',
      duree: 90,
      etapes: [
        'Déclencheur automatique détecté',
        'Validation des conditions',
        'Exécution séquence automatisée',
        'Contrôles qualité intégrés',
        'Notification résultat final'
      ],
      benefices: ['100% automatisé', '0 intervention humaine', 'Exécution parfaite']
    }
  ];

  const demoActuelle = demos[currentDemo];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            // Simulation des résultats
            setSimulationData({
              documentsTraités: Math.floor(Math.random() * 500) + 200,
              tempsEconomise: Math.floor(Math.random() * 8) + 2,
              erreursEvitees: Math.floor(Math.random() * 20) + 5,
              economieEuros: Math.floor(Math.random() * 5000) + 2000
            });
            return 100;
          }
          return prev + (100 / demoActuelle.duree);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, demoActuelle.duree]);

  const startDemo = () => {
    setIsPlaying(true);
    setProgress(0);
    setSimulationData({
      documentsTraités: 0,
      tempsEconomise: 0,
      erreursEvitees: 0,
      economieEuros: 0
    });
  };

  const pauseDemo = () => {
    setIsPlaying(false);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setProgress(0);
    setSimulationData({
      documentsTraités: 0,
      tempsEconomise: 0,
      erreursEvitees: 0,
      economieEuros: 0
    });
  };

  const etapeActuelle = Math.floor((progress / 100) * demoActuelle.etapes.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800 text-lg px-4 py-2">
            🎮 Démonstration Interactive
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Voir l'IA en Action
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez concrètement comment l'automatisation IA transforme vos processus métier. 
            Simulations interactives avec résultats en temps réel.
          </p>
        </div>
      </section>

      {/* Sélecteur de Démo */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {demos.map((demo, index) => (
              <Card 
                key={demo.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  currentDemo === index ? `border-2 border-${demo.couleur}-500` : 'border-gray-200'
                }`}
                onClick={() => {
                  setCurrentDemo(index);
                  resetDemo();
                }}
              >
                <CardContent className="p-6 text-center">
                  <demo.icon className={`h-12 w-12 text-${demo.couleur}-600 mx-auto mb-4`} />
                  <h3 className="font-bold text-lg mb-2">{demo.titre}</h3>
                  <p className="text-sm text-gray-600">{demo.description}</p>
                  {currentDemo === index && (
                    <Badge className={`mt-3 bg-${demo.couleur}-100 text-${demo.couleur}-800`}>
                      Sélectionné
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interface de Démonstration */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <demoActuelle.icon className={`h-8 w-8 text-${demoActuelle.couleur}-600 mr-3`} />
                    <CardTitle className="text-2xl">{demoActuelle.titre}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={isPlaying ? pauseDemo : startDemo}
                      disabled={progress === 100}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="sm" onClick={resetDemo}>
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Barre de Progression */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progression</span>
                    <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-${demoActuelle.couleur}-600 h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Étapes du Processus */}
                  <div>
                    <h4 className="font-bold text-lg mb-4">Processus en Cours</h4>
                    <div className="space-y-3">
                      {demoActuelle.etapes.map((etape, index) => (
                        <div 
                          key={index}
                          className={`flex items-center p-3 rounded-lg transition-all ${
                            index <= etapeActuelle 
                              ? `bg-${demoActuelle.couleur}-50 border border-${demoActuelle.couleur}-200` 
                              : 'bg-gray-50'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            index < etapeActuelle 
                              ? `bg-${demoActuelle.couleur}-600 text-white` 
                              : index === etapeActuelle && isPlaying
                              ? `bg-${demoActuelle.couleur}-600 text-white animate-pulse`
                              : 'bg-gray-300'
                          }`}>
                            {index < etapeActuelle ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <span className="text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                          <span className={`text-sm ${
                            index <= etapeActuelle ? 'font-medium' : 'text-gray-600'
                          }`}>
                            {etape}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Résultats en Temps Réel */}
                  <div>
                    <h4 className="font-bold text-lg mb-4">Résultats en Temps Réel</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4">
                        <div className="text-center">
                          <FileText className={`h-8 w-8 text-${demoActuelle.couleur}-600 mx-auto mb-2`} />
                          <div className="text-2xl font-bold">{simulationData.documentsTraités}</div>
                          <p className="text-sm text-gray-600">Documents traités</p>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="text-center">
                          <Clock className={`h-8 w-8 text-${demoActuelle.couleur}-600 mx-auto mb-2`} />
                          <div className="text-2xl font-bold">{simulationData.tempsEconomise}h</div>
                          <p className="text-sm text-gray-600">Temps économisé</p>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="text-center">
                          <CheckCircle className={`h-8 w-8 text-${demoActuelle.couleur}-600 mx-auto mb-2`} />
                          <div className="text-2xl font-bold">{simulationData.erreursEvitees}</div>
                          <p className="text-sm text-gray-600">Erreurs évitées</p>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="text-center">
                          <TrendingUp className={`h-8 w-8 text-${demoActuelle.couleur}-600 mx-auto mb-2`} />
                          <div className="text-2xl font-bold">{simulationData.economieEuros}€</div>
                          <p className="text-sm text-gray-600">Économie estimée</p>
                        </div>
                      </Card>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-semibold mb-3">Bénéfices Clés :</h5>
                      <div className="space-y-2">
                        {demoActuelle.benefices.map((benefice, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className={`h-4 w-4 text-${demoActuelle.couleur}-500 mr-2`} />
                            {benefice}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {progress === 100 && (
                  <div className={`mt-8 p-6 bg-gradient-to-r from-${demoActuelle.couleur}-500 to-${demoActuelle.couleur}-600 text-white rounded-lg text-center`}>
                    <h3 className="text-2xl font-bold mb-2">Démonstration Terminée !</h3>
                    <p className="text-lg mb-4">
                      Processus automatisé avec succès. Voulez-vous voir comment l'implémenter dans votre entreprise ?
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-gray-900 hover:bg-gray-100"
                      onClick={() => document.getElementById('formulaire-demo')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Demander une démo personnalisée
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulaire de Capture */}
      <section id="formulaire-demo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prêt à Automatiser Vos Processus ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Obtenez une démonstration personnalisée avec vos propres données et processus
            </p>
          </div>
          
          <FormulaireCapture 
            variant="demo"
            titre="Démonstration Personnalisée"
            description="Voir l'IA automatiser VOS processus métier"
            incitation="🎯 Démo sur mesure + Calcul ROI personnalisé"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoInteractive;
