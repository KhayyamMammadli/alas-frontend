import { useState } from 'react';

const desktopCards = [
  {
    question: 'Can I really customize a tote bag myself, or should I leave it to the pros?',
    answer: 'You can totally try it yourself, but let’s be real—if you want that flawless, professional look, you’re better off with the experts at Yes We Print. They know how to make your tote look amazing without any stress on your end!',
  },
  {
    question: 'Can I really customize a tote bag myself, or should I leave it to the pros?',
    answer: 'You can totally try it yourself, but let’s be real—if you want that flawless, professional look, you’re better off with the experts at Yes We Print. They know how to make your tote look amazing without any stress on your end!',
  },
  {
    question: 'What if I don’t like the finished product? Is there a guarantee?',
    answer: 'Totally understandable! With Yes We Print, they genuinely want you to be happy. If something isn’t right, just reach out to them, and they’ll work with you to make it better. They’re all about keeping customers satisfied!',
  },
  {
    question: 'What if I don’t like the finished product? Is there a guarantee?',
    answer: 'Totally understandable! With Yes We Print, they genuinely want you to be happy. If something isn’t right, just reach out to them, and they’ll work with you to make it better. They’re all about keeping customers satisfied!',
  },
  {
    question: 'How do I choose the right customization technique for my tote?',
    answer: 'That’s a great question! Think about what fits your style. Do you want something bold like screen print or something classic like embroidery? Yes We Print can help you decide, so you end up with a design you love.',
  },
  {
    question: 'How do I choose the right customization technique for my tote?',
    answer: 'That’s a great question! Think about what fits your style. Do you want something bold like screen print or something classic like embroidery? Yes We Print can help you decide, so you end up with a design you love.',
  },
] as const;

const mobileItems = [
  {
    question: 'How Long Does A Service ?',
    answer: 'We denounce with righteous indignation and dislike men who are so major beguiled and demoralized by the charms of pleasure of the moment blinded by desire ante odio dignissim quam vitae pulvinar turpis. Generator tend to repeat predefined chunks necessary making this internet.',
  },
  { question: 'How Can I Become A Member ?', answer: 'Choose the membership plan that fits your business and our team will confirm your coverage and first available service window.' },
  { question: 'How Can I Become A Member ?', answer: 'Choose the membership plan that fits your business and our team will confirm your coverage and first available service window.' },
  { question: 'What Payment Gateway ?', answer: 'We support secure card payments and common online payment methods for approved service invoices.' },
  { question: 'How Can I Cancel My Request ?', answer: 'Contact our support team before dispatch and we will cancel or reschedule your service request.' },
] as const;

export function CommercialFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="h-[874.19px] bg-white px-5 py-[50px] font-['Montserrat'] xl:h-[862px] xl:bg-[#F4F6F8] xl:px-20 xl:py-0" aria-labelledby="commercial-faq-title">
      <div className="mx-auto flex h-[774.19px] w-full max-w-[353px] flex-col gap-[33px] xl:h-[652px] xl:max-w-[1280px] xl:translate-y-[106px] xl:gap-10">
        <div className="flex h-[102px] w-full flex-col items-center xl:h-[108px] xl:gap-[15px]">
          <div className="hidden items-center justify-center rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#00478F] pb-[1.9px] pl-[3px] pr-[15px] pt-[1.5px] xl:flex">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-white py-[7px]">
              <img src="/assets/figma-commercial-faq-icon.svg" alt="" className="size-4" aria-hidden="true" />
            </span>
            <span className="ml-[5px] text-[18px] font-semibold leading-[1.6] text-white">Faq&apos;s</span>
          </div>
          <h2 id="commercial-faq-title" className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#000A14] xl:text-[42px] xl:leading-[1.4] xl:text-[#042330]">
            General <span className="text-[#00478F] xl:text-[#003366]">frequently</span> asked questions
          </h2>
        </div>

        <div className="hidden grid-cols-3 grid-rows-2 gap-4 xl:grid xl:h-[504px]">
          {desktopCards.map((card, index) => (
            <article key={index} className="flex h-[244px] flex-col items-center justify-center overflow-hidden rounded-[4px] border border-[#E8E8E8] bg-white p-6">
              <div className="flex w-full flex-col items-center gap-[14px] text-[16px] leading-[1.6]">
                <h3 className="w-full font-semibold text-[#090A0A]">{card.question}</h3>
                <p className="w-full max-w-[368px] font-normal text-[#454648]">{card.answer}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex h-[639.19px] w-full flex-col gap-4 xl:hidden">
          {mobileItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={`${item.question}-${index}`} className={`w-full overflow-hidden rounded-bl-[12px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] border border-[#E4E4E4] bg-white transition-[height] duration-300 ${isOpen ? 'h-[343.19px]' : 'h-[58px]'}`}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(current => current === index ? null : index)} className={`flex w-full items-center justify-between px-5 text-left ${isOpen ? 'h-[78px]' : 'h-[58px]'}`}>
                  <span className={`text-[16px] font-semibold leading-[1.6] ${isOpen ? 'text-[#00478F]' : 'text-[#090A0A]'}`}>{item.question}</span>
                  <svg viewBox="0 0 24 24" fill="none" className={`size-5 shrink-0 text-black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                    <path d="m8 10 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-[15.995px] pt-[15.195px] text-[16px] font-semibold leading-[1.6] text-[#17181A]">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
