import { RefrigerationHero } from '../components/sections/RefrigerationHero';
import { ServiceCategoryIntro } from '../components/sections/ServiceCategoryIntro';
import { ApplianceServices } from '../components/sections/ApplianceServices';
import { HvacEmergency } from '../components/sections/HvacEmergency';
import { RefrigeratorIssues } from '../components/sections/RefrigeratorIssues';
import { RefrigeratorRepairIncluded } from '../components/sections/RefrigeratorRepairIncluded';
import { RepairProcess } from '../components/sections/RepairProcess';
import { MembershipPlans } from '../components/sections/MembershipPlans';
import { HvacPrevention } from '../components/sections/HvacPrevention';
import { CitiesWeServe } from '../components/sections/CitiesWeServe';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { ServiceCategoryQuestions } from '../components/sections/ServiceCategoryQuestions';
import { homePageData, serviceCategoryPageData } from '../data/homePageData';

export function RefrigerationPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <RefrigerationHero />
      <ServiceCategoryIntro data={serviceCategoryPageData.intro} />
      <ApplianceServices data={homePageData.applianceServices} />
      <HvacEmergency />
      <RefrigeratorIssues />
      <RefrigeratorRepairIncluded />
      <RepairProcess data={serviceCategoryPageData.repairProcess} />
      <MembershipPlans data={homePageData.membershipPlans} />
      <CitiesWeServe data={serviceCategoryPageData.citiesWeServe} />
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <ServiceCategoryQuestions data={serviceCategoryPageData.commonQuestions} />
    </main>
  );
}
