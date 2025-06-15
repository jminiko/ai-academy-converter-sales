
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link2, Code2, Zap, Workflow } from "lucide-react";

const LangChain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Link2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            LangChain Framework
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Développez des applications LLM avec LangChain
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Apprendre LangChain
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LangChain;
