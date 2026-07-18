const preventiveServices = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  title: 'Refrigerator Coil Cleaning',
  description: 'Dust buildup forces the compressor harder. We clea',
}));

const householdProfiles = [
  {
    title: 'Small households, 1–2 people',
    description: 'You have a few appliances that mostly work fine. You want peace of mind and a trusted technician when something goes wrong.',
  },
  {
    title: 'Busy families, 3–5 people',
    description: 'Your appliances work hard every day. Faster scheduling, better discounts, and longer repair warranty matter to you.',
  },
  {
    title: 'Large or high-usage households',
    description: 'You run appliances hard — multiple loads a day, frequent cooking. You want maximum priority and two maintenance visits.',
  },
] as const;

export function PreventivePlanBenefits() {
  return (
    <section className="h-[1445px] bg-white px-5 pt-[50px] font-['Montserrat'] xl:h-[810px] xl:px-20 xl:pt-20" aria-labelledby="preventive-plan-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <h2 id="preventive-plan-title" className="w-full max-w-[353px] text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:max-w-[776px] xl:text-[42px] xl:leading-[1.4]">
          Designed to prevent problems, not <span className="text-[#00478F]">just fix them</span>
        </h2>

        <p className="mt-[39px] hidden w-[956px] text-center text-[16px] font-semibold leading-[1.6] text-[#003366] xl:block">
          One low monthly fee covers repairs for all your major appliances. No deductibles. No surprise bills. Same-day service from your local Plano technician.
        </p>

        <div className="mt-[27px] flex w-full flex-col gap-5 xl:mt-[39px] xl:flex-row">
          {preventiveServices.map((service, index) => (
            <article key={service.id} className={`group flex min-h-[132px] w-full items-start rounded-[12px] bg-[#D5E1FA] px-5 py-6 transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:bg-[#C9D9F7] hover:shadow-[0_14px_30px_rgba(39,122,205,0.18)] focus-within:-translate-y-1 focus-within:shadow-[0_14px_30px_rgba(39,122,205,0.18)] xl:h-[196px] xl:w-[240px] xl:items-center xl:justify-center ${index === 4 ? 'max-xl:hidden' : ''}`}>
              <div className="flex w-full items-start gap-3 xl:w-[200px] xl:flex-col xl:items-center">
                <img src="/assets/figma-prevention-check.svg" alt="" className="mt-[1px] size-[22px] shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <div className="flex w-[278px] flex-col gap-3 xl:w-[200px] xl:items-center">
                  <h3 className="text-[18px] font-bold leading-[1.6] text-[#090A0A] xl:text-center">{service.title}</h3>
                  <p className="text-[14px] font-normal leading-[1.6] text-[#454648] xl:text-center">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[17px] flex w-full flex-col xl:mt-[39px] xl:w-[1100px] xl:flex-row xl:gap-[20px]">
          {householdProfiles.map(profile => (
            <article key={profile.title} className="flex min-h-[184px] w-full flex-col gap-3 rounded-[14px] border-2 border-[#F4F4F6] border-t-[3px] bg-white p-[28px] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-[#D5E1FA] hover:shadow-[0_12px_30px_rgba(23,32,51,0.08)] xl:h-[169px] xl:min-h-0 xl:w-[353.33px] xl:p-[28px]">
              <h3 className="whitespace-nowrap text-[16px] font-semibold leading-[1.6] text-[#FF6B35]">{profile.title}</h3>
              <p className="w-full text-[14px] font-normal leading-[1.6] text-[#17181A] xl:w-[291px]">{profile.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
