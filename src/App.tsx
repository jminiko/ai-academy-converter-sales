
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {AllRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
