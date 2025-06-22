
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FormationsRoutes from "./routes/FormationsRoutes";
import FormationsAvanceesRoutes from "./routes/FormationsAvanceesRoutes";
import GuidesRoutes from "./routes/GuidesRoutes";
import GuidesAvancesRoutes from "./routes/GuidesAvancesRoutes";
import MethodesRoutes from "./routes/MethodesRoutes";
import ReglementationRoutes from "./routes/ReglementationRoutes";
import OutilsRoutes from "./routes/OutilsRoutes";
import ConseilsRoutes from "./routes/ConseilsRoutes";
import IndustriesRoutes from "./routes/IndustriesRoutes";
import SecteursRoutes from "./routes/SecteursRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {FormationsRoutes()}
        {FormationsAvanceesRoutes()}
        {GuidesRoutes()}
        {GuidesAvancesRoutes()}
        {MethodesRoutes()}
        {ReglementationRoutes()}
        {OutilsRoutes()}
        {ConseilsRoutes()}
        {IndustriesRoutes()}
        {SecteursRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
