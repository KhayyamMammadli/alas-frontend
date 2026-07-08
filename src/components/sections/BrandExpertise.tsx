import type { HomePageData } from '../../data/homePageData';

type BrandExpertiseProps = {
  data: HomePageData['brandExpertise'];
};

export function BrandExpertise({ data }: BrandExpertiseProps) {
  return (
    <section id="brands" className="bg-white px-4 py-16 md:h-[405px] md:px-0 md:py-0">
      <div className="mx-auto overflow-hidden md:w-[1280px] md:pt-[70px]">
        <h2 className="text-center text-[32px] font-bold leading-[1.4] text-[#090A0A] md:h-[59px] md:text-[42px]">
          {data.title}
        </h2>
        <div className="mt-[29px] flex gap-[25px] overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {data.brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-[180px] min-w-[175px] items-center justify-center rounded-[15px] bg-[#F6F6F6] px-5 py-[30px]"
            >
              <img src={brand.logo} alt={`${brand.name} appliance brand service`} className="h-[120px] w-[135px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
