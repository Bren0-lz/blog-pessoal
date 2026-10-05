import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breno Luiz | Sistemas que ajudam seu negócio a vender",
  description: "Conheça o trabalho de Breno Luiz Silva do Carmo: CRMs sob medida, acompanhamento de propostas, integrações e automações para facilitar a rotina da sua empresa.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
