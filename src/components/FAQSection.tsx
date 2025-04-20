import { FAQItem } from "./FAQItem";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
}

export function FAQSection({ title, faqs }: FAQSectionProps) {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
} 