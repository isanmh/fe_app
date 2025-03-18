import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
