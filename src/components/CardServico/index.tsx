//estilizacao
import "./style.css"

//rotas
import { Link } from "react-router-dom";

function CardServico(props: any) {
    return (
        <div className="servico">
            <div className="topo_servico">
                <Link to={"/visualizar/servico/" + props.id}><h3>{props.titulo}</h3></Link>
                <span>R$ {props.proposta}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.listaTechs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    })
                }
                {/* <span>HTML</span>
                <span>CSS</span>
                <span>React</span> */}
            </div>
        </div>
    )
}

export default CardServico;