
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SitemapPage from "./pages/Sitemap";

// Import des routes modulaires existantes
import { FormationsRoutes } from "./routes/FormationsRoutes";
import { GuidesRoutes } from "./routes/GuidesRoutes";
import { SolutionsRoutes } from "./routes/SolutionsRoutes";
import { OutilsRoutes } from "./routes/OutilsRoutes";
import { ApplicationsRoutes } from "./routes/ApplicationsRoutes";
import { SecteurRoutes } from "./routes/SecteurRoutes";
import { TechnologiesRoutes } from "./routes/TechnologiesRoutes";
import { TendancesRoutes } from "./routes/TendancesRoutes";
import { WebinairesRoutes } from "./routes/WebinairesRoutes";
import { CasEtudesRoutes } from "./routes/CasEtudesRoutes";
import { CertificationsAvanceesRoutes } from "./routes/CertificationsAvanceesRoutes";
import { FormationsAvanceesRoutes } from "./routes/FormationsAvanceesRoutes";
import { SolutionsAvanceesRoutes } from "./routes/SolutionsAvanceesRoutes";
import { OutilsAvancesRoutes } from "./routes/OutilsAvancesRoutes";
import { GuidesAvancesRoutes } from "./routes/GuidesAvancesRoutes";
import { ReglementationRoutes } from "./routes/ReglementationRoutes";
import { MethodesRoutes } from "./routes/MethodesRoutes";

// Nouvelles routes
import { SecteurHotellerieRoutes } from "./routes/SecteurHotellerieRoutes";

// Route spéciale pour FormationIAFinance
import FormationIAFinance from "./pages/formations/FormationIAFinance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* Route spéciale */}
          <Route path="/formationiafinance" element={<FormationIAFinance />} />
          
          {/* Routes modulaires existantes */}
          <FormationsRoutes />
          <GuidesRoutes />
          <SolutionsRoutes />
          <OutilsRoutes />
          <ApplicationsRoutes />
          <SecteurRoutes />
          <TechnologiesRoutes />
          <TendancesRoutes />
          <WebinairesRoutes />
          <CasEtudesRoutes />
          <CertificationsAvanceesRoutes />
          <FormationsAvanceesRoutes />
          <SolutionsAvanceesRoutes />
          <OutilsAvancesRoutes />
          <GuidesAvancesRoutes />
          <ReglementationRoutes />
          <MethodesRoutes />
          
          {/* Nouvelles routes sectorielles */}
          <SecteurHotellerieRoutes />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
