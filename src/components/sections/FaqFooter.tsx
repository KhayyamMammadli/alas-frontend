import { useState } from 'react';
import type { HomePageData } from '../../data/homePageData';
import { ChevronDown } from '../ui/Icons';
import { Footer } from './Footer';

type FaqFooterProps = {
  faq: HomePageData['faq'];
  footer?: HomePageData['footer'];
};

export function FaqFooter({ faq, footer }: FaqFooterProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F4F6F8] pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-4 pt-[100px] md:px-0">
        <h2 className="text-center text-[32px] font-bold leading-[1.4] text-[#090A0A] md:text-[42px]">{faq.title}</h2>
        <div className="mx-auto mt-10 flex flex-col gap-[30px] md:mt-[40px] md:h-[722.19px] md:w-[1280px]">
          {faq.items.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="overflow-hidden rounded-[12px] bg-white md:rounded-r-[50px] md:rounded-bl-[12px] md:rounded-tl-[12px]"
            >
              <button
                aria-expanded={openIndex === index}
                className="flex h-[80px] w-full items-center gap-5 px-5 text-left md:px-5"
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              >
                <span className="inline-flex size-[45px] shrink-0 items-center justify-center rounded-full bg-[#00478F] text-[24px] font-normal leading-none text-white">
                  ?
                </span>
                <span
                  className={`flex-1 text-[20px] font-bold leading-[1.6] ${
                    openIndex === index ? 'text-[#00478F]' : 'text-[#090A0A]'
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown className={`size-6 text-[#00478F] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  openIndex === index && item.answer ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="border-t border-dashed border-[#00478F] px-5 pb-5 pt-[21px] md:px-[80px] md:pb-[25px]">
                    <p className="text-[16px] font-semibold leading-[1.6] text-[#202124]">{item.answer}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {footer ? <Footer data={footer} /> : null}
    </section>
  );
}
