
import Content from "./pages/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './pages/Welcome';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/content" element={<Content />} />
        <Route path="*" element={<div>Error 404</div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;