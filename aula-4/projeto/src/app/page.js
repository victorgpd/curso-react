'use client';
import { useState } from 'react';
import estilos from "./page.module.css";

export default function Home() {

  const corFundoVermelha = estilos.bg_vermelho
  const corFundoAzul = estilos.bg_azul

  const [corAlterada, setCorAlterada] = useState(false);

  function alterarEstilo() {
    setCorAlterada(!corAlterada)
  }

  return (
    <main className={estilos.main}>
      <div className={estilos.container}>
        <h2>Alterando estilo do elemento</h2>
        <div className={corAlterada ? corFundoVermelha: corFundoAzul}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={alterarEstilo}>Alterar</button>
      </div>
    </main>
  );
}
