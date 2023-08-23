//estilização
import "./style.css";

//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useEffect, useState } from "react";

//utils
import api from "../../utils/api";



function VisualizarServico() {

    const { idServico } = useParams();

    const [ nome, setNome ] = useState<string>("");
    const [ valor, setValor ] = useState<string>("");
    const [ descricao, setDescricao ] = useState<string>("");
    const [ listaTechs, setListaTechs ] = useState<string[]>([]);

    function buscarServicoPorID() {
        //estrutura basica para consumir API
        api.get("servicos/" + idServico).then((response: any) => {
            // console.log(response.data);
            
            //seta o valor referente ao ID do servico
            setNome(response.data.nome);
            setValor(response.data.valor);
            setDescricao(response.data.descricao);
            setListaTechs(response.data.techs);
        }).catch((error: any) => {
            console.log("Erro na aquisicao", error);
            
        });
    }

    useEffect(() => {
        buscarServicoPorID();
    }, []);

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>R${valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            listaTechs.map((tech: string, indice: number) => {
                                return(
                                    <span key={indice}>{tech}</span>
                                );
                            })
                        }
                        {/* <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span> */}
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;