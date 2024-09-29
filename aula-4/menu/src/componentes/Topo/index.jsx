'use client';
import { useState } from 'react';
import estilos from "./Topo.module.css"
import Menu from '@/componentes/Menu';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Topo() {
    
    const [menuAberto, setMenuAberto] = useState(false);

    function atualizarMenu() {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={estilos.topo}>
            <button className={estilos.botao} onClick={atualizarMenu}>{menuAberto ? <IoMdClose /> : <IoMdMenu />}</button>
            {menuAberto && (<Menu/>)}
        </header>
    )
}