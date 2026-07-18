import { ApplianceServices } from '../components/sections/ApplianceServices';
import { CitiesWeServe } from '../components/sections/CitiesWeServe';
import { FaqFooter } from '../components/sections/FaqFooter';
import { HvacEmergency } from '../components/sections/HvacEmergency';
import { SamsungRepairCta } from '../components/sections/SamsungRepairCta';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { WestPlanoApplianceRepairHero } from '../components/sections/WestPlanoApplianceRepairHero';
import { WestPlanoAppliancesGrid } from '../components/sections/WestPlanoAppliancesGrid';
import { WestPlanoLocalServices } from '../components/sections/WestPlanoLocalServices';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { homePageData, serviceCategoryPageData } from '../data/homePageData';

export function RefrigeratorRepairPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <WestPlanoApplianceRepairHero />
      <WestPlanoLocalServices />
      <WestPlanoAppliancesGrid />
      <ApplianceServices data={homePageData.applianceServices} />
      <WhyChooseUs data={homePageData.whyChooseUs} />
      <CitiesWeServe data={serviceCategoryPageData.citiesWeServe} />
      <HvacEmergency />
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <FaqFooter faq={homePageData.faq} />
      <SamsungRepairCta title="Need Appliance Repair in West Plano?" />
    </main>
  );
}
