const checks = [
  {
    title: 'Power and Outlet',
    description: 'Check that the refrigerator is plugged in and the temperature is set correctly. Many cooling issues turn out to be accidental temperature dial changes.',
  },
  {
    title: 'Temperature Settings',
    description: 'Located at the back or underneath most models. Use a vacuum with a brush attachment. Cleaning them every 6–12 months is a recommended maintenance step.',
  },
  {
    title: 'Condenser Coils',
    description: 'Make sure items inside the refrigerator are not blocking the interior vents — especially the back panel vents that',
  },
  {
    title: 'Listen for unusual sounds',
    description: 'A clicking compressor that starts and stops frequently, or silence from the freezer fan, are signs of a mechanical',
  },
] as const;

export function RefrigeratorPreCallChecks() {
  return (
    <section className="bg-[#F4F6F8] px-5 py-[50px] font-['Montserrat'] xl:h-[661px] xl:px-20 xl:py-[70px]" aria-labelledby="pre-call-checks-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-3">
        <h2 id="pre-call-checks-title" className="w-full max-w-[899px] text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:text-[42px] xl:leading-[1.4]">
          What You Can Check Before Calling a Technician
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 pt-0 md:grid-cols-2 xl:gap-x-5 xl:gap-y-6">
          {checks.map((check, index) => (
            <article key={check.title} className={`group flex min-h-[163.445px] cursor-pointer items-center gap-[25px] rounded-[24px] border border-[#D8E7F7] bg-white/90 px-[33px] py-[37px] shadow-[0_18px_45px_rgba(19,45,85,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#9EC8F2] hover:shadow-[0_22px_48px_rgba(19,45,85,0.12)] ${index < 2 ? 'xl:min-h-[192.445px]' : ''}`}>
              <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[23px] bg-[linear-gradient(128deg,#3C83F6_0%,rgba(31,113,244,0.8)_50%,rgba(31,113,244,0)_100%)] text-center text-[17px] font-black leading-none text-white shadow-[0_10px_22px_rgba(0,102,204,0.25)] transition-transform duration-300 group-hover:scale-110">
                {index + 1}
              </span>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-[7.445px]">
                <h3 className="w-full text-[20px] font-extrabold leading-normal text-[#042330]">{check.title}</h3>
                <p className="w-full text-[17px] font-medium leading-[28.9px] text-[#3F4E5C]">{check.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
