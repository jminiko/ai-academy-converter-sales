
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Star, Shield, Trophy } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inscription = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    formation: "",
    experience: "",
    motivation: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription submitted:", formData);
    navigate("/merci");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formations = [
    "Formation IA Générative Complète - 1 890€",
    "ChatGPT Pro pour Entreprise - 1 290€", 
    "Automatisation Intelligente - 2 490€",
    "Formation IA Finance - 2 990€",
    "Certification IA Niveau 10 - 3 490€"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="h-5 w-5 text-yellow-300 mr-2" />
            <span className="text-white font-medium">🎓 Inscription Formation IA</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Transformez Votre Carrière avec l'IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Rejoignez plus de 1000+ professionnels qui ont déjà révolutionné leur travail grâce à nos formations IA certifiantes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <p className="text-white font-semibold">Note 4.9/5</p>
              <p className="text-blue-100 text-sm">500+ avis clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-8 w-8 text-green-300 mx-auto mb-3" />
              <p className="text-white font-semibold">Certification</p>
              <p className="text-blue-100 text-sm">Reconnue industrie</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-blue-300 mx-auto mb-3" />
              <p className="text-white font-semibold">Garantie</p>
              <p className="text-blue-100 text-sm">Satisfait ou remboursé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  Inscrivez-vous Maintenant
                </CardTitle>
                <p className="text-lg text-gray-600">
                  Remplissez ce formulaire pour réserver votre place dans notre prochaine session
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Informations Personnelles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email professionnel *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Informations professionnelles */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Informations Professionnelles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Entreprise *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Poste actuel *</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleChange("position", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Formation souhaitée */}
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Formation Souhaitée</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="formation">Choisissez votre formation *</Label>
                        <Select onValueChange={(value) => handleChange("formation", value)} required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez une formation" />
                          </SelectTrigger>
                          <SelectContent>
                            {formations.map((formation, index) => (
                              <SelectItem key={index} value={formation}>
                                {formation}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="experience">Votre niveau d'expérience avec l'IA *</Label>
                        <Select onValueChange={(value) => handleChange("experience", value)} required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="debutant">Débutant - Aucune expérience</SelectItem>
                            <SelectItem value="intermediaire">Intermédiaire - Quelques notions</SelectItem>
                            <SelectItem value="avance">Avancé - Expérience solide</SelectItem>
                            <SelectItem value="expert">Expert - Très expérimenté</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Motivation et budget */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Vos Objectifs</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="motivation">Décrivez vos objectifs avec cette formation *</Label>
                        <Textarea
                          id="motivation"
                          value={formData.motivation}
                          onChange={(e) => handleChange("motivation", e.target.value)}
                          required
                          rows={4}
                          className="mt-1"
                          placeholder="Ex: Automatiser mes tâches quotidiennes, développer une expertise IA pour mon équipe..."
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="budget">Budget de formation approuvé</Label>
                        <Select onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez votre budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1500">0€ - 1 500€</SelectItem>
                            <SelectItem value="1500-3000">1 500€ - 3 000€</SelectItem>
                            <SelectItem value="3000-5000">3 000€ - 5 000€</SelectItem>
                            <SelectItem value="5000+">+ 5 000€</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      🚀 Confirmer Mon Inscription
                    </Button>
                    
                    <p className="text-center text-sm text-gray-600 mt-4">
                      En vous inscrivant, vous acceptez nos conditions générales de vente.
                      <br />
                      Nous vous contacterons sous 2h pour finaliser votre inscription.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inscription;
