
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, LogIn, Code, BookOpen, Lightbulb, Target, CheckCircle, ArrowRight, Zap, Database } from "lucide-react";

const IASymbolique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <LogIn className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Symbolique</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez l'intelligence artificielle symbolique : logique, règles et raisonnement explicite 
            pour des systèmes IA transparents et interprétables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Explorer l'IA Symbolique
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Cas d'usage
            </Button>
          </div>
        </div>
      </section>

      {/* Concepts fondamentaux */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Concepts Fondamentaux</h2>
          
          <Tabs defaultValue="logique" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="logique">Logique</TabsTrigger>
              <TabsTrigger value="regles">Règles</TabsTrigger>
              <TabsTrigger value="ontologies">Ontologies</TabsTrigger>
              <TabsTrigger value="raisonnement">Raisonnement</TabsTrigger>
            </TabsList>

            <TabsContent value="logique" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-blue-600" />
                    Logique Formelle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA symbolique s'appuie sur la logique formelle pour représenter et manipuler 
                    les connaissances de manière structurée et rigoureuse.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Logique propositionnelle
                      </h4>
                      <p className="text-sm text-gray-600">Manipulation de propositions vraies ou fausses</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Logique des prédicats
                      </h4>
                      <p className="text-sm text-gray-600">Raisonnement avec variables et quantificateurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regles" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-6 w-6 text-blue-600" />
                    Systèmes de Règles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Les systèmes experts utilisent des règles IF-THEN pour encoder 
                    l'expertise humaine dans un format compréhensible par la machine.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Exemple de règle :</h4>
                    <code className="text-sm">
                      IF (température &gt; 38°C) AND (symptômes = "fièvre") THEN diagnostic = "possible infection"
                    </code>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ontologies" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-blue-600" />
                    Ontologies et Taxonomies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Les ontologies définissent la structure des connaissances en organisant 
                    les concepts et leurs relations de manière hiérarchique.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Concepts</span>
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Relations</span>
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Propriétés</span>
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="raisonnement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                    Mécanismes de Raisonnement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    L'IA symbolique utilise différents types de raisonnement pour déduire 
                    de nouvelles connaissances à partir des faits existants.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Badge variant="secondary" className="p-3 justify-start">
                      <Zap className="h-4 w-4 mr-2" />
                      Déduction
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start">
                      <Target className="h-4 w-4 mr-2" />
                      Induction
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Abduction
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Applications de l'IA Symbolique</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Systèmes Experts</h3>
                <p className="text-gray-600">Diagnostic médical, conseil financier</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Web Sémantique</h3>
                <p className="text-gray-600">Annotation et recherche intelligente</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">IA Explicable</h3>
                <p className="text-gray-600">Transparence et interprétabilité</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IASymbolique;
