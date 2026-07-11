import { useState } from 'react';
import type { HomePageData } from '../../data/homePageData';
import { Footer } from './Footer';

type FaqFooterProps = {
  faq: HomePageData['faq'];
  footer?: HomePageData['footer'];
};

export function FaqFooter({ faq, footer }: FaqFooterProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F4F6F8]">
      <div className="mx-auto h-[874.19px] w-full max-w-[1440px] px-5 py-[50px] xl:h-[1021.19px] xl:px-20 xl:py-[100px]">
        <div className="flex w-full flex-col items-center gap-[33px] xl:gap-10">
          <h2 className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:text-[42px] xl:leading-[1.4]">
            {faq.title}
          </h2>

          <div className="flex w-full flex-col items-start gap-4 xl:gap-[30px]">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={`${item.question}-${index}`}
                  className={`w-full overflow-hidden rounded-bl-[12px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-white ${index === 5 ? 'max-xl:hidden' : ''}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className={`flex w-full items-center px-5 text-left transition-[height] duration-300 ${
                      isOpen ? 'h-[78px]' : 'h-[58px] xl:h-[77px]'
                    }`}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  >
                    <span className="mr-[15px] hidden size-[45px] shrink-0 items-center justify-center rounded-full bg-[#00478F] text-[20px] font-normal leading-[45px] text-white xl:inline-flex">
                      ?
                    </span>
                    <span className={`min-w-0 flex-1 whitespace-nowrap text-[16px] font-semibold leading-[1.6] xl:text-[20px] xl:font-bold ${isOpen ? 'text-[#00478F]' : 'text-[#090A0A]'}`}>
                      <span className="xl:hidden">{item.mobileQuestion}</span>
                      <span className="hidden xl:inline">{item.question}</span>
                    </span>
                    <Chevron open={isOpen} />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-5 pb-[15.995px] pt-[15.195px] xl:border-t xl:border-dashed xl:border-[#00478F]">
                        <p className="text-[16px] font-semibold leading-[1.6] text-[#17181A]">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {footer ? <Footer data={footer} /> : null}
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`ml-4 size-6 shrink-0 text-[#00478F] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="m8 10 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
