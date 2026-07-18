import { ChooseYourPlan } from '../components/sections/ChooseYourPlan';
import { PlanComparison } from '../components/sections/PlanComparison';
import { PlanHelpCta } from '../components/sections/PlanHelpCta';
import { ProtectionPlanSavings } from '../components/sections/ProtectionPlanSavings';
import { ServiceCategoryQuestions } from '../components/sections/ServiceCategoryQuestions';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { SimpleTransparentSteps } from '../components/sections/SimpleTransparentSteps';
import { serviceCategoryPageData } from '../data/homePageData';

export function FranchiseOpportunitiesPage() {
  return (
    <main id="membership-options" className="w-full overflow-x-hidden">
      <ChooseYourPlan />
      <SimpleTransparentSteps />
      <ProtectionPlanSavings />
      <PlanComparison />
      <PlanHelpCta />
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <ServiceCategoryQuestions data={serviceCategoryPageData.commonQuestions} />
    </main>
  );
}





