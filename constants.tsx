
import { MenuCategory, Review } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "ENTRADAS E PETISCOS",
    icon: "🐟",
    items: [
      { name: "Bolinho de bacalhau", price: "R$ 36,00" },
      { name: "Bolinho de camarão", price: "R$ 49,90" },
      { name: "Casquinha de siri", price: "R$ 13,00" },
      { name: "Casquinha de camarão", price: "R$ 10,00" },
    ]
  },
  {
    title: "ALMOÇO (Pratos Individuais / Executivos)",
    icon: "🍽️",
    items: [
      { name: "Calabresa", price: "R$ 23,00" },
      { name: "Frango Grelhado", price: "R$ 29,00" },
      { name: "Frango Frito", price: "R$ 26,00" },
      { name: "Bife Ancho", price: "R$ 52,00" },
      { name: "Merluza / Cação", price: "R$ 34,00" },
      { name: "Filé de Pescada", price: "R$ 41,00" },
      { name: "Costelinha de Tambaqui", price: "R$ 48,00" },
      { name: "Isca de Peixe (Tilápia / St. Peter / Aruanã)", price: "R$ 41,00" },
      { name: "Isca de Pintado / Badejo", price: "R$ 43,00" },
      { name: "Camarão Vermelho Inteiro", price: "R$ 43,00" },
      { name: "Camarão Limpo", price: "R$ 53,00" },
      { name: "Moqueca de Cação / Merluza", price: "R$ 46,00" },
      { name: "Moqueca de Pintado / Aruanã", price: "R$ 51,00" },
      { name: "Bobó de Camarão", price: "R$ 59,00" },
      { name: "Moqueca de Camarão Limpo", price: "R$ 58,00" },
      { name: "Anéis de Lula", price: "R$ 43,00" },
      { name: "Parmegiana (Tilápia / Aruanã)", price: "R$ 56,00" },
      { name: "Parmegiana (Pescada / Badejo)", price: "R$ 56,00" },
      { name: "Parmegiana de Camarão Limpo", price: "R$ 60,00" },
      { name: "Tilápia ao Molho de Camarão", price: "R$ 60,00" },
      { name: "Pescada ao Molho de Camarão", price: "R$ 60,00" },
    ]
  },
  {
    title: "GRELHADOS",
    icon: "🔥",
    items: [
      { name: "Salmão", price: "R$ 59,00" },
      { name: "Tilápia St. Peter", price: "R$ 48,90" },
      { name: "Aruanã", price: "R$ 48,90" },
      { name: "Badejo", price: "R$ 48,90" },
      { name: "Camarão Inteiro Grelhado", price: "R$ 49,90" },
    ]
  },
  {
    title: "PRATOS PARA COMPARTILHAR",
    icon: "🥘",
    description: "Moquecas, parmegianas, peixes ao molho e peixes inteiros",
    items: [
      { name: "Moqueca Mista (2-3 pessoas)", price: "Consulte" },
      { name: "Peixe Inteiro Assado", price: "Consulte" },
      { name: "Parmegiana Gigante", price: "Consulte" },
    ]
  },
  {
    title: "PORÇÕES",
    icon: "🍟",
    description: "Os preços variam por tamanho",
    items: [
      { name: "Batata Frita", price: "Varia" },
      { name: "Mandioca Frita", price: "Varia" },
      { name: "Polenta Frita", price: "Varia" },
      { name: "Isca de Peixe (Porção)", price: "Varia" },
    ]
  },
  {
    title: "BEBIDAS",
    icon: "🥤",
    items: [
      { name: "Refrigerante Lata", price: "R$ 6,00" },
      { name: "Suco Natural", price: "R$ 10,00" },
      { name: "Cerveja 600ml", price: "R$ 14,00" },
      { name: "Água Mineral", price: "R$ 4,50" },
    ]
  },
  {
    title: "GUARNIÇÕES",
    icon: "🍚",
    items: [
      { name: "Arroz Branco", price: "R$ 12,00" },
      { name: "Pirão de Peixe", price: "R$ 15,00" },
      { name: "Farofa da Casa", price: "R$ 8,00" },
      { name: "Salada Simples", price: "R$ 10,00" },
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    text: "Comida muito boa, poucos restaurantes bons na região.",
    author: "Cliente Satisfeito"
  },
  {
    text: "Ambiente descontraído, atendimento simpático e ótimas opções de frutos do mar.",
    author: "Fã de Frutos do Mar"
  },
  {
    text: "Bolinho de bacalhau gostoso, camarão muito bom e tilápia excelente.",
    author: "Crítico Local"
  }
];
