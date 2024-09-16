import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ListMeasures from "./pages/listMeasures";
import CaptureMeasure from "./pages/captureMeasure";

function App() {
  return (
    <div className="bg-blue-900 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/measures" element={<ListMeasures />} />
          <Route path="/:selectedType/:customerCode" element={<CaptureMeasure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
