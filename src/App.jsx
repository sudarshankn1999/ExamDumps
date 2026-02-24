import { BrowserRouter, Routes, Route } from "react-router-dom";
import PracticePage from "./pages/PracticePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter basename="/ExamDumps">
      <Routes>
        <Route path="/" element={<PracticePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;