import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brenoluiz.com.br"),
  title: "Breno Luiz · CRM e sistemas sob medida em Itaperuna – RJ",
  description: "CRM, integrações e automações para organizar o comercial de pequenas empresas. Conheça o projeto Avance Telecom e converse diretamente com Breno Luiz sobre seu negócio.",
  openGraph: {
    title: "Breno Luiz · CRM e sistemas sob medida",
    description: "Sistemas feitos por quem entende de vendas: prospecção, funil, metas e pós-venda.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Breno Luiz · Sistemas feitos por quem entende de vendas" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
