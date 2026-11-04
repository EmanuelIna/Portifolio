import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const root = process.cwd();
const target = resolve(root, ".projects", "Landing-Terapia");
const child = relative(root, target);
if (child.startsWith(`..${sep}`) || child === "..")
  throw new Error("O destino deve estar dentro do workspace.");
if (!existsSync(join(target, ".git")))
  throw new Error(
    "Clone Landing-Terapia em .projects/Landing-Terapia antes de sincronizar.",
  );
const packageFile = join(target, "package.json");
if (JSON.parse(readFileSync(packageFile, "utf8")).name !== "landing-terapia")
  throw new Error("Repositório de destino inesperado.");
mkdirSync(join(target, "src", "components"), { recursive: true });
mkdirSync(join(target, "src", "app"), { recursive: true });
mkdirSync(join(target, "public"), { recursive: true });
cpSync(
  join(root, "src", "components", "therapy"),
  join(target, "src", "components", "therapy"),
  { recursive: true },
);
cpSync(join(root, "public", "therapy"), join(target, "public", "therapy"), {
  recursive: true,
});
for (const file of ["tsconfig.json", "postcss.config.mjs", "next-env.d.ts"])
  cpSync(join(root, file), join(target, file));
const sourcePackage = JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
);
writeFileSync(
  packageFile,
  JSON.stringify(
    { ...sourcePackage, name: "landing-terapia", version: "1.0.0" },
    null,
    2,
  ) + "\n",
);
writeFileSync(
  join(target, "next.config.ts"),
  'import type { NextConfig } from "next";\nconst config: NextConfig = { poweredByHeader: false, agentRules: false };\nexport default config;\n',
);
writeFileSync(
  join(target, "src", "app", "globals.css"),
  '@import "tailwindcss";\n@theme inline { --color-primary: var(--theme-primary); --color-secondary: var(--theme-secondary); --color-accent: var(--theme-accent); }\n* { box-sizing: border-box; }\nhtml { scroll-behavior: smooth; scroll-padding-top: 100px; }\nbody { margin: 0; background: #faf6ee; color: #3b3b47; }\na { text-decoration: none; color: inherit; }\nbutton { cursor: pointer; }\n@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }\n',
);
writeFileSync(
  join(target, "src", "app", "page.tsx"),
  'import { TherapyPage } from "@/components/therapy/therapy-page";\nexport default function Page() { return <TherapyPage />; }\n',
);
writeFileSync(
  join(target, "src", "app", "layout.tsx"),
  `import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = {
  title: "Giovanna Freire — Psicopedagogia com escuta e afeto",
  description: "Pedagoga e psicopedagoga em Campo Grande, MS. Avaliação cuidadosa, acompanhamento personalizado e parceria com a família no processo de aprendizagem.",
  robots: { index: true, follow: true },
  openGraph: { title: "Giovanna Freire — Aprendizagem com escuta e afeto", description: "Um olhar acolhedor e individualizado para cada criança.", locale: "pt_BR", type: "website" },
};
interface LayoutProps { children: ReactNode }
export default function Layout({ children }: LayoutProps) { return <html lang="pt-BR"><body>{children}</body></html>; }
`,
);
writeFileSync(join(target, "vercel.json"), JSON.stringify({ "$schema": "https://openapi.vercel.sh/vercel.json", framework: "nextjs", installCommand: "npm ci", buildCommand: "npm run build", outputDirectory: ".next" }, null, 2) + "\n");
console.log("Componentes, fontes e imagem sincronizados com Landing-Terapia.");
