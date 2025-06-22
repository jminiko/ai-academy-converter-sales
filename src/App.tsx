
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FormationsRoutes from "./routes/FormationsRoutes";
import GuidesRoutes from "./routes/GuidesRoutes";
import MethodesRoutes from "./routes/MethodesRoutes";
import ReglementationRoutes from "./routes/ReglementationRoutes";
import OutilsRoutes from "./routes/OutilsRoutes";
import ConseilsRoutes from "./routes/ConseilsRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {FormationsRoutes()}
        {GuidesRoutes()}
        {MethodesRoutes()}
        {ReglementationRoutes()}
        {OutilsRoutes()}
        {ConseilsRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
