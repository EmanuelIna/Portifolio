"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
export interface FaqItem {
  question: string;
  answer: string;
}
interface FaqProps {
  items: FaqItem[];
}
export function Faq({ items }: FaqProps) {
  return (
    <Accordion.Root type="single" collapsible className="faq-list">
      {items.map((item, index) => (
        <Accordion.Item
          value={`item-${index}`}
          className="faq-item"
          key={item.question}
        >
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              {item.question}
              <Plus size={18} aria-hidden="true" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            <p>{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
