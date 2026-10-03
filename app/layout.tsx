import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breno Luiz | Sistemas que ajudam seu negócio a vender",
  description: "Breno Luiz Silva do Carmo desenvolve software comercial, CRMs e automações para reduzir oportunidades perdidas, apoiar vendas e gerar retorno.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
