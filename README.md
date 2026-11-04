# Emanuel Inácio — Portfólio

Portfólio profissional em Next.js App Router, React, TypeScript estrito, Tailwind CSS, Lucide e Radix. A identidade escura inspirada no vídeo Unkey foi mantida. Não há preços, tabela de planos ou posicionamento por ticket: a apresentação contempla projetos, competências, colaboração e oportunidades profissionais.

## Executar

```powershell
npm.cmd ci
npm.cmd run dev
```

Acesse http://127.0.0.1:3000.

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

Webpack é usado por compatibilidade com o ambiente Windows. As páginas são pré-renderizadas. Os contatos abrem o canal escolhido, sem formulários ou coleta de dados.

## Rotas e identidades

| Rota                        | Conteúdo                                               | Identidade                     |
| --------------------------- | ------------------------------------------------------ | ------------------------------ |
| `/`                         | Projetos, tecnologias, processo e contato profissional | Portfólio escuro               |
| `/sites`                    | Competências de desenvolvimento, sem preços            | Portfólio escuro               |
| `/projetos/giovanna-freire` | Landing de psicopedagogia                              | Identidade própria da Giovanna |
| `/landing-page`             | Redirecionamento permanente para o projeto Giovanna    | —                              |

`src/app/(portfolio)/layout.tsx` contém o menu, rodapé e contato de Emanuel. A landing da Giovanna está fora desse grupo e tem seus próprios componentes, estilos e contatos. Não há iframe ou herança do menu do portfólio.

## Personalização

- `src/config/site.ts`: contatos profissionais de Emanuel, competências e projetos.
- `src/app/globals.css`: identidade atual do portfólio e tokens `primary`, `secondary`, `accent`.
- `src/components/therapy/config.ts`: conteúdo e contatos exclusivos da Giovanna.
- `src/components/therapy/therapy.module.css`: paleta creme, areia, grafite, verde, rosa e CTAs verde-água. Fraunces e Nunito locais.
- `public/therapy`: foto original preservada do Landing-Terapia, fontes WOFF2 e licenças.
- `public/projects`: prévias conceituais próprias. Imagens usam `next/image`.

E-mail de Emanuel: `emanuelinacio052@gmail.com`. LinkedIn: `https://www.linkedin.com/in/emanuel-inacio-062403269/`. WhatsApp: `5567991207114`.

WhatsApp da Giovanna: `5567991042727`, preservado e normalizado a partir do repositório. Instagram: `https://www.instagram.com/psico.giovannafreire/`, informado pelo responsável. O documento de identidade descreve a logo, mas não traz o arquivo gráfico; foi usada uma assinatura tipográfica com ícone de apoio.

## Landing-Terapia independente

O checkout de `EmanuelIna/Landing-Terapia` fica em `.projects/Landing-Terapia`, ignorado no portfólio. Seus arquivos são versionados no próprio repositório. A implementação foi migrada para Next.js/TypeScript, mantendo foto e contato, para atender à stack do workspace.

```powershell
node scripts/sync-therapy.mjs
```

Esse comando sincroniza os componentes, fontes e imagem para o checkout já existente e cria a estrutura independente. O site da Giovanna não depende dos estilos do portfólio. A versão integrada tem `noindex` para evitar duplicação nos buscadores. O `vercel.json` do Landing-Terapia define o preset Next.js e a saída `.next` para a migração de Vite. A atualização remota está na branch `secondary`, com pull request para `main`.

## Fontes do mapeamento técnico

- [Krono / Montadorimetro](https://github.com/EmanuelIna/Montadorimetro): React, TypeScript e Vite na landing.
- [Bio Hub](https://github.com/EmanuelIna/emanuelina.github.io): HTML, CSS e JavaScript.
- [Commerce API](https://github.com/EmanuelIna/Back-Progweb): Java, Spring Boot, PostgreSQL e JWT.
- [CURSO-NODEJS](https://github.com/EmanuelIna/CURSO-NODEJS): Node.js, Express, EJS e Mongoose.
- [Landing-Terapia](https://github.com/EmanuelIna/Landing-Terapia): projeto remodelado e integrado ao portfólio.

AWS foi citado no pedido inicial, mas não foi possível verificar uma implementação própria nos repositórios consultados. Por isso, não é apresentado como competência comprovada. Repositórios de terceiros não são apresentados como autoria própria.

## Qualidade

Foco visível, link de salto, navegação móvel acessível, abas com teclado, FAQ Radix, respeito a movimento reduzido, imagens dimensionadas e recursos locais. Não há notas ou depoimentos inventados; avaliações reais podem ser adicionadas com autorização. Pontuações de performance e resultados de conversão não são alegados sem medição.
