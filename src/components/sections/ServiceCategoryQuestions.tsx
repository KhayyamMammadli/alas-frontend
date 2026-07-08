import { useState } from 'react';
import type { ServiceCategoryPageData } from '../../data/homePageData';
import { ChevronDown } from '../ui/Icons';

type ServiceCategoryQuestionsProps = {
  data: ServiceCategoryPageData['commonQuestions'];
};

export function ServiceCategoryQuestions({ data }: ServiceCategoryQuestionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const mobileItems = data.mobile.items;

  return (
    <section className="bg-white px-6 pb-[64px] pt-[62px] md:px-8 md:pb-[39px] md:pt-[38px]">
      <div className="mx-auto w-full max-w-[1244px] max-md:hidden">
        <h2 className="text-center text-[30px] font-bold leading-[38px] text-[#090A0A] md:text-[36px] md:leading-[45px]">
          {data.title} <span className="text-[#003366]">- {data.highlightedTitle}</span>
        </h2>

        <div className="mt-[35px] grid gap-[12px] md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="min-h-[190px] rounded-[4px] border border-[#E5E7EB] bg-white px-[18px] pb-[18px] pt-[19px]"
            >
              <h3 className="text-[14px] font-bold leading-[22px] text-[#111111]">{item.question}</h3>
              <p className="mt-[13px] text-[14px] font-normal leading-[22px] text-[#5D5D5D]">{item.answer}</p>
            </article>
          ))}
        </div>

        <aside className="mt-[35px] flex min-h-[110px] items-center justify-between gap-6 rounded-[6px] border border-[#DDE8F8] border-l-[4px] border-l-[#2D82D8] bg-[#EFF6FF] px-[20px] py-[19px] shadow-[0_2px_8px_rgba(15,23,42,0.12)] max-md:flex-col max-md:items-start">
          <div>
            <h3 className="text-[17px] font-bold leading-[23px] text-[#111111]">{data.cta.title}</h3>
            <p className="mt-[10px] max-w-[820px] text-[14px] font-normal leading-[21px] text-[#4D4F55]">{data.cta.description}</p>
          </div>
          <a
            href={data.cta.href}
            className="inline-flex h-[48px] w-[266px] shrink-0 items-center justify-center rounded-[999px] bg-[#2D82D8] text-[15px] font-bold leading-[24px] text-white shadow-[0_3px_8px_rgba(15,23,42,0.16)] transition hover:bg-[#1F73C5] max-sm:w-full"
          >
            {data.cta.action}
          </a>
        </aside>
      </div>

      <div className="mx-auto w-full max-w-[345px] md:hidden">
        <h2 className="text-center text-[32px] font-bold leading-[50px] text-[#090A0A]">
          {data.mobile.title.map((segment, index) => (
            <span key={`${segment.text}-${index}`} className={segment.accent ? 'text-[#0A73D9]' : undefined}>
              {segment.text}
            </span>
          ))}
        </h2>

        <div className="mt-[43px] flex flex-col">
          {mobileItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={`${item.question}-mobile-${index}`} className="w-full">
                <button
                  aria-expanded={isOpen}
                  className="flex min-h-[45px] w-full items-center justify-between gap-4 py-[7px] text-left"
                  type="button"
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                >
                  <span className={`text-[14px] font-bold leading-[20px] ${isOpen ? 'text-[#00478F]' : 'text-[#111111]'}`}>
                    {item.question}
                  </span>
                  <ChevronDown className={`size-[15px] shrink-0 text-[#090A0A] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-[38px] pt-[23px] text-[14px] font-semibold leading-[22px] text-[#202124]">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-[36px] rounded-[8px] border border-[#DDE8F8] border-l-[4px] border-l-[#2D82D8] bg-[#EFF6FF] px-[29px] pb-[22px] pt-[27px] shadow-[0_2px_10px_rgba(15,23,42,0.18)]">
          <h3 className="text-[20px] font-bold leading-[30px] text-[#090A0A]">{data.mobile.cta.title}</h3>
          <p className="mt-[14px] text-[14px] font-normal leading-[24px] text-[#4D4F55]">{data.mobile.cta.description}</p>
          <a
            href={data.mobile.cta.href}
            className="mt-[14px] inline-flex h-[56px] w-full items-center justify-center rounded-[999px] bg-[#2D82D8] text-[16px] font-bold leading-[24px] text-white shadow-[0_4px_9px_rgba(15,23,42,0.18)] transition hover:bg-[#1F73C5]"
          >
            {data.mobile.cta.action}
          </a>
        </aside>
      </div>
    </section>
  );
}
