
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Zap, GitBranch, Cpu } from "lucide-react";

const OutilGitHubCopilot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            GitHub Copilot - Assistant IA
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Assistant de programmation alimenté par l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
            Coder avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Auto-complétion</h3>
              <p className="text-gray-600">Code intelligent</p>
            </Card>
            <Card className="p-6 text-center">
              <GitBranch className="h-12 w-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suggestions contextuelles</h3>
              <p className="text-gray-600">Adaptation projet</p>
            </Card>
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-langages</h3>
              <p className="text-gray-600">Support universel</p>
            </Card>
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Productivité</h3>
              <p className="text-gray-600">Développement accéléré</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilGitHubCopilot;
