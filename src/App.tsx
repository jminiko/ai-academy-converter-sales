
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {AllRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
