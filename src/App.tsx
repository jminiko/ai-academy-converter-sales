
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";

// Route components
import { MainRoutes } from "@/routes/MainRoutes";
import { FormationRoutes } from "@/routes/FormationRoutes";
import { OutilsRoutes } from "@/routes/OutilsRoutes";
import { SolutionsRoutes } from "@/routes/SolutionsRoutes";
import { GuidesRoutes } from "@/routes/GuidesRoutes";

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
            
            {/* Outils routes */}
            <OutilsRoutes />
            
            {/* Solutions routes */}
            <SolutionsRoutes />
            
            {/* Guides routes */}
            <GuidesRoutes />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
