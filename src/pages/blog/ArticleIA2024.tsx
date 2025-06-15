
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ArticleIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            📊 Tendances IA
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Les Tendances de l'Intelligence Artificielle en 2024
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              15 Juin 2024
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Équipe Twenty One Talents
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              8 min de lecture
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop" 
            alt="IA 2024 tendances" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            L'année 2024 marque un tournant décisif dans l'évolution de l'intelligence artificielle. 
            Découvrez les tendances qui transforment le paysage technologique et business.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. L'IA Générative Multimodale
          </h2>
          <p className="text-gray-700 mb-6">
            L'intégration de texte, image, audio et vidéo dans des modèles unifiés révolutionne 
            la création de contenu. Les entreprises adoptent massivement ces technologies pour 
            automatiser leurs processus créatifs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. L'IA au Service de l'Automatisation
          </h2>
          <p className="text-gray-700 mb-6">
            Les solutions d'automatisation intelligente permettent aux entreprises de gagner 
            jusqu'à 70% de productivité sur leurs tâches répétitives. Le ROI devient mesurable 
            dès les premiers mois d'implémentation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. L'IA Éthique et Responsable
          </h2>
          <p className="text-gray-700 mb-6">
            La réglementation européenne et les bonnes pratiques poussent les entreprises 
            vers une IA plus transparente et respectueuse des données personnelles.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              💡 Conseil d'Expert
            </h3>
            <p className="text-blue-800">
              Pour réussir votre transformation IA, commencez petit avec des cas d'usage 
              à fort impact, puis étendez progressivement vos initiatives.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link to="/formations">
                Nos formations IA <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/blog">Retour au blog</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleIA2024;
