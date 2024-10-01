'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Card from "@/componentes/Card";
import api from "@/services/api";
import Hamburguer from "../../public/hamburguer.png"

export default function Home() {
  const [produtos, setProdutos] = useState([])

  async function getProdutos() {
    const produtosFromApi = await api.get("/produtos")
    setProdutos(produtosFromApi.data)
  }
  
  useEffect(() => {
    getProdutos()
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.cardapio}>
        <div className={styles.container}>
          {produtos.map( (produto) => (
            <Card
              key={produto.id}
              image={Hamburguer}
              produto={produto.nome}
              descricao={produto.descricao}
              preco={produto.valor}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
