export interface ContactConfig {
  email: string;
  linkedin: string;
  whatsapp: string;
  whatsappMessage: string;
}
export const contact: ContactConfig = {
  email: "emanuelinacio052@gmail.com",
  linkedin: "https://www.linkedin.com/in/emanuel-inacio-062403269/",
  whatsapp: "5567991207114",
  whatsappMessage:
    "Olá, Emanuel! Gostaria de conversar sobre um projeto ou uma oportunidade profissional.",
};
export function whatsappUrl(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
export interface Feature {
  title: string;
  description: string;
  icon: "code" | "zap" | "phone" | "layers" | "target" | "shield";
}
export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
  number: string;
}
export const projects: Project[] = [
  {
    title: "Giovanna Freire",
    category: "DESIGN + DESENVOLVIMENTO",
    description:
      "Landing page de psicopedagogia com identidade acolhedora, tipografia própria e uma experiência pensada para famílias.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "/projetos/giovanna-freire",
    image: "/projects/giovanna.svg",
    number: "01",
  },
  {
    title: "Krono",
    category: "PRODUTO DIGITAL",
    description:
      "Orçamentos e listas de materiais, no tempo certo. Uma landing page para apresentar o aplicativo e suas possibilidades.",
    stack: ["React", "TypeScript", "Vite"],
    href: "https://github.com/EmanuelIna/Montadorimetro",
    image: "/projects/krono.svg",
    number: "02",
  },
  {
    title: "Bio Hub",
    category: "PRESENÇA DIGITAL",
    description:
      "Uma identidade, todos os caminhos. Um hub pessoal que reúne os principais links e canais de contato.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/EmanuelIna/emanuelina.github.io",
    image: "/projects/bio-hub.svg",
    number: "03",
  },
  {
    title: "Commerce API",
    category: "BACK-END",
    description:
      "API de e-commerce com autenticação JWT, catálogo de produtos e carrinho. Estrutura em camadas e contratos documentados.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    href: "https://github.com/EmanuelIna/Back-Progweb",
    image: "/projects/commerce.svg",
    number: "04",
  },
];
export const services: Feature[] = [
  {
    title: "Interfaces com propósito.",
    description:
      "Experiências digitais com hierarquia clara, navegação acessível e atenção às necessidades de quem usa.",
    icon: "code",
  },
  {
    title: "Velocidade por princípio.",
    description:
      "Estrutura enxuta, componentes reutilizáveis e atenção ao carregamento em diferentes dispositivos.",
    icon: "zap",
  },
  {
    title: "Da interface ao back-end.",
    description:
      "Projetos que conectam apresentação, dados e regras de negócio com uma base organizada para evoluir.",
    icon: "layers",
  },
];
