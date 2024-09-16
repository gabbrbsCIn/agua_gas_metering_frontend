import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ListMeasures from "./pages/listMeasures";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/measures" element={<ListMeasures/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
