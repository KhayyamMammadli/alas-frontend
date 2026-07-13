import { useState } from 'react';

const faqItems = [
  {
    question: 'How Long Does A Service Take ?',
    answer: 'We denounce with righteous indignation and dislike men who are so major beguiled and demoralized by the charms of pleasure of the moment blinded by desire ante odio dignissim quam vitae pulvinar turpis. Generator tend to repeat predefined chunks necessary making this internet.',
  },
  {
    question: 'How Can I Become A Member ?',
    answer: 'Contact our team or select a residential or commercial protection plan. We will confirm the available coverage and help you complete your membership enrollment.',
  },
  {
    question: 'What Payment Gateway You Support ?',
    answer: 'Our service team accepts major payment methods. The available payment options are confirmed when your appointment or protection plan is scheduled.',
  },
  {
    question: 'How Can I Cancel My Request ?',
    answer: 'Contact customer support before your technician is dispatched. Our team will cancel or reschedule the request and confirm the update with you.',
  },
];

export function AboutRefrigeratorFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F4F6F8] px-5 py-16 xl:h-[945px] xl:px-20 xl:pb-16 xl:pt-[100px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10">
        <h2 className="w-full text-center text-[32px] font-bold leading-[1.4] text-[#042330] xl:text-[42px]">Refrigerator Error Code FAQs</h2>

        <div className="flex w-full flex-col gap-[30px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `about-refrigerator-faq-${index}`;

            return (
              <article key={item.question} className="overflow-hidden rounded-bl-xl rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`flex min-h-[77px] w-full items-center px-5 py-4 text-left ${isOpen ? 'border-b border-dashed border-[#00478F]' : ''}`}
                >
                  <span className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-[#00478F] text-[20px] font-normal leading-[45px] text-white">?</span>
                  <span className={`ml-[15px] min-w-0 flex-1 text-[16px] font-bold leading-[1.6] transition-colors duration-300 sm:text-[20px] ${isOpen ? 'text-[#00478F]' : 'text-[#090A0A]'}`}>{item.question}</span>
                  <svg aria-hidden="true" className={`ml-4 size-6 shrink-0 text-[#00478F] transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 24 24" fill="none">
                    <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div id={panelId} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:duration-0 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-[15px] text-[15px] font-semibold leading-[1.6] text-[#17181A] sm:text-[16px]">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex w-full flex-col items-start gap-6 rounded-lg border-l-4 border-[#2A7AE2] bg-[#F0F6FF] px-6 py-6 shadow-[0_4px_3px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1)] xl:h-[140px] xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:pl-7">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[20px] font-bold leading-[1.6] text-[#090A0A]">Need Refrigerator Repair?</h3>
            <p className="max-w-[700px] text-[16px] font-normal leading-[1.6] text-[#454648]">For $X/mo, every future refrigerator repair is covered under your Alas Protection Plan. One-time job ($89–$400) → Plan member ($1,200–$15K LTV).</p>
          </div>
          <a href="#schedule" className="flex h-[60px] w-full shrink-0 items-center justify-center rounded-[120px] bg-[#277ACD] px-7 py-4 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] sm:w-[340px]">Schedule Service</a>
        </div>
      </div>
    </section>
  );
}
