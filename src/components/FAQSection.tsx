import { useState } from "react";
import { FAQItem } from "./FAQItem";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  lastOpenedIndex: number;
  isOpen: boolean;
}

export function FAQSection({ title, faqs, lastOpenedIndex = -1 }: FAQSectionProps) {
  const [openedIndex, setOpenedIndex] = useState(lastOpenedIndex);

  const handleOpen = (index: number) => {
    if (index === openedIndex) {
      setOpenedIndex(-1);
    } else {
      setOpenedIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openedIndex}
            onClick={() => handleOpen(index)}
          />
        ))}
      </div>
    </div>
  );
} 