import { RefrigeratorNotCoolingHero } from '../components/sections/RefrigeratorNotCoolingHero';
import { SamsungCoolingIntro } from '../components/sections/SamsungCoolingIntro';
import { RefrigeratorCoolingReasons } from '../components/sections/RefrigeratorCoolingReasons';
import { HvacEmergency } from '../components/sections/HvacEmergency';
import { RefrigeratorPreCallChecks } from '../components/sections/RefrigeratorPreCallChecks';
import { RefrigeratorWarningSigns } from '../components/sections/RefrigeratorWarningSigns';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { FaqFooter } from '../components/sections/FaqFooter';
import { SamsungRepairCta } from '../components/sections/SamsungRepairCta';
import { homePageData, serviceCategoryPageData } from '../data/homePageData';

export function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <RefrigeratorNotCoolingHero />
      <SamsungCoolingIntro />
      <RefrigeratorCoolingReasons />
      <HvacEmergency />
      <RefrigeratorPreCallChecks />
      <RefrigeratorWarningSigns />
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <FaqFooter faq={homePageData.faq} />
      <SamsungRepairCta />
    </main>
  );
}
