import "./globals.css";
import Topo from "@/componentes/Topo";

export const metadata = {
  title: "Home",
  description: "Olá, me chamo Victor Guilherme, muito prazer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
      </body>
    </html>
  );
}
