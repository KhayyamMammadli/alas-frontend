import { HvacHero } from '../components/sections/HvacHero';
import { HvacServiceIntro } from '../components/sections/HvacServiceIntro';
import { ServiceCategoryIntro } from '../components/sections/ServiceCategoryIntro';
import { ApplianceServices } from '../components/sections/ApplianceServices';
import { HvacProblems } from '../components/sections/HvacProblems';
import { HvacCommonProblems } from '../components/sections/HvacCommonProblems';
import { MembershipPlans } from '../components/sections/MembershipPlans';
import { RepairProcess } from '../components/sections/RepairProcess';
import { HvacEmergency } from '../components/sections/HvacEmergency';
import { HvacPrevention } from '../components/sections/HvacPrevention';
import { CitiesWeServe } from '../components/sections/CitiesWeServe';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { ServiceCategoryQuestions } from '../components/sections/ServiceCategoryQuestions';
import { homePageData, serviceCategoryPageData } from '../data/homePageData';

export function HvacPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HvacHero />
      <HvacServiceIntro />
      <ApplianceServices data={homePageData.applianceServices} />
      <HvacProblems />
      <ServiceCategoryIntro data={serviceCategoryPageData.intro} />
      <HvacCommonProblems />
      <MembershipPlans data={homePageData.membershipPlans} />
      <RepairProcess data={serviceCategoryPageData.repairProcess} />
      <HvacEmergency />
      <HvacPrevention />
      <CitiesWeServe data={serviceCategoryPageData.citiesWeServe} />
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <ServiceCategoryQuestions data={serviceCategoryPageData.commonQuestions} />
    </main>
  );
}
