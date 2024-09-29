'use client';
import { useState } from "react";
import styles from "./page.module.css";
import Card from "@/componentes/Card";
import Hamburguer from "../../public/hamburguer.png"

export default function Home() {
  const [product, setProduct] = useState("Mega Stacker Atômico 2.0")

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
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
            alterarProduct={alterarProduto}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
          <Card
            image={Hamburguer}
            produto={product}
            descricao={"O Mega Stacker 2.0 que você já conhece, agora com cheddar fatiado e bacon nas duas camadas, e molho Stacker."}
            preco={"49,99"}
          />
        </div>
      </section>
    </main>
  );
}
