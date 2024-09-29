import estilo from "./novapagina.module.css"
import Link from "next/link";

export default function NovaPagina() {
    return (
      <main className={estilo.main_container}>
        <div className={estilo.card_container}>
          <h1>Nova Página</h1>
          <p>Essa é a nova página da aplicação.</p>
          <p>Essa é a nossa primeira página criada no React.</p>
          <Link href="/">Link para a página inicial</Link>
        </div>
      </main>
    );
}