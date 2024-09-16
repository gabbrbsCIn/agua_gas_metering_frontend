import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CaptureMeasure from "./pages/captureMeasure";
import EditMeasure from "./components/editMeasure";
import MeasureHistory from "./pages/measureHistory";

function App() {
  return (
    <div className="bg-blue-900 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/confirm" element={<EditMeasure />} />
          <Route path="/:selectedType/:customerCode" element={<CaptureMeasure />} />
          <Route path="/measures/:customerCode" element={<MeasureHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
