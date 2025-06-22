
import { Route } from "react-router-dom";
import IASymbolique from "@/pages/types-ia/IASymbolique";
import IAConnexionniste from "@/pages/types-ia/IAConnexionniste";

const TypesIARoutes = () => {
  return (
    <>
      <Route path="/ia-symbolique" element={<IASymbolique />} />
      <Route path="/ia-connexionniste" element={<IAConnexionniste />} />
    </>
  );
};

export default TypesIARoutes;
