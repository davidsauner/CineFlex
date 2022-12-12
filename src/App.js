import { GlobalStyle } from "./data/GlobalStyle";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "./components/Section/Section";
import Seats from "./components/Seats/ Seats";
import Sucess from "./components/Sucess/Sucess";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/filmes/:idfilme" element={<Section />} />
          <Route path="/sessao/:idsessao" element={<Seats />} />
          <Route path="/sucesso" element={<Sucess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
