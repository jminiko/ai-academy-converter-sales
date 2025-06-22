
import { Route } from "react-router-dom";

// Secteurs d'activité spécialisés
import Agriculture from "@/pages/secteurs/Agriculture";
import Automobile from "@/pages/secteurs/Automobile";
import BTP from "@/pages/secteurs/BTP";
import Education from "@/pages/secteurs/Education";
import Finance from "@/pages/secteurs/Finance";
import Immobilier from "@/pages/secteurs/Immobilier";
import Logistique from "@/pages/secteurs/Logistique";
import Retail from "@/pages/secteurs/Retail";
import Sante from "@/pages/secteurs/Sante";
import SecteurBanqueAssurance from "@/pages/secteurs/SecteurBanqueAssurance";
import Transport from "@/pages/secteurs/Transport";

// Nouveaux secteurs
import Aeronautique from "@/pages/secteurs/Aeronautique";
import Defense from "@/pages/secteurs/Defense";
import Maritime from "@/pages/secteurs/Maritime";

export const SecteurRoutes = () => (
  <>
    {/* Secteurs existants */}
    <Route path="/secteur-agriculture" element={<Agriculture />} />
    <Route path="/secteur-automobile" element={<Automobile />} />
    <Route path="/secteur-btp" element={<BTP />} />
    <Route path="/secteur-education" element={<Education />} />
    <Route path="/secteur-finance" element={<Finance />} />
    <Route path="/secteur-immobilier" element={<Immobilier />} />
    <Route path="/secteur-logistique" element={<Logistique />} />
    <Route path="/secteur-retail" element={<Retail />} />
    <Route path="/secteur-sante" element={<Sante />} />
    <Route path="/secteur-banque-assurance" element={<SecteurBanqueAssurance />} />
    <Route path="/secteur-transport" element={<Transport />} />
    
    {/* Nouveaux secteurs */}
    <Route path="/secteur-aeronautique" element={<Aeronautique />} />
    <Route path="/secteur-defense" element={<Defense />} />
    <Route path="/secteur-maritime" element={<Maritime />} />
  </>
);
