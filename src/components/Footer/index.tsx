import "./style.css"

import imgLogo from "../../assets/images/logo.svg";
import imgDev from "../../assets/images/dev.png";
import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";

import {Link} from "react-router-dom"



function Footer() {
    return (
        <footer>
            <div className="container rodape">
                <div className="span_dicas">
                    <img src={imgDev} alt="" />
                    <div className="span_dicas_texto">
                        <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                            recomendações para saber mais.</p>
                        <a className="botao botao_dicas" href="#">mais dicas</a>
                    </div>
                </div>
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li><Link to={"/login"}>Login</Link></li>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"lista/servicos"}>Listar Serviços</Link></li>
                            <li><Link to={"lista/devs"}>Listar Desenvolvedores</Link></li>
                            <li><Link to={"#"}>Cadastrar Cliente</Link></li>
                            <li><Link to={"cadastro/usuario"}>Cadastrar Desenvolvedor</Link></li>
                            <li><Link to={"cadastro/servico"}>Cadastrar Serviço</Link></li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>

                            <Link to={"https://pt-br.facebook.com/"}><img src={iconFace} alt="" /></Link>
                            <Link to={"https://www.instagram.com/"}><img src={iconInsta} alt="" /></Link>
                            <Link to={"https://br.linkedin.com/"}><img src={iconLinkedin} alt="" /></Link>

                        </div>
                        <a href="mailto:">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    )
}

export default Footer