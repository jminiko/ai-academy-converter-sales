
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Monitor, Brain, Target, Clock, Users, Award, CheckCircle } from "lucide-react";

const FormationIAChirurgie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Scissors className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA en Chirurgie</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intégration de l'intelligence artificielle dans les pratiques chirurgicales.
            Chirurgie assistée, planification préopératoire et robotique médicale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="bg-white/20 text-white">Chirurgie Robotique</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">IA Médicale</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Imagerie 3D</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Certification Médicale</Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="program" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="program">Programme</TabsTrigger>
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="practical">Pratique</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
            </TabsList>

            <TabsContent value="program" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Programme de Formation</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Formation complète sur l'application de l'IA en chirurgie moderne
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Monitor className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Imagerie Chirurgicale IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Analyse d'images médicales et planification 3D</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Brain className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Neurochirurgie IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Applications spécialisées en neurochirurgie</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Target className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Chirurgie de Précision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Techniques de chirurgie minimalement invasive</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="modules" className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Modules de Formation</h3>
              <div className="space-y-4">
                {[
                  "Introduction à l'IA chirurgicale",
                  "Robotique médicale avancée",
                  "Analyse d'images médicales",
                  "Planification préopératoire IA",
                  "Navigation chirurgicale",
                  "Suivi postopératoire intelligent",
                  "Éthique et sécurité",
                  "Cas cliniques pratiques"
                ].map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">{module}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="practical" className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Formation Pratique</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Simulation Chirurgicale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Simulateurs haute fidélité</li>
                      <li>• Réalité virtuelle chirurgicale</li>
                      <li>• Environnements d'apprentissage sécurisés</li>
                      <li>• Feedback IA en temps réel</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Laboratoire Robotique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Manipulation robotique</li>
                      <li>• Programmation chirurgicale</li>
                      <li>• Interface homme-machine</li>
                      <li>• Maintenance préventive</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="certification" className="space-y-6">
              <div className="text-center mb-8">
                <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Certification Professionnelle</h3>
                <p className="text-gray-600">Certification reconnue par les instances médicales</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Durée</h4>
                    <p className="text-gray-600">6 mois intensifs</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Format</h4>
                    <p className="text-gray-600">Hybride présentiel/distanciel</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Niveau</h4>
                    <p className="text-gray-600">Expert médical</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAChirurgie;
