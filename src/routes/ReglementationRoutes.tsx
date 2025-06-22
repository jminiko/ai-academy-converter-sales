
import { Route } from "react-router-dom";

// Composants de pages réglementation - Architecture prête pour expansion
import RGPDIA from "@/pages/reglementation/RGPDIA";
import EthiqueIA from "@/pages/reglementation/EthiqueIA";
import ConformiteIA from "@/pages/reglementation/ConformiteIA";
import AuditConformite from "@/pages/reglementation/AuditConformite";

const ReglementationRoutes = () => {
  return (
    <>
      {/* Routes pour réglementation - Pages conformes aux standards européens */}
      <Route path="/rgpd-ia" element={<RGPDIA />} />
      <Route path="/ethique-ia" element={<EthiqueIA />} />
      <Route path="/conformite-ia" element={<ConformiteIA />} />
      <Route path="/audit-conformite" element={<AuditConformite />} />
    </>
  );
};

export default ReglementationRoutes;
