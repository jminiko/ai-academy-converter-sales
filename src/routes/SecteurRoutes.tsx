
import { Route } from "react-router-dom";
import Sante from "@/pages/secteurs/Sante";
import Finance from "@/pages/secteurs/Finance";
import Education from "@/pages/secteurs/Education";
import Automobile from "@/pages/secteurs/Automobile";
import Retail from "@/pages/secteurs/Retail";
import Defense from "@/pages/secteurs/Defense";
import Maritime from "@/pages/secteurs/Maritime";
import BTP from "@/pages/secteurs/BTP";
import SecteurBanqueAssurance from "@/pages/secteurs/SecteurBanqueAssurance";

export const SecteurRoutes = () => (
  <>
    <Route path="/sante" element={<Sante />} />
    <Route path="/finance" element={<Finance />} />
    <Route path="/education" element={<Education />} />
    <Route path="/automobile" element={<Automobile />} />
    <Route path="/retail" element={<Retail />} />
    <Route path="/defense" element={<Defense />} />
    <Route path="/maritime" element={<Maritime />} />
    <Route path="/btp" element={<BTP />} />
    <Route path="/secteur-banque-assurance" element={<SecteurBanqueAssurance />} />
  </>
);
