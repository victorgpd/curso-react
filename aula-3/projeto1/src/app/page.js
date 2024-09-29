import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.card_container}>
        <h1>Página Inicial</h1>
        <p>Essa é a página principal da aplicação React.</p>
        <p>Essa página é gerada automaticamente durante a criação da aplicação.</p>
        <Link href="/novapagina">Link para a nova página</Link>
      </div>
    </div>
  );
}
