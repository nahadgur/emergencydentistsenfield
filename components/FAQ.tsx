'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = { question: string; answer: string };

// 2026-05-05 Enfield rebuild: rounded-card accordion. Soft blue
// hover, divider between rows, Inter throughout. The page-level
// FAQPage JSON-LD lives at the call site (not this component) to
// avoid double-emit when the same component is rendered on a page
// that already emits FAQPage schema.
export function FAQ({ faqs, title = 'Frequently asked questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <h2 className="text-[24px] lg:text-[30px] font-bold leading-tight text-ink mb-6 tracking-[-0.01em]">
        {title}
      </h2>
      <div className="bg-white border border-line rounded-card overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i} className={i > 0 ? 'border-t border-line' : ''}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 lg:px-6 py-4 text-left text-[15px] font-semibold text-ink hover:bg-soft transition-colors"
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`text-ink-mute flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 lg:px-6 pb-5 text-[14.5px] text-ink-text leading-relaxed border-t border-line pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
