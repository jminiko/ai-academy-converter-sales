import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";

// Route components existantes
import { MainRoutes } from "@/routes/MainRoutes";
import { FormationRoutes } from "@/routes/FormationRoutes";
import { OutilsRoutes } from "@/routes/OutilsRoutes";
import { SolutionsRoutes } from "@/routes/SolutionsRoutes";
import { GuidesRoutes } from "@/routes/GuidesRoutes";

// Nouvelles routes spécialisées
import { SecteurRoutes } from "@/routes/SecteurRoutes";
import { OutilsAvancesRoutes } from "@/routes/OutilsAvancesRoutes";
import { SolutionsAvanceesRoutes } from "@/routes/SolutionsAvanceesRoutes";
import { GuidesAvancesRoutes } from "@/routes/GuidesAvancesRoutes";
import { FormationsAvanceesRoutes } from "@/routes/FormationsAvanceesRoutes";
import { CasEtudesRoutes } from "@/routes/CasEtudesRoutes";
import { TechnologiesRoutes } from "@/routes/TechnologiesRoutes";
import { WebinairesRoutes } from "@/routes/WebinairesRoutes";
import { CertificationsAvanceesRoutes } from "@/routes/CertificationsAvanceesRoutes";
import { ApplicationsRoutes } from "@/routes/ApplicationsRoutes";
import { MethodesRoutes } from "@/routes/MethodesRoutes";
import { TendancesRoutes } from "@/routes/TendancesRoutes";
import { ReglementationRoutes } from "@/routes/ReglementationRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {/* Main routes */}
            <MainRoutes />
            
            {/* Formation routes */}
            <FormationRoutes />
            <FormationsAvanceesRoutes />
            
            {/* Outils routes */}
            <OutilsRoutes />
            <OutilsAvancesRoutes />
            
            {/* Solutions routes */}
            <SolutionsRoutes />
            <SolutionsAvanceesRoutes />
            
            {/* Guides routes */}
            <GuidesRoutes />
            <GuidesAvancesRoutes />
            
            {/* Secteurs routes */}
            <SecteurRoutes />
            
            {/* Applications routes */}
            <ApplicationsRoutes />
            
            {/* Méthodes routes */}
            <MethodesRoutes />
            
            {/* Tendances routes */}
            <TendancesRoutes />
            
            {/* Réglementation routes */}
            <ReglementationRoutes />
            
            {/* Cas d'études routes */}
            <CasEtudesRoutes />
            
            {/* Technologies routes */}
            <TechnologiesRoutes />
            
            {/* Webinaires routes */}
            <WebinairesRoutes />
            
            {/* Certifications avancées routes */}
            <CertificationsAvanceesRoutes />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
