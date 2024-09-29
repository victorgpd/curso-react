import Image from "next/image"
import Link from "next/link"
import estilo from "./Topo.module.css"
import Logo from "../../../public/logo.png"

export default function Topo(props) {
    return (
        <header className={estilo.topo}>
            <Image src={Logo} alt="Logo"></Image>
            <nav>
                {props.children}
                {/*<Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Elements</Link>
                <Link href="#">Gallery</Link>*/}
            </nav>
        </header>
    )
}