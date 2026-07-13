import { AlertBar } from '../components/sections/AlertBar';
import { ApplianceServices } from '../components/sections/ApplianceServices';
import { CitiesWeServe } from '../components/sections/CitiesWeServe';
import { FaqFooter } from '../components/sections/FaqFooter';
import { HvacEmergency } from '../components/sections/HvacEmergency';
import { MembershipPlans } from '../components/sections/MembershipPlans';
import { SamsungApplianceHero } from '../components/sections/SamsungApplianceHero';
import { SamsungAppliancesRepair } from '../components/sections/SamsungAppliancesRepair';
import { SamsungCoolingIntro } from '../components/sections/SamsungCoolingIntro';
import { SamsungProblemsAndCodes } from '../components/sections/SamsungProblemsAndCodes';
import { SamsungRepairCta } from '../components/sections/SamsungRepairCta';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { homePageData, serviceCategoryPageData } from '../data/homePageData';

export function SamsungAppliancePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <SamsungApplianceHero />
      <AlertBar data={homePageData.alertBar} />
      <SamsungCoolingIntro />
      <SamsungAppliancesRepair />
      <SamsungProblemsAndCodes />
      <ApplianceServices data={homePageData.applianceServices} />
      <MembershipPlans data={homePageData.membershipPlans} />
      <HvacEmergency />
      {/* <CitiesWeServe data={serviceCategoryPageData.citiesWeServe} /> */}
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <FaqFooter faq={homePageData.faq} />
      <SamsungRepairCta />
    </main>
  );
}
