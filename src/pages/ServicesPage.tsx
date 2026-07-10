import { homePageData, serviceCategoryPageData } from '../data/homePageData';
import { ServiceCategoryBanner } from '../components/sections/ServiceCategoryBanner';
import { ServiceCategoryIntro } from '../components/sections/ServiceCategoryIntro';
import { RepairProcess } from '../components/sections/RepairProcess';
import { ApplianceServices } from '../components/sections/ApplianceServices';
import { MembershipPlans } from '../components/sections/MembershipPlans';
import { CitiesWeServe } from '../components/sections/CitiesWeServe';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { ServiceCategoryQuestions } from '../components/sections/ServiceCategoryQuestions';

export function ServicesPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <ServiceCategoryBanner data={serviceCategoryPageData.banner} />
      <ServiceCategoryIntro data={serviceCategoryPageData.intro} />
      <ApplianceServices data={homePageData.applianceServices} />
      <RepairProcess data={serviceCategoryPageData.repairProcess} />
      <MembershipPlans data={homePageData.membershipPlans} />
      <CitiesWeServe data={serviceCategoryPageData.citiesWeServe} />
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <ServiceCategoryQuestions data={serviceCategoryPageData.commonQuestions} />
    </main>
  );
}
