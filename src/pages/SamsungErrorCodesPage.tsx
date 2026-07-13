import { AboutRefrigeratorFaq } from '../components/sections/AboutRefrigeratorFaq';
import { RepairProcess } from '../components/sections/RepairProcess';
import { SamsungCoolingIntro } from '../components/sections/SamsungCoolingIntro';
import { SamsungErrorCodeList } from '../components/sections/SamsungErrorCodeList';
import { SamsungErrorCodesHero } from '../components/sections/SamsungErrorCodesHero';
import { SamsungMoreHelp } from '../components/sections/SamsungMoreHelp';
import { SamsungProfessionalRepair } from '../components/sections/SamsungProfessionalRepair';
import { SamsungRepairCta } from '../components/sections/SamsungRepairCta';
import { serviceCategoryPageData } from '../data/homePageData';

export function SamsungErrorCodesPage() {
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
