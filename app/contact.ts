const whatsappPhone = "5522996199119";

export const contactEmail = "contato@brenoluiz.com.br";
export const location = "Itaperuna – RJ";
export const instagram = {
  handle: "@breno.computacao",
  url: "https://www.instagram.com/breno.computacao/",
};

function createWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const whatsappLinks = {
  navigation: createWhatsAppLink(
    "Olá, Breno Luiz! Conheci seu site e gostaria de conversar sobre um sistema para o meu negócio.",
  ),
  sales: createWhatsAppLink(
    "Olá, Breno Luiz! Quero conversar sobre como um sistema pode ajudar meu negócio a vender mais.",
  ),
  salesBottleneck: createWhatsAppLink(
    "Olá, Breno Luiz! Gostaria de conversar sobre algumas dificuldades na rotina da minha empresa e entender como um sistema pode ajudar.",
  ),
  avanceTelecom: createWhatsAppLink(
    "Olá, Breno Luiz! Conheci o projeto da Avance Telecom no seu site e quero conversar sobre como organizar meu processo comercial com um sistema sob medida.",
  ),
  fromArticle: (title: string) =>
    createWhatsAppLink(
      `Olá, Breno Luiz! Li o artigo "${title}" no seu site e gostaria de conversar sobre como isso se aplica ao meu negócio.`,
    ),
};
