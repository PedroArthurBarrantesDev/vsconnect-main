//estilizacao
import "./style.css";

//componentes
import CardServico from "../../components/CardServico";

//hooks
import { useEffect, useState } from "react";

//utils
import api from "../../utils/api";

function ListaServicos() {

    const [servicos, setServicos] = useState<any[]>([])

    // const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>(servicos);

    const [skillDigitado, setSkillDigitado] = useState<string>("");
    
    //funcao onde pega o campo que o usuario digitou
    function verificarCampoSkill(event: any){
        if (event.target.value === ""){
            listarServicos();
        }
        setSkillDigitado(event.target.value);
    }
    
    function buscarServicosPorSkill(event: any){
        //nao recarrega a pagina
        event.preventDefault();

        //filtrar servicos pela skill digitada no campo buscar
        const servicosFiltrados = servicos.filter((servicos: any) => servicos.techs.includes(skillDigitado.toLocaleUpperCase()));
    
        if (servicosFiltrados.length === 0) {
            alert("Nenhum servico com essa skill!");
        } else {
            //atribui o valor de servicos filtrados ao state
            setServicos(servicosFiltrados);
        }
    }

    function listarServicos(){
        api.get("servicos").then((response: any) => {
            // console.log(response);
            
            setServicos(response.data);
        }).catch((error: any) => {
            console.log("Erro ao realizar uma requisicao.", error);
            
        });
    }

    useEffect(() => {
        //executa uma acao apos o componente ser carregado
        listarServicos();
    }, []);

    return (
        <div>
            <main>
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServicosPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" 
                                    name="campo-busca" 
                                    id="busca" 
                                    placeholder="Buscar serviços por tecnologias..."
                                    autoComplete="off"
                                    onChange={verificarCampoSkill}/>
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    servicos.map((servicos: any, indice: number) => {
                                        return(
                                            <li key={indice}>
                                                <CardServico
                                                id={servicos.id}
                                                titulo={servicos.nome}
                                                descricao={servicos.descricao}
                                                proposta={servicos.valor}
                                                listaTechs={servicos.techs}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default ListaServicos;