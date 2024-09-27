import estilo from "./Card.module.css"

export default function Card() {
    return (
        <div className={estilo.card}>
          <p>Componentes</p>
          <p>Facilita em manter partes menores funcionando corretamente.</p>
          <p>Você pode reutilizá-lo, ou seja, menos código para se escrever.</p>
        </div>
    )
}