
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Users, Calendar, Star, CheckCircle, Zap } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Newsletter IA Twenty One Talents
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Restez à la pointe de l'innovation IA avec notre newsletter hebdomadaire. 
            Actualités, tendances, outils et conseils d'experts livrés directement dans votre boîte mail.
          </p>
          <div className="flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              +15 000 abonnés
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Chaque mardi
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              4.8/5 satisfaction
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ce que vous recevrez</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Actualités IA Sélectionnées</h3>
                    <p className="text-gray-600">Les 3-5 actualités IA les plus importantes de la semaine, analysées par nos experts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Conseils Pratiques</h3>
                    <p className="text-gray-600">Tips concrets pour implémenter l'IA dans votre quotidien professionnel.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Outils & Ressources</h3>
                    <p className="text-gray-600">Découverte d'outils IA innovants et ressources gratuites exclusives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cas d'Usage Réels</h3>
                    <p className="text-gray-600">Exemples concrets d'entreprises qui transforment leur activité avec l'IA.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-4">Témoignage d'abonné</h3>
                <blockquote className="text-gray-600 italic">
                  "La newsletter de Twenty One Talents est devenue ma lecture incontournable du mardi matin. 
                  Contenu de qualité, toujours actionnable. J'ai implémenté plusieurs de leurs conseils dans mon entreprise."
                </blockquote>
                <cite className="text-sm text-gray-500 mt-2 block">
                  - Sarah M., Directrice Innovation chez TechCorp
                </cite>
              </div>
            </div>

            <div>
              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-2xl text-center flex items-center justify-center">
                    <Mail className="h-6 w-6 mr-2 text-blue-600" />
                    Inscription Gratuite
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input 
                        id="prenom" 
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input 
                        id="nom" 
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="entreprise">Entreprise</Label>
                      <Input 
                        id="entreprise" 
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="poste">Poste/Fonction</Label>
                      <Input 
                        id="poste" 
                        placeholder="Votre fonction"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Sujets d'intérêt (optionnel)</Label>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="chatgpt" />
                        <Label htmlFor="chatgpt">ChatGPT & IA Générative</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="automatisation" />
                        <Label htmlFor="automatisation">Automatisation des processus</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="outils" />
                        <Label htmlFor="outils">Nouveaux outils IA</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="strategie" />
                        <Label htmlFor="strategie">Stratégie & ROI</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="reglementation" />
                        <Label htmlFor="reglementation">Réglementation & Éthique</Label>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="rgpd" required />
                      <Label htmlFor="rgpd" className="text-sm">
                        J'accepte de recevoir la newsletter et j'ai lu la 
                        <a href="/confidentialite" className="text-blue-600 hover:underline ml-1">
                          politique de confidentialité
                        </a>
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      S'abonner gratuitement
                    </Button>
                  </form>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>📧 Pas de spam, désinscription facile à tout moment</p>
                    <p>🔒 Vos données sont protégées (RGPD)</p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Déjà abonné ? Consultez nos dernières éditions
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" size="sm">
                    📅 Newsletter #47 - GPT-4 Turbo et nouvelles fonctionnalités
                  </Button>
                  <Button variant="outline" size="sm">
                    📅 Newsletter #46 - IA dans la finance : tendances 2024
                  </Button>
                  <Button variant="outline" size="sm">
                    📅 Newsletter #45 - Microsoft Copilot : guide complet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">En chiffres</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15 000+</div>
              <p className="text-gray-600">Abonnés actifs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Taux d'ouverture</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2 ans</div>
              <p className="text-gray-600">D'expertise partagée</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
