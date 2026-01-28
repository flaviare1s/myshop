export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Mochila Premium para Laptop 15.6",
    price: 109.95,
    description:
      "Mochila de lona durável com compartimento acolchoado para laptops de até 15 polegadas. Design clássico escandinavo com alças ajustáveis e múltiplos bolsos organizadores.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Camiseta Premium Slim Fit Masculina",
    price: 22.3,
    description:
      "Camiseta premium de algodão com corte slim fit. Tecido macio e respirável com costuras reforçadas. Disponível em várias cores para uso diário.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Jaqueta de Algodão Masculina",
    price: 55.99,
    description:
      "Jaqueta de algodão leve e versátil, perfeita para atividades ao ar livre e uso casual. Design moderno com bolsos laterais e zíper frontal.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Camisa Casual Slim Fit",
    price: 15.99,
    description:
      "Camisa casual slim fit confortável e leve, ideal para o dia a dia. Tecido de fácil manutenção com acabamento de qualidade.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Pulseira Artesanal em Ouro e Prata",
    price: 695,
    description:
      "Pulseira artesanal em ouro e prata com intrincado motivo de dragão. Peça statement da coleção premium, feita à mão por artesãos especializados.",
    category: "jewelery",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Colar Delicado em Ouro Maciço",
    price: 168,
    description:
      "Pingente delicado em ouro maciço com micropavê. Design elegante e certificado, perfeito para uso diário ou ocasiões especiais.",
    category: "jewelery",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "Anel Solitário Banho Ouro Branco",
    price: 9.99,
    description:
      "Anel solitário clássico com corte princesa e banho de ouro branco. Ideal como anel de noivado ou compromisso.",
    category: "jewelery",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Brincos de Aço com Banho Ouro Rosé",
    price: 10.99,
    description:
      "Brincos túnel em aço inoxidável com banho de ouro rosé. Acabamento polido de alta qualidade com design moderno.",
    category: "jewelery",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "HD Externo Portátil 2TB USB 3.0",
    price: 64,
    description:
      "HD externo portátil de 2TB com USB 3.0 para transferências rápidas. Compatível com diversos sistemas operacionais, ideal para backups e armazenamento de mídia.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SSD Interno 1TB SATA III",
    price: 109,
    description:
      "SSD SATA de 1TB oferecendo inicialização rápida e tempos de carregamento ágeis. Equilíbrio perfeito entre performance e confiabilidade para PCs.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&h=500&fit=crop",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "SSD 256GB 3D NAND SATA III",
    price: 109,
    description:
      "SSD de 256GB com tecnologia 3D NAND para velocidades de transferência consistentes e maior responsividade do sistema.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&h=500&fit=crop",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "HD Gaming 4TB para Playstation",
    price: 114,
    description:
      "Drive portátil de 4TB otimizado para consoles de jogos. Alta capacidade com conveniência plug-and-play para expandir seu armazenamento de jogos.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&h=500&fit=crop",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: 'Monitor 21.5" Full HD IPS Ultra-Fino',
    price: 599,
    description:
      'Monitor IPS Full HD de 21.5" com moldura ultra-fina e ângulos de visão amplos. Ideal para uso doméstico e escritório com excelente reprodução de cores.',
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title: 'Monitor Gamer Curvo 49" 144Hz QLED',
    price: 999.99,
    description:
      'Monitor gamer curvo ultrawide de 49" com taxa de atualização de 144Hz e suporte HDR. Tecnologia QLED para jogos imersivos e multitarefas profissionais.',
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "Jaqueta Snowboard 3 em 1 Feminina",
    price: 56.99,
    description:
      "Jaqueta de snowboard 3 em 1 com forro destacável e capuz ajustável. Quente e resistente às intempéries, ideal para esportes de inverno.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=500&h=500&fit=crop",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title: "Jaqueta Moto Couro Sintético Feminina",
    price: 29.95,
    description:
      "Jaqueta moto em couro sintético com capuz removível e corte ajustado. Visual moderno com forro confortável e zíperes metálicos.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Corta-vento Listrado Feminino",
    price: 39.99,
    description:
      "Corta-vento leve com listras, capuz e cintura ajustável. Perfeito para viagens e uso casual, oferece proteção contra vento e chuva leve.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "Blusa Decote Canoa Feminina",
    price: 9.85,
    description:
      "Blusa macia com decote canoa em mistura de rayon stretch. Respirável e confortável para uso diário em diversas ocasiões.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=500&fit=crop",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Camiseta Dry-Fit Feminina",
    price: 7.95,
    description:
      "Camiseta de manga curta que absorve umidade, feita em poliéster leve. Ideal para treinos e uso casual, mantém você seca e confortável.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "Camiseta Algodão Gola V Feminina",
    price: 12.99,
    description:
      "Camiseta casual de algodão com gola V e toque macio. Tecido com stretch versátil para looks diários em todas as estações.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&h=500&fit=crop",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];
