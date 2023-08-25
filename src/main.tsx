import React from 'react';
import ReactDOM from 'react-dom/client';


//componentes
import Home from "./pages/Home/";
import ListaServicos from './pages/ListaServicos';
import ListaDevs from './pages/ListaDevs';
import Header from "../src/components/Header"
import Footer from './components/Footer';
import Login from './pages/Login';
import CadastrarServico from './pages/CadastroServico';
import VisualizarPerfil from "./pages/PerfilUsuario";
import VisualizarServico from "./pages/VisualizarServico";
import CadastrarUsuario from "./pages/CadastroUsuario";

//Rotas

import { BrowserRouter, Routes, Route } from "react-router-dom"

//estilização global
import "./index.css";

//localStorage
import secureLocalStorage from "react-secure-storage";


function logado() {
  if (secureLocalStorage.getItem("user")) {
    const objetoUsuario: any = secureLocalStorage.getItem("user");

    const nome: string = objetoUsuario.user.nome.trim().split(" ")[0];
    return {
      logado: true,
      nomeUsuario: nome
    }
  } else {
    return {
      logado: false,
      nomeUsuario: null
    }
  }
  
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header usuario={logado()}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="lista/servicos" element={<ListaServicos/>}/>
        <Route path="lista/devs" element={<ListaDevs/>}/>
        {/* Rota com o parametro indicando o identificador do Desenvolvedor */}
        <Route path="perfil/:idUsuario" element={<VisualizarPerfil />}></Route>
        <Route path="visualizar/servico/:idServico" element={<VisualizarServico />}></Route>
        <Route path="cadastro/usuario" element={<CadastrarUsuario />}></Route>
        <Route path="cadastro/servico" element={<CadastrarServico />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
