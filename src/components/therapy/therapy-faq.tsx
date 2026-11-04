"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { therapyFaqs } from "./config";
import styles from "./therapy.module.css";
export function TherapyFaq() {
  return (
    <Accordion.Root type="single" collapsible className={styles.faq}>
      {therapyFaqs.map((item, index) => (
        <Accordion.Item
          value={`question-${index}`}
          key={item.question}
          className={styles.faqItem}
        >
          <Accordion.Header>
            <Accordion.Trigger className={styles.faqTrigger}>
              {item.question}
              <Plus size={18} aria-hidden="true" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.faqContent}>
            <p>{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
