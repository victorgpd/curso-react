'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Card from "@/componentes/Card";
import api from "@/services/api";
import Hamburguer from "../../public/hamburguer.png"

export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [product, setProduct] = useState("Mega Stacker Atômico 2.0")

  async function getProdutos() {
    const produtosFromApi = await api.get("/produtos")
    setProdutos(produtosFromApi.data)
  }
  
  useEffect(() => {
    getProdutos()
  }, [])

  function alterarProduto() {
    if (product === "Mega Stacker Atômico 2.0") {
      setProduct("Batata frita M")
    } else {
      setProduct("Mega Stacker Atômico 2.0")
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.cardapio}>
        <div className={styles.container}>
          {produtos.map( (produto) => (
            <Card
              id={produto.id}
              image={Hamburguer}
              produto={produto.nome}
              descricao={produto.descricao}
              preco={produto.valor}
              alterarProduct={alterarProduto}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
