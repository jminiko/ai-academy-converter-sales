
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Formations from "./pages/Formations";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Automatisation from "./pages/Automatisation";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import IAGenerative from "./pages/formations/IAGenerative";
import ChatGPTPro from "./pages/formations/ChatGPTPro";
import AutomatisationIA from "./pages/formations/AutomatisationIA";
import PromptEngineering from "./pages/formations/PromptEngineering";
import OpenAIAPI from "./pages/formations/OpenAIAPI";
import MicrosoftCopilot from "./pages/formations/MicrosoftCopilot";
import GoogleBard from "./pages/formations/GoogleBard";
import ClaudeAI from "./pages/formations/ClaudeAI";
import Consulting from "./pages/services/Consulting";
import Implementation from "./pages/services/Implementation";
import Support from "./pages/services/Support";
import ArticleIA2024 from "./pages/blog/ArticleIA2024";
import GuidePrompts from "./pages/blog/GuidePrompts";
import CaseStudyBanque from "./pages/CaseStudyBanque";
import Certifications from "./pages/Certifications";
import Partenaires from "./pages/Partenaires";
import Evenements from "./pages/Evenements";
import RessourcesGratuites from "./pages/RessourcesGratuites";
import Confidentialite from "./pages/Confidentialite";
import SecteursBusiness from "./pages/SecteursBusiness";
import OutilsIA from "./pages/OutilsIA";
import Methodologie from "./pages/Methodologie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/formations/ia-generative" element={<IAGenerative />} />
          <Route path="/formations/chatgpt-pro" element={<ChatGPTPro />} />
          <Route path="/formations/automatisation-ia" element={<AutomatisationIA />} />
          <Route path="/formations/prompt-engineering" element={<PromptEngineering />} />
          <Route path="/formations/openai-api" element={<OpenAIAPI />} />
          <Route path="/formations/microsoft-copilot" element={<MicrosoftCopilot />} />
          <Route path="/formations/google-bard" element={<GoogleBard />} />
          <Route path="/formations/claude-ai" element={<ClaudeAI />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/automatisation" element={<Automatisation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/tendances-ia-2024" element={<ArticleIA2024 />} />
          <Route path="/blog/guide-prompt-engineering" element={<GuidePrompts />} />
          <Route path="/case-studies/banque-transformation" element={<CaseStudyBanque />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/ressources-gratuites" element={<RessourcesGratuites />} />
          <Route path="/secteurs-business" element={<SecteursBusiness />} />
          <Route path="/outils-ia" element={<OutilsIA />} />
          <Route path="/methodologie" element={<Methodologie />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
