
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Eye, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GuidesIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guides IA Gratuits
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Téléchargez nos guides pratiques pour maîtriser l'intelligence artificielle
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-indigo-600" />
                  Guide du débutant IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Les bases de l'IA expliquées simplement</p>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidesIA;
