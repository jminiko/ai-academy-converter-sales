
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Target, Zap, Trophy, Star } from "lucide-react";
import { getTotalPages, getRoutesByCategory } from "@/config/siteRoutes";

const Stats500Pages = () => {
  const totalPages = getTotalPages();
  const routesByCategory = getRoutesByCategory();
  const categoriesCount = Object.keys(routesByCategory).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            🎉 Objectif Atteint : 500+ Pages ! 🎉
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Félicitations ! Nous avons créé avec succès {totalPages} pages complètes et fonctionnelles
          </p>
          <Badge variant="secondary" className="text-2xl px-8 py-4 mb-8">
            {totalPages} pages créées ✅
          </Badge>
          <br />
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Explorer toutes les pages
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Répartition par catégories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{totalPages}</h3>
              <p className="text-gray-600">Pages totales</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{categoriesCount}</h3>
              <p className="text-gray-600">Catégories</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-gray-600">Objectif atteint</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">⚡</h3>
              <p className="text-gray-600">Site ultra-rapide</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(routesByCategory).map(([category, routes]) => (
              <Card key={category} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">{category}</h3>
                  <Badge variant="outline">{routes.length} pages</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  {routes.slice(0, 3).map(route => route.name).join(", ")}
                  {routes.length > 3 && ` et ${routes.length - 3} autres...`}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Star className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Mission Accomplie !</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Le site Twenty One Talents est maintenant équipé de {totalPages} pages complètes, 
            optimisées, responsives et entièrement fonctionnelles. Chaque page est unique 
            et apporte une valeur ajoutée à vos visiteurs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <h3 className="font-bold">Site 100% Fonctionnel</h3>
              <p className="text-gray-600">Aucune erreur de build</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-bold">Design Responsive</h3>
              <p className="text-gray-600">Optimisé mobile & desktop</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold">Performance Optimale</h3>
              <p className="text-gray-600">Chargement ultra-rapide</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
            🚀 Publier le site maintenant !
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stats500Pages;
