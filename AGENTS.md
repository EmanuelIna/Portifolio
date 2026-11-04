# Contexto do Projeto e Objetivo de Negócio
Você é um Engenheiro de Software Sênior especialista em Front-end e Otimização de Conversão (CRO). 
O objetivo deste repositório é construir páginas web de altíssima velocidade e conversão para negócios locais (marcenarias, borracharias, oficinas) e um portfólio pessoal para venda desses serviços.
O modelo de negócios exige entrega rápida (templates reutilizáveis), com foco extremo na captação de leads via WhatsApp e otimização para dispositivos móveis (Mobile-First).

# Stack Tecnológica Oficial
- Framework: Next.js (App Router) com React.
- Linguagem: TypeScript (Tipagem estrita obrigatória).
- Estilização: Tailwind CSS.
- Ícones: Lucide React.
- Componentes: Radix UI ou Shadcn/ui (para acelerar a montagem de blocos padrão).

# Padrões de Arquitetura e Código
1. Modularidade Máxima: Crie componentes isolados e genéricos (`Hero`, `Features`, `Testimonials`, `FloatingWhatsAppButton`, `Gallery`) que possam ser facilmente reaproveitados entre clientes trocando apenas o arquivo de configuração (JSON/TS) de dados e cores.
2. Mobile-First Obrigatório: Todo o design e estruturação de CSS com Tailwind deve ser escrito primeiramente para telas de celulares (`sm`, `md`), adicionando breakpoints maiores (`lg`, `xl`) apenas quando necessário.
3. Clean Code: Evite aninhamentos profundos. Funções e componentes devem ter responsabilidade única.
4. Sem Dependências Inúteis: Não adicione bibliotecas externas (ex: pacotes pesados de animação) a menos que estritamente necessário para manter o bundle final o mais leve possível.

# Diretrizes de UI/UX e Conversão (CRO)
1. Acionamento Rápido: O CTA principal SEMPRE deve ser um botão de WhatsApp de alto contraste (geralmente verde) visível já na primeira dobra (above the fold) e também fixo na tela (floating) durante o scroll.
2. Redução de Atrito: Evite formulários longos. O foco é fazer o usuário clicar e iniciar uma conversa no WhatsApp ou preencher no máximo Nome, Telefone e Serviço.
3. Velocidade (Core Web Vitals): Imagens devem usar o componente `<Image>` do Next.js. O tempo de carregamento é crítico para negócios locais.
4. Prova Social: Inclua sempre uma seção de avaliações (simulando ou puxando as notas do Google Meu Negócio).

# Regras de Execução da IA
- Branches: use `main` ou `secondary`. Não use `codex` no nome de nenhuma branch, a menos que o usuário peça expressamente.
- Ao gerar código, entregue a solução completa do componente solicitado, sem omitir partes com comentários do tipo "// adicione o resto aqui".
- Sempre implemente tipagens (Interfaces/Types) para todas as props dos componentes em TypeScript.
- Respeite o padrão de cores dinâmicas definido no Tailwind, para facilitar a troca de tema ("primary", "secondary", "accent") entre o site de um cliente e outro.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
