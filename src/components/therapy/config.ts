export interface TherapyService {
  title: string;
  description: string;
  icon: "book" | "puzzle" | "heart" | "family";
}
export interface TherapyReview {
  name: string;
  context: string;
  text: string;
}
export interface TherapyConfig {
  name: string;
  profession: string;
  city: string;
  whatsapp: string;
  instagram: string;
  portrait: string;
  services: TherapyService[];
  reviews: TherapyReview[];
}
export const therapy: TherapyConfig = {
  name: "Giovanna Freire",
  profession: "Pedagoga e Psicopedagoga",
  city: "Campo Grande, MS",
  whatsapp: "5567991042727",
  instagram: "https://www.instagram.com/psico.giovannafreire/",
  portrait: "/therapy/giovanna-freire.png",
  services: [
    {
      title: "Leitura e escrita",
      description:
        "Um olhar atento para a alfabetização, a compreensão de textos e os desafios que aparecem na hora de ler e escrever.",
      icon: "book",
    },
    {
      title: "Aprendizagem e atenção",
      description:
        "Estratégias individualizadas para trabalhar raciocínio, organização e atenção, respeitando o ritmo de cada criança.",
      icon: "puzzle",
    },
    {
      title: "Relação com os estudos",
      description:
        "Acolhimento das inseguranças que acompanham as tarefas e apoio para construir uma relação mais tranquila com o aprender.",
      icon: "heart",
    },
    {
      title: "Orientação à família",
      description:
        "Escuta e orientações práticas para aproximar família, escola e criança ao longo do processo de aprendizagem.",
      icon: "family",
    },
  ],
  reviews: [],
};
export function therapyWhatsApp(
  message = "Olá, Giovanna! Gostaria de saber mais sobre o atendimento psicopedagógico.",
): string {
  return `https://wa.me/${therapy.whatsapp}?text=${encodeURIComponent(message)}`;
}
export const therapySteps = [
  {
    number: "01",
    title: "Escutar e compreender",
    text: "Começamos com uma conversa sobre a rotina, a história e as necessidades da criança. A avaliação ajuda a compreender seu jeito de aprender.",
  },
  {
    number: "02",
    title: "Construir um caminho",
    text: "A partir dessa escuta, elaboramos um plano de intervenção personalizado, com atividades e estratégias adequadas às necessidades identificadas.",
  },
  {
    number: "03",
    title: "Caminhar em parceria",
    text: "A família recebe uma devolutiva clara e orientações para o dia a dia. O acompanhamento permite rever o caminho conforme o processo avança.",
  },
];
export const therapyFaqs = [
  {
    question: "Quando procurar uma psicopedagoga?",
    answer:
      "Quando surgem dúvidas ou dificuldades persistentes no processo de aprendizagem, uma conversa inicial pode ajudar a entender se o acompanhamento psicopedagógico faz sentido para a criança. Cada situação é acolhida individualmente.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "Pelo WhatsApp, você pode contar brevemente o que está buscando e tirar dúvidas sobre o atendimento. Depois, combinamos os próximos passos de acordo com a necessidade da família.",
  },
  {
    question: "Onde são realizados os atendimentos?",
    answer:
      "O atendimento é realizado em Campo Grande, MS. Converse pelo WhatsApp para confirmar os formatos disponíveis, a possibilidade de atendimento domiciliar e os horários.",
  },
  {
    question: "A família participa do acompanhamento?",
    answer:
      "Sim. A escuta da família e o diálogo com a escola, quando pertinente e autorizado, ajudam a compreender a rotina e a construir estratégias que façam sentido para a criança.",
  },
];
