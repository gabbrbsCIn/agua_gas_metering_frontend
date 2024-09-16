import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ListMeasures from "./pages/listMeasures";

function App() {
  return (
    <div className="bg-blue-900 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/measures" element={<ListMeasures />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
