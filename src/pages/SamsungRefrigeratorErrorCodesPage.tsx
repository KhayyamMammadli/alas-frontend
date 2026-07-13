import { SamsungErrorCodesHero } from '../components/sections/SamsungErrorCodesHero';
import { SamsungCoolingIntro } from '../components/sections/SamsungCoolingIntro';
import { SamsungErrorCodeList } from '../components/sections/SamsungErrorCodeList';
import { SamsungProfessionalRepair } from '../components/sections/SamsungProfessionalRepair';
import { SamsungRepairCta } from '../components/sections/SamsungRepairCta';
import { SamsungMoreHelp } from '../components/sections/SamsungMoreHelp';
import { AboutRefrigeratorFaq } from '../components/sections/AboutRefrigeratorFaq';
import { RepairProcess } from '../components/sections/RepairProcess';
import { serviceCategoryPageData } from '../data/homePageData';

export function SamsungRefrigeratorErrorCodesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <SamsungErrorCodesHero />
      <SamsungCoolingIntro />
      <SamsungErrorCodeList />
      <RepairProcess data={serviceCategoryPageData.repairProcess} />

      <SamsungProfessionalRepair />
      <SamsungRepairCta />
      <SamsungMoreHelp />
      <AboutRefrigeratorFaq />
    </main>
  );
}
