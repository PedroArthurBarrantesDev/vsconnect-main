//estilização
import "./style.css";

//hooks
import { useState, useEffect } from "react";

//axios
import api from "../../utils/api";

//rotas
import { useNavigate } from "react-router-dom";

//localStorage
import secureLocalStorage from "react-secure-storage";

function Login() {

    //variavel que utiliza metodo para navegar entre componentes
    const navigate = useNavigate();

    const [ email, setEmail ] = useState<string>("");
    const [ senha, setSenha ] = useState<string>("");

    function realizarAutenticacao(event: any) {
        event.preventDefault();
        
        const usuario = {
            email: email,
            password: senha
        };

        api.post("login", usuario).then((response: any) => {
            secureLocalStorage.setItem("user", response.data);
            //redirecionar ao componente perfil
            navigate("/perfil/" + response.data.user.id);
            //recarrega a tela
            navigate(0);
        }).catch((error: any) => {
            alert("Erro ao tentar se logar!");
        });

    }

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form className="login_formulario" method="POST" onSubmit={realizarAutenticacao}>
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite aqui seu e-mail:"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;