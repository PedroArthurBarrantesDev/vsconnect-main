import React from 'react';
import ReactDOM from 'react-dom/client';


//componentes
import Home from "./pages/Home/";
import ListaServicos from './pages/ListaServicos';
import ListaDevs from './pages/ListaDevs';
import Header from "../src/components/Header"
import Footer from './components/Footer';
import VisualizarPerfil from "./pages/PerfilUsuario";
import VisualizarServico from "./pages/VisualizarServico";
import CadastrarUsuario from "./pages/CadastroUsuario";

//Rotas

import { BrowserRouter, Routes, Route } from "react-router-dom"

//estilização global
import "./index.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="lista/servicos" element={<ListaServicos/>}/>
        <Route path="lista/devs" element={<ListaDevs/>}/>
        {/* Rota com o parametro indicando o identificador do Desenvolvedor */}
        <Route path="perfil/:idUsuario" element={<VisualizarPerfil />}></Route>
        <Route path="visualizar/servico/:idServico" element={<VisualizarServico />}></Route>
        <Route path="cadastro/usuario" element={<CadastrarUsuario />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
