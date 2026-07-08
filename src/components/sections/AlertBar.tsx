import type { HomePageData } from '../../data/homePageData';
type AlertBarProps = {
  data: HomePageData['alertBar'];
};

export function AlertBar({ data }: AlertBarProps) {
  return (
    <section className="h-16 bg-[#D1D5DC] text-[#121315]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-[10px] md:px-10 xl:px-20">
        <p className="whitespace-nowrap text-[14px] font-extrabold leading-[20.99px]">{data.text}</p>
        <button className="h-9 min-w-[134px] rounded-[120px] bg-[#F4F9FF] px-[14px] py-2 text-[14px] font-semibold leading-5 text-[#042330] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          {data.action}
        </button>
      </div>
    </section>
  );
}
