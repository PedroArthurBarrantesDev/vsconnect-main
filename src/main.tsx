import React from 'react';
import ReactDOM from 'react-dom/client';


//componentes
import Home from "./pages/Home/";
import ListaServicos from './pages/ListaServicos';
import ListaDevs from './pages/ListaDevs';
import Header from "../src/components/Header"

//Rotas

import { BrowserRouter, Routes, Route } from "react-router-dom"

//estilização global
import "./index.css";
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="lista/servicos" element={<ListaServicos/>}/>
        <Route path='lista/devs' element={<ListaDevs/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
