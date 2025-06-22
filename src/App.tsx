
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages principales
import Index from "./pages/Index";
import SitemapPage from "./pages/Sitemap";
import Inscription from "./pages/Inscription";
import Merci from "./pages/Merci";
import Contact from "./pages/Contact";
import Formations from "./pages/Formations";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";

// Pages en anglais
import AITrainingFinance from "./pages/en/AITrainingFinance";
import ContactEN from "./pages/en/ContactEN";

// Route spéciale pour FormationIAFinance
import FormationIAFinance from "./pages/formations/FormationIAFinance";

// Routes modulaires
import FormationsRoutes from "./routes/FormationsRoutes";
import GuidesRoutes from "./routes/GuidesRoutes";
import SolutionsRoutes from "./routes/SolutionsRoutes";
import SolutionsAvanceesRoutes from "./routes/SolutionsAvanceesRoutes";
import OutilsRoutes from "./routes/OutilsRoutes";
import ApplicationsRoutes from "./routes/ApplicationsRoutes";
import SecteurRoutes from "./routes/SecteurRoutes";
import TechnologiesRoutes from "./routes/TechnologiesRoutes";
import WebinairesRoutes from "./routes/WebinairesRoutes";
import CasEtudesRoutes from "./routes/CasEtudesRoutes";
import CertificationsAvanceesRoutes from "./routes/CertificationsAvanceesRoutes";
import FormationsAvanceesRoutes from "./routes/FormationsAvanceesRoutes";
import GuidesAvancesRoutes from "./routes/GuidesAvancesRoutes";
import SecteurHotellerieRoutes from "./routes/SecteurHotellerieRoutes";
import MethodesRoutes from "./routes/MethodesRoutes";
import ReglementationRoutes from "./routes/ReglementationRoutes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Pages principales */}
          <Route path="/" element={<Index />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/certifications" element={<Certifications />} />
          
          {/* Pages en anglais */}
          <Route path="/en/ai-training-finance" element={<AITrainingFinance />} />
          <Route path="/en/contact" element={<ContactEN />} />
          
          {/* Route spéciale */}
          <Route path="/formationiafinance" element={<FormationIAFinance />} />
          
          {/* Routes modulaires */}
          {FormationsRoutes()}
          {GuidesRoutes()}
          {SolutionsRoutes()}
          {SolutionsAvanceesRoutes()}
          {OutilsRoutes()}
          {ApplicationsRoutes()}
          {SecteurRoutes()}
          {TechnologiesRoutes()}
          {WebinairesRoutes()}
          {CasEtudesRoutes()}
          {CertificationsAvanceesRoutes()}
          {FormationsAvanceesRoutes()}
          {GuidesAvancesRoutes()}
          {SecteurHotellerieRoutes()}
          {MethodesRoutes()}
          {ReglementationRoutes()}
          
          {/* Route 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
