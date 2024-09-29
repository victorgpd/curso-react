import Link from "next/link"
import estilo from "./Topo.module.css"

export default function Topo() {
    return (
        <header className={estilo.topo}>
            <h1>Navegação React</h1>
            <nav>
                <Link className={estilo.linkfront} href="/pagefront">Front-End</Link>
                <Link className={estilo.linkback} href="/pageback">Back-End</Link>
                <Link className={estilo.linkmobile} href="/pagemobile">Mobile</Link>
            </nav>
        </header>
    )
}