import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/login";
import Cadastro from "./pages/Cadastro/cadastro";
import Favoritos from "./pages/Favoritos/favoritos";


function App(){
  return (
  <BrowserRouter>

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>

  </BrowserRouter>
);
}
export default App;