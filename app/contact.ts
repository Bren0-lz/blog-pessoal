const whatsappPhone = "5522996199119";

function createWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const whatsappLinks = {
  navigation: createWhatsAppLink(
    "Olá, Breno! Conheci seu site e gostaria de conversar sobre um sistema para o meu negócio.",
  ),
  sales: createWhatsAppLink(
    "Olá, Breno! Quero conversar sobre como um sistema pode ajudar meu negócio a vender mais.",
  ),
  salesBottleneck: createWhatsAppLink(
    "Olá, Breno! Quero te contar onde meu processo comercial está travando e entender como um sistema pode ajudar.",
  ),
  fromArticle: (title: string) =>
    createWhatsAppLink(
      `Olá, Breno! Li o material "${title}" no seu site e quero conversar sobre como um sistema pode ajudar minha operação comercial.`,
    ),
};
