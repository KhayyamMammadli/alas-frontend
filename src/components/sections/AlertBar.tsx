import type { HomePageData } from '../../data/homePageData';
type AlertBarProps = {
  data: HomePageData['alertBar'];
};

export function AlertBar({ data }: AlertBarProps) {
  return (
    <section className="h-[110px] bg-[#D1D5DC] text-[#25272A] xl:h-16 xl:text-[#121315]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-[9px] px-5 py-[14px] xl:flex-row xl:justify-between xl:gap-0 xl:px-20 xl:py-[10px]">
        <p className="whitespace-nowrap text-center text-[18px] font-bold leading-[1.6] xl:text-left xl:text-[14px] xl:font-extrabold xl:leading-[20.99px]">
          {data.text}
        </p>
        <a
          href="tel:+14696383215"
          className="flex h-11 w-full max-w-[233px] items-center justify-center rounded-[120px] bg-[#F4F9FF] px-[14px] py-2 text-[14px] font-semibold leading-5 text-[#121F2D] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:bg-white xl:h-9 xl:w-auto xl:min-w-[134px] xl:text-[#042330]"
        >
          {data.action}
        </a>
      </div>
    </section>
  );
}
