
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FormationsRoutes from "./routes/FormationsRoutes";
import FormationsAvanceesRoutes from "./routes/FormationsAvanceesRoutes";
import FormationsSpecialisesRoutes from "./routes/FormationsSpecialisesRoutes";
import SecteursRoutes from "./routes/SecteursRoutes";
import OptimizedRoutes from "./routes/OptimizedRoutes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {FormationsRoutes()}
          {FormationsAvanceesRoutes()}
          {FormationsSpecialisesRoutes()}
          {SecteursRoutes()}
          {OptimizedRoutes()}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
