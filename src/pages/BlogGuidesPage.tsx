import { CommercialTrustBar } from '../components/sections/CommercialTrustBar';
import { GoldPlanDetails } from '../components/sections/GoldPlanDetails';
import { ResidentialProtectionHero } from '../components/sections/ResidentialProtectionHero';
import { ResidentialPlanChooser } from '../components/sections/ResidentialPlanChooser';
import { ResidentialFullPlanComparison } from '../components/sections/ResidentialFullPlanComparison';
import { PreventivePlanBenefits } from '../components/sections/PreventivePlanBenefits';
import { HomeWarrantyComparison } from '../components/sections/HomeWarrantyComparison';
import { ResidentialProtectionPlansCta } from '../components/sections/ResidentialProtectionPlansCta';
import { FaqFooter } from '../components/sections/FaqFooter';
import { SamsungRepairCta } from '../components/sections/SamsungRepairCta';
import { homePageData } from '../data/homePageData';

export function BlogGuidesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ResidentialProtectionHero />
      <CommercialTrustBar />
      <ResidentialPlanChooser />
      <GoldPlanDetails />
      <ResidentialFullPlanComparison />
      <PreventivePlanBenefits />
      <HomeWarrantyComparison />
      <ResidentialProtectionPlansCta />
      <FaqFooter faq={homePageData.faq} />
      <SamsungRepairCta />
    </main>
  );
}
