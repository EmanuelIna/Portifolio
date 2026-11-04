import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <section className="shell not-found">
      <span className="eyebrow">ERRO 404</span>
      <h1>
        Esse caminho ainda
        <br />
        não foi construído.
      </h1>
      <Button href="/" variant="light">
        Voltar ao início
      </Button>
    </section>
  );
}
