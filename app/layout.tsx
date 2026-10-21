import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breno Luiz · CRM e sistemas sob medida em Itaperuna – RJ",
  description: "Breno Luiz Silva do Carmo aprendeu vendas desenvolvendo do zero o sistema comercial de uma empresa. Hoje cria sistemas de prospecção, funil, metas e pós-venda para empresas de Itaperuna – RJ e região.",
  openGraph: {
    title: "Breno Luiz · CRM e sistemas sob medida",
    description: "Sistemas feitos por quem entende de vendas: prospecção, funil, metas e pós-venda.",
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
