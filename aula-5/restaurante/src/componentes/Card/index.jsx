import Image from "next/image"
import estilo from "./Cards.module.css"

export default function Card(props) {
    return (
        <div className={estilo.card}>
            <div className={estilo.image}>
                <Image src={props.image} alt={props.produto}/>
            </div>
            <div className={estilo.details}>
                <h3>{props.produto}</h3>
                <p>{props.descricao}</p>
                <h3>R$ {props.preco}</h3>
                <button>Adicionar</button>
            </div>
        </div>
    )
}