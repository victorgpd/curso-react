import Logo from '/public/vercel.svg'
import Image from "next/image";
import estilo from "./Topo.module.css"

export default function Topo() {
  return (
    <div className={estilo.topo_container}>
      <Image className={estilo.img_logo} src={Logo} alt="Vercel Logo"/>
      <h1>Topo</h1>
    </div>
  );
}