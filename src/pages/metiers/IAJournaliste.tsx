
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PenTool, Search, Mic, FileText } from "lucide-react";

const IAJournaliste = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <PenTool className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Journalistes</h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez votre journalisme avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Journalisme IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Search className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Recherche d'infos</h3>
              <p className="text-gray-600">Investigation automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Mic className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transcription auto</h3>
              <p className="text-gray-600">Interviews transcrites</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rédaction assistée</h3>
              <p className="text-gray-600">Articles optimisés</p>
            </Card>
            <Card className="p-6 text-center">
              <PenTool className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fact-checking</h3>
              <p className="text-gray-600">Vérification automatique</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAJournaliste;
